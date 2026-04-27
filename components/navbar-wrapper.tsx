// components/navbar-wrapper.tsx
"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { usePathname } from "next/navigation";

export function NavbarWrapper() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (/^\/blog\/.+/.test(pathname)) return null;

  const navItems = [
    {
      name: "Home",
      link: isHome ? "#hero" : "/#hero",
    },
    {
      name: "Experience",
      link: isHome ? "#experience" : "/experience",
    },
    {
      name: "Project",
      link: isHome ? "#projects" : "/projects",
    },
    {
      name: "Blog",
      link: isHome ? "#blog" : "/blog",
    },
    {
      name: "Contact",
      link: isHome ? "#contact" : "/#contact",
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
