import { Experience } from "@/types/experience";
import digitsoLogo from "@/public/digitso_logo.jpeg"
import winmanLogo from "@/public/winmanLogo.jpeg"
import aitchNuLogo from "@/public/aitchNuLogo.jpeg"

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