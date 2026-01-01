import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Highlights />
        <AboutUs />
        <Projects />
        <Clients />
      </div>
      <Contact />
    </div>
  );
}
