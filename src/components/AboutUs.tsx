import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { content } from "@/data/content";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <SectionTitle
            label={content.aboutUs.label}
            title={content.aboutUs.title}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-3/4 md:aspect-auto md:h-64 md:min-h-64 lg:h-80 lg:min-h-80 rounded-lg overflow-hidden">
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
              <h3 className="text-lg font-semibold text-secondary mb-1">
                {content.aboutUs.subtitle}
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: content.aboutUs.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
