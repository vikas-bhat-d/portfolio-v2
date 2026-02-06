// components/navbar-wrapper.tsx
"use client";

import { IconHome } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

export function NavbarWrapper() {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
