"use client";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { VscRemoteExplorer } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { Experience } from "@/types/experience";
import { useMotionValue, useMotionTemplate, motion } from "motion/react";

const ExperienceCard = ({
  logo,
  companyName,
  jobTitle,
  jobType,
  location,
  period,
  isPresent = false,
  glowColor = "rgba(255, 60, 60, 0.3)",
}: Experience) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      300px at ${mouseX}px ${mouseY}px,
      ${glowColor},
      transparent 60%
    )
  `;

  return (
    <div
      onMouseMove={handleMouseMove}
      className=" mt-2 px-6 py-4 border-[0.5px] bg-secondary/5 hover:bg-secondary/15 transition-all duration-300 border-secondary/60 rounded-xl w-full border-dashed backdrop-blur-3xl relative z-10 flex flex-col gap-6 group"
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
        style={{ background }}
      />

      <div className="absolute min-h-[70%] bg-primary w-[3px] z-50 top-1/2 -translate-y-1/2 left-0" />

      <div className="flex gap-3 items-start">
        <Image
          src={logo}
          alt="companyLogo"
          className="h-[50px] w-[50px]  aspect-square rounded-xl transition-all duration-300 group-hover:scale-[1.05]"
        />
        <div className="flex flex-col items-start">
          <div className="text-primary text-md text-shadow-lg font-semibold">
            {jobTitle}
          </div>
          <div className="text-secondary text-sm">{companyName}</div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex text-secondary gap-2 items-center text-xs">
          {jobType === "Onsite" && (
            <IoLocationOutline size={16} className="text-secondary" />
          )}
          {jobType === "Remote" && (
            <VscRemoteExplorer size={16} className="text-secondary" />
          )}
          {jobType === "Hybrid" && (
            <SlCalender size={16} className="text-secondary" />
          )}

          <span className="text-sm ml-1">
            {jobType} {location ? "-" + location : ""}
          </span>
        </div>
        <div className="text-xs text-secondary">
          {!isPresent && period}
          {isPresent && (
            <div className="border px-2 py-1 border-green-500 rounded-4xl border-dashed shadow-2xl">
              Present
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
