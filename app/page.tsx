import Hero from "@/components/hero";
import { MagicButton } from "@/components/ui/magic-button";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" h-full max-w-[100ch] w-full sm:border-x border-dashed border-gray-400">
        <Hero/>
    </div>
  );
}
