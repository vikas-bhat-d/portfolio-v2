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

    },
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
import NextIcon from "@/public/tech/nextjs.svg"
import S3Icon from "@/public/tech/s3.svg"
import har from "@/public/project/HAR.jpg"
import pandashare from "@/public/project/pandashare.png"

export const projects: Project[] = [
  {
  title: "PandaShare",
  slug: "pandashare",
  thumbnail: pandashare,
  description:
    "A secure, room-based file sharing application with client-side AES-256-GCM encryption and zero-knowledge server architecture.",
  detailedDescription:
    "PandaShare is a privacy-first file sharing platform built around a zero-knowledge architecture — the server never sees plaintext file content. Files are encrypted entirely on the client using AES-256-GCM before upload, and decrypted after download using a room key that is never transmitted to the server.\n\nUsers create temporary rooms and share files with others in the same room in real time. Each room has an expiry, after which all associated objects are purged from AWS S3. The frontend is built with Next.js and TypeScript, and the backend is a Node.js + Express API. File objects are stored on AWS S3 with pre-signed URLs to avoid routing binary data through the application server.\n\nKey design decisions include separating the encryption key from the room ID (the key lives only in the URL fragment, never sent to the server), chunked upload for large files, and a minimal UI that communicates trust through transparency.",
  techStack: [
    { name: "Next.js", icon: NextIcon },
    { name: "React", icon: ReactIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "TypeScript", icon: typescript },
    { name: "AWS S3", icon: S3Icon },
    { name: "Tailwind CSS", icon: tailwind },
  ],
  sourceURL: "https://github.com/vikas-bhat-d/pandashare",
  liveURL: "https://pandashare.space",
},
  {
    title: "QuickText",
    slug: "quicktext",
    thumbnail: placeholder,
    description:
      "A real-time chat application with authentication and live messaging using WebSockets.",
    detailedDescription:
      "QuickText is a full-stack real-time chat application that supports user authentication, persistent message history, and live bidirectional messaging via WebSockets (Socket.IO).\n\nUsers register and log in with JWT-based authentication. Each session is scoped to the authenticated user, and messages are stored in MongoDB for persistence across sessions. The React frontend maintains a live socket connection, updating the UI instantly when new messages arrive without any polling.\n\nThe architecture separates concerns cleanly: the Express REST API handles auth and history retrieval, while the Socket.IO layer handles real-time events. This keeps the real-time channel lightweight and the REST layer stateless.",
    techStack: [
      { name: "React", icon: ReactIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "Express", icon: ExpressIcon },
      { name: "MongoDB", icon: MongoIcon },
      { name: "Socket.IO", icon: SocketIcon },
    ],
    sourceURL: "https://github.com/vikas-bhat-d/quicktext",
  },
  {
    title: "PredictEd",
    slug: "predicted",
    thumbnail: placeholder,
    description:
      "An AI-powered system for predicting student performance and generating automated insights.",
    detailedDescription:
      "PredictEd is an academic analytics platform that combines machine learning with large language models to predict student outcomes and generate actionable insights for educators.\n\nThe prediction engine is a Python-based ML model trained on historical academic data — attendance, grades, assignment scores — to forecast end-semester performance with reasonable accuracy. On top of the predictions, Gemini and Grok LLMs are used to generate natural-language summaries and recommendations per student, surfacing patterns that raw numbers don't communicate.\n\nThe React frontend presents dashboards for teachers to review cohort-level and individual-level analytics. MongoDB stores student records and model outputs. The system is designed to be explainable — every prediction is accompanied by the key contributing factors.",
    techStack: [
      { name: "Python", icon: PythonIcon },
      { name: "React", icon: ReactIcon },
      { name: "MongoDB", icon: MongoIcon },
      { name: "Gemini LLM", icon: GeminiIcon },
      { name: "Grok LLM", icon: GrokIcon },
    ],
    sourceURL: "https://github.com/vikas-bhat-d/predictEd",
  },
  {
    title: "Friday",
    slug: "friday",
    thumbnail: har,
    description:
      "A voice controlled indoor robot assistant system for hospital task automation and navigation.",
    detailedDescription:
      "Friday is an indoor autonomous robot assistant designed for hospital environments, capable of responding to voice commands, navigating between rooms, and automating routine tasks such as delivering items and relaying information.\n\nThe system runs on a Raspberry Pi at its core, communicating with a cloud-based Node.js backend over MQTT — a lightweight pub/sub protocol well-suited to IoT. Voice commands are processed through a speech recognition pipeline and interpreted by a Generative AI layer (Gemini) to map intent to actions.\n\nThe React dashboard allows hospital staff to monitor the robot's status, queue tasks, and view a log of completed actions. The system is containerised with Docker to ensure consistent deployment across environments. Navigation is rule-based using a predefined hospital floor map, with obstacle detection via ultrasonic sensors.",
    techStack: [
      { name: "React", icon: ReactIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "MQTT", icon: MQTTIcon },
      { name: "Raspberry Pi", icon: RaspberryPiIcon },
      { name: "Generative AI", icon: GeminiIcon },
      {name:"Docker",icon:DockerIcon}
    ],
    sourceURL: "https://github.com/vikas-bhat-d/hospital-assistant-robot",
  },
  {
    title: "Chain of Custody Tracker",
    slug: "chain-of-custody",
    thumbnail: placeholder,
    description:
      "A digital evidence tracking system ensuring secure and tamper-proof chain-of-custody records.",
    detailedDescription:
      "Chain of Custody Tracker is a digital evidence management system built for law enforcement and legal workflows, ensuring that every transfer, access, and modification of evidence is logged in a tamper-proof, auditable record.\n\nThe system records each custody event — who handled the evidence, when, and why — in MongoDB with cryptographic integrity checks to detect any unauthorised modification. The React frontend provides a clean timeline view of the custody chain for any piece of evidence, making it easy to present in legal proceedings.\n\nThe backend is a Node.js + Express REST API with role-based access control: investigators, supervisors, and auditors each have different levels of access. The architecture prioritises auditability and data integrity over complexity.",
    techStack: [
      { name: "React", icon: ReactIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "MongoDB", icon: MongoIcon },
    ],
    sourceURL: "https://github.com/vikas-bhat-d/chain-of-custody",
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
