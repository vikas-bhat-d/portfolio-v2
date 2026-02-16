import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarWrapper } from "@/components/navbar-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Vikas Bhat | Portfolio",
//   description:
//     "Full stack developer focused on building scalable modern applications and solid logic building skill. Currently running on curiosity, caffeine, and clean architecture.I love TypeScript, NodeJs, Python ,Java and many more interesting techs.",
//   verification: {
//     google: "XOh0Cfx7Vb3Grh7npWe0-rFfQedUMaEyuTSC_zZo614" ,
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://vikasbhat.vercel.app/"),

  title: {
    default: "Vikas Bhat D — Full Stack Developer",
    template: "%s | Vikas Bhat D",
  },

  description:
    "Vikas Bhat is a Full Stack Developer specializing in React, TypeScript, Node.js, and scalable web applications. Explore projects, professional experience, and technical expertise.",

  keywords: [
    "Vikas Bhat D",
    "Full Stack Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer Portfolio",
    "JavaScript Developer",
  ],

  authors: [{ name: "Vikas Bhat D" }],
  creator: "Vikas Bhat D",

  openGraph: {
    title: "Vikas Bhat D — Full Stack Developer",
    description:
      "Portfolio of Vikas Bhat D showcasing full stack projects, experience, and expertise in React, TypeScript, and Node.js.",
    url: "https://vikasbhat.vercel.app/",
    siteName: "Vikas Portfolio",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vikas Bhat D — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, TypeScript, Node.js, and scalable web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "XOh0Cfx7Vb3Grh7npWe0-rFfQedUMaEyuTSC_zZo614",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full font-jetbrains-mono mesh-background flex flex-col items-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarWrapper />
          {children}
        </ThemeProvider>

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vikas Bhat D",
              url: "https://vikasbhat.vercel.app/",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/vikas-bhat-d",
                "https://linkedin.com/in/vikas-bhat-d",
                "https://x.com/vikas_bhat_d",
              ],
              knowsAbout: [
                "React",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Docker",
                "AWS",
                "Full Stack Development",
                "BlockChain",
                "SQL",
                "RDMBS",
                "Java",
                "Python",
                "IoT"
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
