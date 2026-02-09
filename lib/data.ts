import { LovedTech } from "@/types/hero";

// icons (use your actual svg imports here)
import javascript from "@/public/tech/javascript.svg";
import typescript from "@/public/tech/typescript.svg";
import react from "@/public/tech/react.svg";
import node from "@/public/tech/nodejs.svg";
import express from "@/public/tech/express.svg";
import mongodb from "@/public/tech/mongodb.svg";
import tailwind from "@/public/tech/tailwind.svg";
import docker from "@/public/tech/docker.svg";
import git from "@/public/tech/git.svg";
import github from "@/public/tech/github.svg";
import python from "@/public/tech/python.svg";
import aws from "@/public/tech/aws.svg";

export const techILove: LovedTech[] = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "Express", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Python", icon: python },
  { name: "AWS", icon: aws },
];

import { SocialLink } from "@/types/hero";


export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:vikasdbhat@gmail.com",
    iconKey: "mail"
  },
  {
    label: "GitHub",
    href: "https://github.com/vikas-bhat-d",
    iconKey: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vikas-bhat-d/",
    iconKey: "linkedin",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/vikas_bhat_d",
    iconKey: "twitter",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1rbKgNWTQHjNW31kO0HjccPr7n9B_sCno/view?usp=drive_link",
    iconKey: "resume",
  },
];


import { Experience } from "@/types/experience";
import digitsoLogo from "@/public/digitso_logo.jpeg"
import winmanLogo from "@/public/winmanLogo.jpeg"
import aitchNuLogo from "@/public/aitchNuLogo.jpeg"
import { Project } from "@/types/project";



export const experiences:Experience[]=[
    {
        companyName:"Winman Software LLP",
        logo:winmanLogo,
        jobTitle:"Software Engineer Intern",
        jobType:"Onsite",
        period:"Feb-26 - Present",
        isPresent:true,
        glowColor:'rgba(255, 90, 60, 0.4)'

    },
    {
        companyName:"Digitso FutureWise LLP",
        logo:digitsoLogo,
        jobTitle:"IIOT Systems Trainee",
        jobType:"Remote",
        period:"Jul 25 - Jan 26",
        glowColor:'rgba(255, 165, 70, 0.4)'

    },
    {
        companyName:"AitchNu Global Technologies",
        logo:aitchNuLogo,
        jobTitle:"Web Development Intern",
        jobType:"Remote",
        period:"Dec 24 - Jan 25",
        glowColor:'rgba(120, 160, 255, 0.4)'

    }
]

import placeholder from "@/public/placeholder.webp"
import ReactIcon from "@/public/tech/react.svg";
import NodeIcon from "@/public/tech/nodejs.svg";
import ExpressIcon from "@/public/tech/express.svg";
import MongoIcon from "@/public/tech/mongodb.svg";
import SocketIcon from "@/public/tech/socketio.svg";
import PythonIcon from "@/public/tech/python.svg";
import GeminiIcon from "@/public/tech/gemini.svg";
import GrokIcon from "@/public/tech/grok.svg";
import RaspberryPiIcon from "@/public/tech/raspberrypi.svg";
import MQTTIcon from "@/public/tech/mqtt.svg";
import DockerIcon from "@/public/tech/docker.svg"

import har from "@/public/project/HAR.jpg"

export const projects: Project[] = [
  {
    title: "QuickText",
    thumbnail: placeholder,
    description:
      "A real-time chat application with authentication and live messaging using WebSockets.",
    techStack: [
      { name: "React", icon: ReactIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "Express", icon: ExpressIcon },
      { name: "MongoDB", icon: MongoIcon },
      { name: "Socket.IO", icon: SocketIcon },
    ],
    sourceURL: "https://github.com/username/quicktext",
    liveURL: "https://quicktext-demo.vercel.app",
  },
  {
    title: "PredictEd",
    thumbnail: placeholder,
    description:
      "An AI-powered system for predicting student performance and generating automated insights.",
    techStack: [
      { name: "Python", icon: PythonIcon },
      { name: "React", icon: ReactIcon },
      { name: "MongoDB", icon: MongoIcon },
      { name: "Gemini LLM", icon: GeminiIcon },
      { name: "Grok LLM", icon: GrokIcon },
    ],
    sourceURL: "https://github.com/username/predicted",
    liveURL: "https://predicted-demo.vercel.app",
  },
  {
    title: "Friday",
    thumbnail: har,
    description:
      "A voice controlled indoor robot assistant system for hospital task automation and navigation.",
    techStack: [
      { name: "React", icon: ReactIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "MQTT", icon: MQTTIcon },
      { name: "Raspberry Pi", icon: RaspberryPiIcon },
      { name: "Generative AI", icon: GeminiIcon },
      {name:"Docker",icon:DockerIcon}
    ],
    sourceURL: "https://github.com/username/hospital-assistant",
  },
  {
    title: "Chain of Custody Tracker",
    thumbnail: placeholder,
    description:
      "A digital evidence tracking system ensuring secure and tamper-proof chain-of-custody records.",
    techStack: [
      { name: "React", icon: ReactIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "MongoDB", icon: MongoIcon },
    ],
    sourceURL: "https://github.com/username/chain-of-custody",
  },
];


import { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  {
    title: "1st Place — Innovate-A-Thon 2025",
    organization: "SDM Institute of Technology",
    date: "Sept 2025",
    description: [
      "Led a team of 5 to build PredictEd, an AI-based student performance predictor.",
      "Completed within a 12-hour hackathon with focus on accuracy and usability.",
    ],
    prize: "₹10,000",
  },
  {
    title: "4th Place — CIDECODE National Hackathon",
    organization: "PES University, Bengaluru",
    date: "Mar 2025",
    description: [
      "Built a blockchain-backed chain-of-custody evidence tracking system.",
      "Reached the final 24-hour round among national-level participants.",
    ],
    prize: "₹10,000",
  },
];
