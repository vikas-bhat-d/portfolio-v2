import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sendAdminMail = async (
  name: string,
  email: string,
  message: string
) => {
  return transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    replyTo: email,
    subject: `📩 New contact request from ${name}`,
    html: adminEmailHTML({ name, email, message }),
  });
};

const sendUserAutoReply = async (name: string, email: string) => {
  return transporter.sendMail({
    from: `"Vikas Bhat D" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "✅ I’ve received your message",
    html: userAutoReplyHTML({ name }),
  });
};

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendAdminMail(name, email, message);

    try{

      await sendUserAutoReply(name, email)
    }catch(err){
      console.log(err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}


const adminEmailHTML = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => `
  <div style="font-family: Arial, sans-serif; background:#0f0f0f; padding:24px;">
    <div style="max-width:600px; margin:auto; background:#111; border-radius:12px; padding:24px; color:#e5e5e5;">
      <h2 style="color:#ff5a3c;">📬 New Contact Request</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      <div style="margin-top:16px; padding:16px; background:#1a1a1a; border-radius:8px;">
        <p style="margin:0; color:#bdbdbd;">Message</p>
        <p style="margin-top:8px; white-space:pre-line;">${message}</p>
      </div>

      <p style="margin-top:24px; font-size:12px; color:#777;">
        Sent from your portfolio contact form
      </p>
    </div>
  </div>
`;


const userAutoReplyHTML = ({ name }: { name: string }) => `
  <div style="font-family: Arial, sans-serif; background:#0f0f0f; padding:24px;">
    <div style="max-width:600px; margin:auto; background:#111; border-radius:12px; padding:24px; color:#e5e5e5;">
      <h2 style="color:#4ade80;">Thanks for reaching out 👋</h2>

      <p>Hi <strong>${name}</strong>,</p>

      <p>
        I've received your message and will get back to you as soon as possible.
      </p>

      <p>
        Meanwhile, feel free to explore my portfolio or connect with me on LinkedIn / GitHub.
      </p>

      <p style="margin-top:24px;">
        — <strong>Vikas Bhat D</strong>
      </p>

      <p style="margin-top:32px; font-size:12px; color:#777;">
        This is an automated confirmation email.
      </p>
    </div>
  </div>
`;
