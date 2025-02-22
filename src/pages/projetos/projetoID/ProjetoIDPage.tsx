import CustomLink from "@/components/ui/CustomLink";
import json from "../../../../public/mocks/projects.json";
import { BsArrowLeft } from "react-icons/bs";
import ProjectPage from "@/components/ProjectPage";

interface ProjetoIDPageProps {
  project?: (typeof json.projects)[number];
}

export default function ProjetoIDPage({ project }: ProjetoIDPageProps) {
  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-dark">
        <CustomLink href="/projetos">
          <BsArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </CustomLink>
        <h1 className="text-3xl font-bold text-red-500">
          Projeto não encontrado
        </h1>
      </main>
    );
  }

  return <ProjectPage project={project} />;
}
