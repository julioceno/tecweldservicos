import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Highlights />
        <AboutUs />
      </div>

      <Clients />
      <Contact />
    </div>
  );
}
