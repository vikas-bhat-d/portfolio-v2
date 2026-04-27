import { experiences } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import AllExperienceList from "./all-experience-list";

export const metadata: Metadata = {
  title: "All Experience",
  description: "Full work experience history of Vikas Bhat D.",
};

export default function AllExperiencePage() {
  return (
    <div className="h-full max-w-[100ch] px-5 md:px-12 w-full sm:border-x border-dashed border-gray-400 pb-20">
      <div className="pt-24 pb-6 flex items-center justify-between">
        <Link
          href="/#experience"
          className="inline-flex items-center gap-1.5 text-sm text-secondary/70 hover:text-primary transition-colors duration-200"
        >
          <IoArrowBack className="text-base" />
          Back
        </Link>
        <span className="text-xs text-secondary/40 tabular-nums">
          {experiences.length} roles
        </span>
      </div>

      <h1 className="font-outfit text-2xl md:text-3xl font-bold text-primary mb-6">
        All Experience
      </h1>

      <AllExperienceList experiences={experiences} />
    </div>
  );
}
