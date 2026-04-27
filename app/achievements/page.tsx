import { achievements } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import AllAchievementsList from "./all-achievements-list";

export const metadata: Metadata = {
  title: "All Achievements",
  description: "All awards and achievements by Vikas Bhat D.",
};

export default function AllAchievementsPage() {
  return (
    <div className="h-full max-w-[100ch] px-5 md:px-12 w-full sm:border-x border-dashed border-gray-400 pb-20">
      <div className="pt-24 pb-6 flex items-center justify-between">
        <Link
          href="/#achievements"
          className="inline-flex items-center gap-1.5 text-sm text-secondary/70 hover:text-primary transition-colors duration-200"
        >
          <IoArrowBack className="text-base" />
          Back
        </Link>
        <span className="text-xs text-secondary/40 tabular-nums">
          {achievements.length} achievements
        </span>
      </div>

      <h1 className="font-outfit text-2xl md:text-3xl font-bold text-primary mb-6">
        All Achievements
      </h1>

      <AllAchievementsList achievements={achievements} />
    </div>
  );
}
