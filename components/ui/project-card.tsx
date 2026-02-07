import { Project } from '@/types/project'
import Image from 'next/image'
import React from 'react'
import { FiGithub } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import Link from 'next/link';



const ProjectCard = ( {title,thumbnail,description,sourceURL,liveURL}:Project) => {
  return (
    <div className='mt-2 p-2 border-[0.5px] bg-secondary/5 hover:bg-secondary/15 transition-all duration-300 border-secondary/60 rounded-2xl w-full h-full border-dashed backdrop-blur-3xl relative z-10 flex flex-col gap-2'>
        <div>
          <Image alt='project-thumbnail' src={thumbnail} width={600} height={6000} className='h-full w-full rounded-xl'></Image>
        </div>
        <div className='text-[17px] text-primary font-semibold flex items-center justify-between mx-2' >
          <span>{title} </span>
           <div className='flex gap-2 text-sm text-secondary'> {sourceURL&&<Link href={sourceURL} target='blank'> <FiGithub /></Link>} {liveURL&&<Link href={liveURL}> < BsGlobe/></Link>}</div>
        </div>
        <div className='text-xs text-secondary mx-2 text-justify' >
          {description}
        </div>
    </div>
  )
}

export default ProjectCard