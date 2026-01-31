import NoiseBG from "@/components/noise-background";
import { MagicButton } from "@/components/ui/magic-button";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

export default function Home() {
  return (
    <div id="hero" className=" mesh-background h-full">
      <NoiseBG/>
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center z-0">
        <div className="flex items-center justify-between">

        <h1 className="font-outfit shadow-2xl text-secondary font-bold md:text-6xl text-4xl">vikas_bhat_d</h1>
        </div>
      </section>
    </div>
  );
}
