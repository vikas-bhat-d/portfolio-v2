import { Experience } from "@/types/experience";
import digitsoLogo from "@/public/digitso_logo.jpeg"
import winmanLogo from "@/public/winmanLogo.jpeg"
import aitchNuLogo from "@/public/aitchNuLogo.jpeg"
import { Project } from "@/types/project";

import placeholder from "@/public/placeholder.webp"

export const experiences:Experience[]=[
    {
        companyName:"Winman Software LLP",
        logo:winmanLogo,
        jobTitle:"Software Engineer Intern",
        jobType:"Onsite",
        period:"Feb-26 - Present",
        isPresent:true

    },
    {
        companyName:"Digitso FutureWise LLP",
        logo:digitsoLogo,
        jobTitle:"IIOT Systems Trainee",
        jobType:"Remote",
        period:"Jul 25 - Jan 26"

    },
    {
        companyName:"AitchNu Global Technologies",
        logo:aitchNuLogo,
        jobTitle:"Web Development Intern",
        jobType:"Remote",
        period:"Dec 24 - Jan 25"

    }
]

export const projects:Project[]=[
    {
    title: "TaskFlow",
    thumbnail: placeholder,
    description:
      "A modern project management dashboard with role-based access, real-time task tracking, and performance analytics. Designed for teams to collaborate efficiently.",
    sourceURL: "https://github.com/username/taskflow",
    liveURL: "https://taskflow-demo.vercel.app",
  },
  {
    title: "ChainProof",
    thumbnail: placeholder,
    description:
      "A blockchain-inspired system for tamper-proof digital evidence tracking, maintaining immutable logs of every transfer and access event.",
    sourceURL: "https://github.com/username/chainproof",
  },
  {
    title: "MediAssist",
    thumbnail: placeholder,
    description:
      "A web-based hospital assistant platform that streamlines patient interaction, appointment management, and internal staff coordination.",
    liveURL: "https://mediassist-demo.vercel.app",
  },
  {
    title: "Portfolio v3",
    thumbnail: placeholder,
    description:
      "An interactive personal portfolio built with modern web technologies, featuring smooth animations, responsive layouts, and a clean developer-focused design.",
    sourceURL: "https://github.com/username/portfolio-v3",
    liveURL: "https://your-portfolio.vercel.app",
  },]
