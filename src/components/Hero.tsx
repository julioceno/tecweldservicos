import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="w-full py-16 px-6 lg:px-20">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold font-urbanist text-[var(--secondary)] leading-tight mb-6">
            Segurança, qualidade e Agilidade
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Planejamento, execução e gestão de serviços técnicos para o setor
            fabril.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Entre Em Contato</Button>
            <Button variant="outline">Nossos Serviços</Button>
          </div>
        </div>

        <div className="flex-1 relative flex justify-end">
          <div className="flex gap-4">
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/main.svg"
                alt="Trabalhadores em serviço"
                fill
                className="object-cover"
              />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
