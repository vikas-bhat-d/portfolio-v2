"use client";

import { Achievement } from "@/types/achievement";
import AchievementItem from "@/components/ui/achievement-item";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0, 0, 1] as const } },
};

export default function AllAchievementsList({ achievements }: { achievements: Achievement[] }) {
  return (
    <div className="relative border-b border-dashed pb-10">
      <div className="absolute left-[5px] top-0 h-[calc(100%-40px)] w-[1px] bg-secondary/40" />

      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {achievements.map((achievement, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <AchievementItem achievement={achievement} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
