"use client";

import Image from "next/image";
import { LovedTech } from "@/types/hero";
import { motion, useReducedMotion } from "motion/react";

type TechLoveProps = {
  tech: LovedTech[];
};

const TechLove = ({ tech }: TechLoveProps) => {
  const shouldReduceMotion = useReducedMotion();

  const items = [...tech, ...tech];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center gap-2 text-sm text-secondary mb-1 md:px-2">
        <span className="shrink-0">Tech I ❤️:</span>
      </div>

      <div
        className="
          relative overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
      >
        <motion.div
          className="flex w-max gap-3"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: ["0%", "-50%"] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
          whileHover={{ animationPlayState: "paused" }}
        >
          {items.map((item, idx) => (
            <span
              key={`${item.name}-${idx}`}
              className="
                inline-flex items-center gap-1
                border border-dashed border-secondary/50
                px-2 py-1 rounded-md
                bg-secondary/5
                whitespace-nowrap
              "
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={16}
                height={16}
                className="opacity-90"
              />
              <span className="text-secondary text-xs">
                {item.name}
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechLove;
