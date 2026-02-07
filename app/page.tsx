
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/project";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className=" h-full max-w-[100ch] px-5 md:px-12 w-full sm:border-x border-dashed border-gray-400">
        <Hero/>
        <Experience/>
        <Projects/>
        <Footer/>
    </div>
  );
}
