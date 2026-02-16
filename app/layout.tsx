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


export const metadata: Metadata = {
  title: "Vikas Bhat | Portfolio",
  description:
    "Full stack developer focused on building scalable modern applications and solid logic building skill. Currently running on curiosity, caffeine, and clean architecture.I love TypeScript, NodeJs, Python ,Java and many more interesting techs.",
  verification: {
    google: "XOh0Cfx7Vb3Grh7npWe0-rFfQedUMaEyuTSC_zZo614" ,
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
          <NavbarWrapper/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
