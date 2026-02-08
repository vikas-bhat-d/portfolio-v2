
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/project";
import Footer from "@/components/footer";
import CursorGlow from "@/components/curser-glow";
import Achievements from "@/components/achievement";
import ContactForm from "@/components/ui/contact-form";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className=" h-full max-w-[100ch] px-5 md:px-12 w-full sm:border-x border-dashed border-gray-400">
        <CursorGlow/>
        <Hero/>
        <Experience/>
        <Projects/>
        <Achievements/>
        <Contact/>
        <Footer/>
    </div>
  );
}
