import Image from "next/image";
import React from "react";
import me from "../public/me.webp";
import { TerminalTypewriter } from "./ui/terminal-typewriter";
import { FaGreaterThan } from "react-icons/fa6";
import { LiveAge } from "./ui/live-age";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center pt-35 z-0"
    >
      <div className="flex flex-col items-center justify-between">
        <div className="relative">
          <Image
            src={me}
            alt="vikas-bhat-d"
            height={800}
            width={800}
            className="w-[350px] lg:w-[500px] "
          />
          <div className="bg-linear-to-t from-black to-transparent  h-[30%] w-full absolute rounded-2xl bottom-0  ">
            <TerminalTypewriter
              lines={[
                "$ [OK] STARTUP SEQUENCE COMPLETE",
                "$ [INFO] LOADING MODULES",
                "$ [DONE] SYSTEM READY",
              ]}
              className="text-primary absolute bottom-4 mx-4"
              typingSpeed={100}
              deletingSpeed={50}
              pauseDelay={600}
            />
          </div>
        </div>
        <div>
          <h1 className="font-outfit shadow-2xl text-secondary font-bold md:text-6xl text-4xl my-4 mt-3">
            VIKAS BHAT D
          </h1>
        </div>
        <div className=" max-w-4xl text-secondary text-md md:text-lg leading-relaxed text-justify md:px-2 py-4 pb-6 border-b border-dashed ">
          I am a{" "}
          <LiveAge
            birthDate="2005-02-18T00:00:00"
            className="text-primary tabular-nums"
          />{" "}
          year-old{" "}
          <span className="text-primary font-medium">full stack developer</span>{" "}
          focused on building scalable modern applications. Currently running on
          curiosity, caffeine, and clean architecture. Still compiling life, no
          runtime errors so far!
        </div>
      </div>
    </section>
  );
};

export default Hero;
