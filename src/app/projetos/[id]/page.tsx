import json from "../../../../public/mocks/projects.json";
import Title from "@/components/ui/Title";
import CustomLink from "@/components/ui/CustomLink";
import Chip from "@/components/ui/Chip";

async function getProjectByID(id: number) {
  return isNaN(id) ? null : json.projects.find((project) => project.id === id);
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectByID(parseInt(id));

  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-dark">
        <CustomLink href="/projetos">Voltar</CustomLink>
        <h1 className="text-3xl font-bold text-red-500">
          Projeto não encontrado
        </h1>
      </main>
    );
  }

  return (
    <main className="p-5 flex flex-col items-center">
      <CustomLink href="/projetos">
        <button className="px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">
          Voltar
        </button>
      </CustomLink>
      <div className="bg-dark text-foreground rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <Title>{project.title}</Title>
        <p className="text-lg text-center text-gray-400 mb-6">
          {project.description}
        </p>
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {project.technologies.map((technology) => (
            <Chip key={technology} element={technology} />
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <a
            href={project.url || "#"}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </main>
  );
}
