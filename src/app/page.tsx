import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Hero />
      <Services />
      <SectionTitle label="SOBRE NÓS" title="Conheça mais sobre nossa empresa" />
    </div>
  );
}
