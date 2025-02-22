import CustomLink from "@/components/ui/CustomLink";
import { BsArrowLeft } from "react-icons/bs";
import ProjectPage from "@/components/ProjectPage";
import { Project } from "@/interfaces/projects";

interface ProjetoIDPageProps {
  project?: Project;
}

export default function ProjetoIDPage({ project }: ProjetoIDPageProps) {
  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-dark">
        <CustomLink href="/projetos">
          <BsArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </CustomLink>
        <h1>Carregando...</h1>
      </main>
    );
  }

  return <ProjectPage project={project} />;
}
