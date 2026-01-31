import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IconHome } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
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
  title: "Vikas Bhat Portfolio",
  description:
    "Welcome to my developer portfolio, where you can explore my skill and passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[400vh] relative w-full `}
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
