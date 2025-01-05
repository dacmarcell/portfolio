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
        <CustomLink href="/projetos">Voltar</CustomLink>
        <h1>Projeto não encontrado</h1>
      </main>
    );
  }

  return (
    <main className="p-5">
      <CustomLink href="/projetos">Voltar</CustomLink>
      <Title>{project.title}</Title>
      <p className="text-foreground dark:text-whitetext-black text-lg sm:text-xl my-4">
        {project.description}
      </p>
    </main>
  );
}
