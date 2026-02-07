"use client";

import { projects } from "@/lib/data";
import ProjectCard from "./ui/project-card";
import { easeInOut, motion } from "motion/react";
import { FaLaptopCode } from "react-icons/fa";


const projectContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const projectItemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [easeInOut],
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="mt-10 px-2 md:px-1 pb-4">
      <div className="flex text-secondary items-center gap-2 text-md text-shadow-lg md:text-lg">
        <FaLaptopCode />
        Projects
      </div>

      <motion.div
        className="
          mt-4
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          border-b
          border-dashed
          pb-10
        "
        variants={projectContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={projectItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ProjectCard
              title={project.title}
              thumbnail={project.thumbnail}
              description={project.description}
              sourceURL={project.sourceURL}
              liveURL={project.liveURL}
              techStack={project.techStack}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
