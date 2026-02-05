import { experiences } from "@/lib/data";
import ExperienceCard from "./ui/experience-card";

const Experience = () => {
  return (
    <section
      id="experience"
      className="mt-16 px-2 md:px-1"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experiences.map((item, idx) => (
          <ExperienceCard
            key={idx}
            logo={item.logo}
            jobTitle={item.jobTitle}
            companyName={item.companyName}
            jobType={item.jobType}
            location={item.location}
            period={item.period}
            isPresent={item.isPresent}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
