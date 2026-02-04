"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";


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


  const [open, setOpen] = useState<boolean>(false);
  const [active,setActive]=useState<number>(0)


  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -90 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.5, rotate: 90 },
  };

  return (
    <>
      {/* desktop nav */}
      <div className="fixed top-10 left-[50%] lg:min-w-[500px] -translate-x-[50%] min-w-[50%]  h-14 z-50 rounded-2xl border-[0.1px] border-white/50 backdrop-blur-2xl hidden md:flex items-center justify-center gap-6">
        {navItems?.map((navItem: any, idx: number) => {
          const isActive = active==idx;
          return (
            <div
              key={idx}
              className="group flex flex-col items-start justify-center gap-[2px] "
            >
              <Link
                href={navItem.link}
                className={cn(
                  "text-md md:text-lg hover:text-primary transition-colors",
                  isActive ? "text-primary" : "text-white hover:text-primary",
                )}
                onClick={()=>setActive(idx)}
              >
                <span>{navItem.name}</span>
              </Link>
              <div
                className={cn(
                  "h-[2px] w-0 transition-all duration-300 ease-out group-hover:w-[50%] bg-primary",
                  isActive ? "w-[50%]" : "w-0 group-hover:w-[50%] ",
                )}
              />
            </div>
          );
        })}
      </div>

      {/* mobile nav */}
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="fixed top-6 right-7 z-50 md:hidden p-2 "
        aria-label="Open menu"
      >
        <AnimatePresence mode="wait">
          {open?(
            <motion.div
              key="closeIcon"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{duration:0.2}}
            >
              <FiX size={26} />
            </motion.div>
          ):(
            <motion.div
              key="hamburgerIcon"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{duration:0.2}}
            >
              <PiHamburgerBold size={26} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-0 h-full",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />

        <div
          className={cn(
            "absolute h-[80%] top-[45%] left-1/2 -translate-y-[50%] -translate-x-[50%]  rounded-2xl p-6 transition-all duration-300",
            open ? "scale-100" : "scale-70",
          )}
        >
          <div className="flex h-full flex-col items-center justify-center gap-6 mt-6">
            <div className="flex flex-col items-start gap-6">

              {navItems.map((navItem, idx) => {
                const isActive = active==idx;

                return (
                  <div
                    key={idx}
                    className="group flex flex-col items-start justify-center gap-[2px] "
                    onClick={()=>setOpen(false)}
                  >
                    <Link
                      href={navItem.link}
                      className={cn(
                        "text-md hover:text-primary transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-white hover:text-primary",
                      )}

                      onClick={()=>setActive(idx)}
                    >
                      <span>{navItem.name}</span>
                    </Link>
                    <div
                      className={cn(
                        "h-[2px] w-0 transition-all duration-300 ease-out group-hover:w-[50%] bg-primary",
                        isActive ? "w-[50%]" : "w-0 group-hover:w-[50%] ",
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
