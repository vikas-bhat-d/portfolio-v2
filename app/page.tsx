import Hero from "@/components/hero";
import ExperienceCard from "@/components/ui/experience-card";
import { MagicButton } from "@/components/ui/magic-button";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import digitsoLogo from "@/public/digitso_logo.jpeg"

export default function Home() {
  return (
    <div className=" h-full max-w-[100ch] px-5 md:px-12 w-full sm:border-x border-dashed border-gray-400">
        <Hero/>
        <ExperienceCard logo={digitsoLogo} jobTitle="IIOT Systems Trainee" companyName="Digitso FutureWise LLP" jobType="Remote" location="Tamilnadu" period="June 2025 - Feb 2026" />
    </div>
  );
}
