"use client";

import { SocialLink } from "@/types/hero";
import { motion } from "motion/react";

type SocialLinksProps = {
  links: SocialLink[];
};

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex items-center gap-6 mt-3">
      {links.map((link) =>{ 
        const Icon=link.icon;
        return (
        
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          aria-label={link.label}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="text-secondary hover:text-primary transition-colors text-lg"
        >
          <Icon/>
        </motion.a>
      )})}
    </div>
  );
};

export default SocialLinks;
