import { projects } from "../../../../public/mocks/projects.json";
import CustomLink from "@/components/ui/CustomLink";
import ProjectPage from "@/components/ProjectPage";

async function getProjectByID(id: number) {
  return isNaN(id) ? null : projects.find((project) => project.id === id);
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

  return <ProjectPage project={project} />;
}
