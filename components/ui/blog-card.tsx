"use client";

import { BlogMeta } from "@/types/blog";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { useMotionValue, useMotionTemplate, motion } from "motion/react";

const GLOW_COLOR = "rgba(235, 155, 75, 0.18)";

const BlogCard = ({ slug, title, date, description, tags }: BlogMeta) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      260px at ${mouseX}px ${mouseY}px,
      ${GLOW_COLOR},
      transparent 60%
    )
  `;

  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="mt-2 p-4 pb-4 border-[0.5px] bg-secondary/5 hover:bg-secondary/15 transition-all duration-300 border-secondary/60 rounded-2xl w-full h-full border-dashed backdrop-blur-3xl relative z-10 flex flex-col justify-between gap-3 group/card"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-80 -z-10"
        style={{ background }}
      />

      {/* Date */}
      <span className="text-[11px] text-secondary/50 tabular-nums">
        {formatted}
      </span>

      {/* Title */}
      <h2 className="text-[15px] font-outfit font-semibold text-primary leading-snug">
        {title}
      </h2>

      {/* Description */}
      <p className="text-xs text-secondary/80 break-words leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[10px] border border-dashed border-secondary/25 text-secondary/60"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Read more */}
      <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-secondary/60 group-hover/card:text-primary transition-colors duration-200">
        Read more <MdArrowOutward className="text-xs" />
      </div>
    </Link>
  );
};

export default BlogCard;
