// components/navbar-wrapper.tsx
"use client";

import { IconHome } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

export function NavbarWrapper() {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Project",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
