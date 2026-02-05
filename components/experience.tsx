"use client"
import { experiences } from "@/lib/data";
import ExperienceCard from "./ui/experience-card";
import { AiOutlineExperiment } from "react-icons/ai";
import { easeIn, easeOut, motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale:0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale:1,
    transition: {
      duration: 0.6,
      ease:[easeOut,easeIn]  
    },
  },
  exit: {
    opacity: 0,
    y: 24,
  }
};


const Experience = () => {
  return (
    <section id="experience" className="mt-6 px-2 md:px-1">

      <div className="flex text-secondary items-center gap-2 text-md text-shadow-lg md:text-lg">
        <AiOutlineExperiment />
        Experience
      </div>

      <motion.div
        className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {experiences.map((item, idx) => (
          <motion.div key={idx} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <ExperienceCard
              logo={item.logo}
              jobTitle={item.jobTitle}
              companyName={item.companyName}
              jobType={item.jobType}
              location={item.location}
              period={item.period}
              isPresent={item.isPresent}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
