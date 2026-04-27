"use client";

import { Experience } from "@/types/experience";
import ExperienceCard from "@/components/ui/experience-card";
import { easeIn, easeOut, motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [easeOut, easeIn] },
  },
};

export default function AllExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-b border-dashed pb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {experiences.map((item, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          <ExperienceCard
            logo={item.logo}
            jobTitle={item.jobTitle}
            companyName={item.companyName}
            jobType={item.jobType}
            location={item.location}
            period={item.period}
            isPresent={item.isPresent}
            glowColor={item.glowColor}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
