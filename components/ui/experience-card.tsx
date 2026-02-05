import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { VscRemoteExplorer } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { Experience } from '@/types/experience';



const ExperienceCard = ({logo,companyName,jobTitle,jobType,location, period, isPresent=false }:Experience) => {
  return (
    <div className=' mt-4 px-6 py-4 border-[0.5px] bg-secondary/10 hover:bg-secondary/15 transition-all duration-300 border-secondary/60 rounded-xl w-full border-dashed backdrop-blur-3xl relative z-10 flex flex-col gap-6'>
      <div className='absolute min-h-[70%] bg-primary w-[3px] z-50 top-1/2 -translate-y-1/2 left-0'/>


      <div className='flex gap-3 items-start'>
        <Image src={logo} alt='companyLogo' className='h-[50px] w-[50px]  aspect-square rounded-xl'/>
        <div className='flex flex-col items-start'>
          <div className='text-primary text-md font-semibold'>
            {jobTitle}
          </div>
          <div className='text-secondary text-sm'>
            {companyName}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between w-full'>
        <div className='flex text-secondary gap-2 items-center text-xs'>
            {jobType==="Onsite" && <IoLocationOutline />}
            {jobType==="Remote" && <VscRemoteExplorer size={16} className='text-secondary'/> }
            {jobType==="Onsite" && <SlCalender />}
            
            <span className='text-sm ml-1'>{jobType} {location?"-"+location:""}</span>
        </div>
        <div className='text-xs text-secondary'>
            {period}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard