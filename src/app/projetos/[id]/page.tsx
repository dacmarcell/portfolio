import { projects } from "../../../mocks/projects.json";
import Title from "@/components/ui/Title";
import CustomLink from "@/components/ui/CustomLink";

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
      <main>
        <h1>Projeto não encontrado</h1>
        <CustomLink href="/projetos">Voltar</CustomLink>
      </main>
    );
  }

  return (
    <main className="p-5">
      <Title>{project.title}</Title>
      <p className="text-foreground dark:text-whitetext-black text-lg sm:text-xl my-4">
        {project.description}
      </p>
      <CustomLink href="/projetos">Voltar</CustomLink>
    </main>
  );
}
