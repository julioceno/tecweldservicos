import HighlightCard from "./HighlightCard";

const highlights = [
  {
    icon: "/home-icon.svg",
    title: "Montagem Mecânica",
    description:
      "Execução de projetos industriais e montagem de equipamentos com foco em precisão e agilidade",
  },
  {
    icon: "/book-icon.svg",
    title: "Fabricação Especializada",
    description:
      "Especialistas na fabricação de Spool Inox Encamisada e componentes de alta performance para diversos setores.",
  },
  {
    icon: "/tools-icon.svg",
    title: "Manutenção Industrial",
    description:
      "Suporte técnico especializado em manutenção de sistemas, focado na segurança operacional e na preservação da infraestrutura fabril.",
  },
];

export default function Highlights() {
  return (
    <section className="w-full py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            icon={highlight.icon}
            title={highlight.title}
            description={highlight.description}
          />
        ))}
      </div>
    </section>
  );
}
