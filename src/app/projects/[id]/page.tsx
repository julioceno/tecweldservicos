
export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Aqui você pode buscar os dados do projeto usando o id
  return (
    <main style={{ padding: 32 }}>
      <h1>Detalhes do Projeto: {params.id}</h1>
      {/* Adicione aqui as informações detalhadas do projeto */}
    </main>
  );
}

export async function generateStaticParams() {
  // Exemplo: substitua pelos seus projetos reais
  return [
    { id: 'project-1' },
    { id: 'project-2' },
  ];
}
