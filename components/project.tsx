"use client";

import { projects } from "@/lib/data";
import ProjectCard from "./ui/project-card";
import { easeInOut, motion } from "motion/react";
import { FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const SHOW_ALL_THRESHOLD = 6;


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
    <section id="projects" className="mt-10 px-2 md:px-1 scroll-mt-[10vh] md:scroll-mt-[25vh] lg:scroll-mt-[30vh]">
      <div className="flex text-secondary items-center gap-2 text-md text-shadow-lg md:text-lg">
        <FaLaptopCode />
        Projects
      </div>

      <div className="mt-4 border-b border-dashed pb-5">
        <motion.div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
          variants={projectContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.slice(0, SHOW_ALL_THRESHOLD).map((project, idx) => (
            <motion.div key={idx} variants={projectItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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

        {projects.length > SHOW_ALL_THRESHOLD && (
          <div className="flex justify-end mt-6">
            <Link
              href="/all/projects"
              className="inline-flex items-center gap-1.5 text-xs text-secondary/60 hover:text-primary transition-colors duration-200"
            >
              View all {projects.length} projects <MdArrowOutward />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
