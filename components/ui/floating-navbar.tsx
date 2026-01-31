"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";



export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {

  const pathname= usePathname();

  

  useEffect(()=>{
    const section = pathname.replace("/portfolio/", "") || "hero";
    const el = document.getElementById(section);

    el?.scrollIntoView({ behavior: "smooth" });
    console.log("scrolled to : ",section)
  },[pathname])

  return (
    <div className="fixed top-10 left-[50%] lg:min-w-[500px] -translate-x-[50%] min-w-[50%]  h-14 z-50 rounded-2xl border border-white/50 backdrop-blur-2xl flex items-center justify-center gap-6">
      {navItems?.map((navItem:any,idx:number)=>{

        const isActive= pathname===navItem.link ;
        return(
          <div key={idx} className="group flex flex-col items-start justify-center gap-[2px] ">
            <Link href={navItem.link} className={cn("text-md md:text-lg hover:text-primary transition-colors", isActive? "text-primary":"text-white hover:text-primary")}>
              <span>{navItem.name}</span>
            </Link>
            <div className={cn("h-[2px] w-0 transition-all duration-300 ease-out group-hover:w-[50%] bg-primary",isActive?"w-[50%]":"w-0 group-hover:w-[50%] ")}></div>
            
          </div>
        );
      })}
    </div>
  );
};
