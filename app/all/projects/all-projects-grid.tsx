"use client";

import { Project } from "@/types/project";
import ProjectCard from "@/components/ui/project-card";
import { easeInOut, motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [easeInOut] } },
};

export default function AllProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-dashed pb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          <ProjectCard
            title={project.title}
            thumbnail={project.thumbnail}
            description={project.description}
            sourceURL={project.sourceURL}
            liveURL={project.liveURL}
            techStack={project.techStack}
            slug={project.slug}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
