import Link from "next/link";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import { projects } from "../../../data/projects";
import Button from "@/components/Button";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projeto não encontrado",
      description: "Este projeto não foi encontrado.",
    };
  }

  return {
    title: project.title,
    description: project.paragraph,
    openGraph: {
        images: [{ url: project.image, alt: project.title }],
    }
  };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params

  const project = projects.find((p) => p.id === id);


  if (!project) {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
            <p className="text-lg text-gray-600 mb-8">O projeto que você está procurando não existe.</p>
            <Link href="/#services">
                <Button>Voltar para o início</Button>
            </Link>
      </div>
    )
  }

  const imagePaths = Array.from(
    { length: 16 },
    (_, i) => `${project.folder}/img-${i + 1}.jpeg`
  );

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Link href="/#services" aria-label="Voltar para projetos">
            <IoChevronBack size={32} className="text-secondary" />
          </Link>
          <h1 className="font-extrabold text-4xl text-[#1D3152] m-0 leading-tight">
            {project.title}
          </h1>
        </div>
        <p className="text-gray-600 font-urbanist text-base">
          {project.paragraph}
        </p>
        <Button
          variant="green"
          className="mt-2 w-fit text-sm px-4 py-2"
          iconLeft="whatsapp"
          openInNewTab
        >
          Solicite um orçamento
        </Button>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mb-8">
        {imagePaths.map((path) => (
          <div key={path} className="mb-4 break-inside-avoid">
            <Image
              src={path}
              alt={project.title}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </main>
  );
}