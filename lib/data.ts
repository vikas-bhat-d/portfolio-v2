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
    thumbnail: placeholder,
    description:
      "A voice controlled indoor robot assistant system for hospital task automation and navigation.",
    techStack: [
      { name: "React", icon: ReactIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "MQTT", icon: MQTTIcon },
      { name: "Raspberry Pi", icon: RaspberryPiIcon },
      { name: "Generative AI", icon: GeminiIcon },
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
