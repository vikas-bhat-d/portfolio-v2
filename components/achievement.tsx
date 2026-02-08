"use client";

import { achievements } from "@/lib/data";
import AchievementItem from "./ui/achievement-item";
import { AiOutlineTrophy } from "react-icons/ai";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="mt-8 px-2 md:px-1 scroll-mt-[20vh]"
    >
      <div className="flex items-center gap-2 text-secondary text-md md:text-lg mb-4">
        <AiOutlineTrophy />
        Achievements
      </div>

      <div className="relative border-b border-dashed pb-10">
        <div className="absolute left-[5px] top-0 h-[calc(100%-40px)] w-[1px] bg-secondary/40" />

        <div className="flex flex-col gap-6">
          {achievements.map((achievement, idx) => (
            <AchievementItem key={idx} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
