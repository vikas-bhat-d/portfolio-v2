// import ContactForm from "./ui/contact-form";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="mt-12 w-full flex flex-col items-center gap-4 scroll-mt-[25vh]"
//     >
//       <h2 className="text-xl md:text-2xl font-semibold text-primary">
//         Contact
//       </h2>

//       <p className="text-secondary text-sm md:text-base max-w-xl text-center leading-relaxed">
//         If you have a project in mind, an opportunity to discuss, or just want to
//         say hi,this is the easiest way to reach me.
//       </p>

//       <p className="text-secondary/80 text-sm max-w-xl text-center">
//         The form below sends the message directly to my inbox.
//       </p>

//       <div className="mt-4 mx-auto w-full sm:w-[80%] lg:w-[60%] flex items-center">
//         <ContactForm />
//       </div>
//     </section>
//   );
// };

// export default Contact;


import ContactForm from "./ui/contact-form";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-12 w-full flex flex-col items-center gap-4 scroll-mt-[25vh]"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-primary">
        Contact
      </h2>

      <p className="text-secondary text-sm md:text-base max-w-xl text-center leading-relaxed">
        If you have a project in mind, an opportunity to discuss, or just want to
        say hi, this is the easiest way to reach me.
      </p>

      <p className="text-secondary/80 text-sm max-w-xl text-center">
        The form below sends the message directly to my inbox.
      </p>

      {/* subtle alternative contact */}
      <p className="text-secondary/60 text-xs max-w-xl text-center">
        You can also reach me on{" "}
        <a
          href="https://twitter.com/your-handle"
          target="_blank"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          Twitter
        </a>{" "}
        or{" "}
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
        .
      </p>

      <div className="mt-4 mx-auto w-full sm:w-[80%] lg:w-[60%] flex items-center">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;