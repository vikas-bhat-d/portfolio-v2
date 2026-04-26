"use client";

import { achievements } from "@/lib/data";
import AchievementItem from "./ui/achievement-item";
import { AiOutlineTrophy } from "react-icons/ai";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const SHOW_ALL_THRESHOLD = 4;

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
          {achievements.slice(0, SHOW_ALL_THRESHOLD).map((achievement, idx) => (
            <AchievementItem key={idx} achievement={achievement} />
          ))}
        </div>

        {achievements.length > SHOW_ALL_THRESHOLD && (
          <div className="flex justify-end mt-4">
            <Link
              href="/all/achievements"
              className="inline-flex items-center gap-1.5 text-xs text-secondary/60 hover:text-primary transition-colors duration-200"
            >
              View all {achievements.length} achievements <MdArrowOutward />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
