'use client';
import Link from "next/link";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import { projects } from "../../../data/projects";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === params.id);


  if (!project) {
    return <>{params.id}</>
  }

  const imagePaths = Array.from({ length: 16 }, (_, i) => `/projects/project-1/img-${i + 1}.jpeg`);

  return (
    <main className="p-8">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/#projects" aria-label="Voltar para projetos">
          <IoChevronBack size={32} className="text-secondary" />
        </Link>
        <h1 className="font-extrabold text-4xl text-[#1D3152] m-0 leading-tight">
          {project.title}
        </h1>
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
