// components/navbar-wrapper.tsx
"use client";

import { IconHome } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

export function NavbarWrapper() {
  const navItems = [
    {
      name: "Home",
      link: "/portfolio/hero",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/portfolio/about",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
