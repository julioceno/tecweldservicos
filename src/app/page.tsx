import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <Hero />
        <Services />
        <AboutUs />
      </div>
 
      <Contact />
    </div>
  );
}
