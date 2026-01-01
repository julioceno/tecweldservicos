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
              alt="Detalhe de um equipamento de tubulação industrial mantido pela Tecweld"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative md:aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="/about/about-2.svg"
                alt="Profissionais da Tecweld realizando um serviço de soldagem industrial"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col font-urbanist">
              <h3 className="text-lg font-semibold text-secondary mb-3">
                Especialistas em Montagem, Soldagem e Manutenção Industrial
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A <strong>Tecweld</strong> é uma empresa líder em serviços industriais, especializada em 
                {" "}<strong>montagem mecânica</strong>, <strong>soldagem</strong>, <strong>caldeiraria</strong>, 
                e <strong>manutenção de tubulações e equipamentos</strong>. 
                Atendemos diversos setores, como alimentos, bebidas, papel e celulose, e usinas sucroalcooleiras. 
                Com uma equipe de profissionais altamente qualificados, oferecemos <strong>soluções completas</strong> e 
                personalizadas, garantindo a eficiência e segurança das operações de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
