import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <SectionTitle
            label="SOBRE NÓS"
            title="Conheça mais sobre nossa empresa"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-3/4 md:aspect-auto md:h-auto md:min-h-100 lg:min-h-125 rounded-lg overflow-hidden">
            <Image
              src="/about/about-1.svg"
              alt="Equipamento industrial"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative md:aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="/about/about-2.svg"
                alt="Profissionais trabalhando"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col font-urbanist">
              <h3 className="text-lg font-semibold text-secondary mb-3">
                Especialistas em Instalações e Manutenção de Equipamentos
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A Tecweld serviços industriais é uma empresa especializada em
                projetos industriais, montagem mecânica, manutenção e instalações
                de equipamentos nos setores de alimentos, bebidas, papel celulose
                e usinas sucroalcooleiras. Com uma equipe de profissionais
                altamente qualificados, oferecemos soluções personalizadas e
                eficientes para atender às necessidades específicas de cada
                cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
