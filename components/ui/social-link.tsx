"use client";
import { SocialLink } from "@/types/hero";
import { motion } from "motion/react";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";

type SocialLinksProps = {
  links: SocialLink[];
};

const ICON_MAP = {
  mail: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: BsTwitterX,
  resume: IoDocumentTextOutline,
  portfolio: HiOutlineGlobeAlt,
};

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex items-center gap-6 mt-3">
      {links.map((link) => {
        const Icon = ICON_MAP[link.iconKey];

        return (
          <div
            key={link.label}
            className="relative group"
          >
            <motion.a
              href={link.href}
              target="_blank"
              aria-label={link.label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex
                text-secondary hover:text-primary transition-colors
                text-lg lg:text-xl
              "
            >
              <Icon />
            </motion.a>

            <span
              className="
                pointer-events-none
                absolute -top-8 left-1/2 -translate-x-1/2
                whitespace-nowrap
                rounded-md
                bg-black/80
                px-2 py-[2px]
                text-[13px]
                text-white
                opacity-0
                group-hover:opacity-100
                transition-opacity
              "
            >
              {link.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SocialLinks;

