import { Project } from '@/types/project'
import Image from 'next/image'
import React from 'react'

const ProjectCard = ( {title,thumbnail,description,sourceURL,liveURL}:Project) => {
  return (
    <div className='mt-2 p-2 border-[0.5px] bg-secondary/5 hover:bg-secondary/15 transition-all duration-300 border-secondary/60 rounded-xl w-full border-dashed backdrop-blur-3xl relative z-10 flex flex-col gap-6'>
        <div>
          <Image alt='project-thumbnail' src={thumbnail} width={600} height={6000} className='h-full w-full rounded-2xl'></Image>
        </div>
        <div>
          {title}
        </div>
    </div>
  )
}

export default ProjectCard