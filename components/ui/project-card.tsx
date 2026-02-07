import { Project } from '@/types/project'
import Image from 'next/image'
import React from 'react'
import { FiGithub } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import Link from 'next/link';



const ProjectCard = ( {title,thumbnail,description,sourceURL,liveURL,techStack}:Project) => {
  return (
    <div className='mt-2 p-2 pb-3 border-[0.5px] bg-secondary/5 hover:bg-secondary/15 transition-all duration-300 border-secondary/60 rounded-2xl w-full h-full border-dashed backdrop-blur-3xl relative z-10 flex flex-col justify-between gap-2 '>
        <div>
          <Image alt='project-thumbnail' src={thumbnail} width={600} height={6000} className='h-full w-full rounded-xl'></Image>
        </div>
        <div className='text-[17px] text-primary font-semibold flex items-center justify-between mx-2' >
          <span>{title} </span>
           <div className='flex gap-2 text-sm text-secondary'> {sourceURL&&<Link href={sourceURL} target='blank'> <FiGithub /></Link>}   {liveURL&&<Link href={liveURL}> < BsGlobe/></Link>}</div>
        </div>
        <div className='text-xs text-secondary mx-2 text-justify' >
          {description}
        </div>
        
      {techStack?.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mx-2 mt-1">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="relative group"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={18}
                height={18}
                className="rounded-[2px] opacity-80 group-hover:opacity-100 transition-opacity"
              />

              <span className="
                pointer-events-none
                absolute -top-7 left-1/2 -translate-x-1/2
                whitespace-nowrap
                rounded-md
                bg-black/80
                px-2 py-[2px]
                text-[10px]
                text-white
                opacity-0
                group-hover:opacity-100
                transition-opacity
              ">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCard