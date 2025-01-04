import Link from "next/link";
import { projects } from "../../../mocks/projects.json";
import Title from "@/components/ui/Title";

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
      <div>
        <h1>Projeto não encontrado</h1>
        <Link href="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div>
      <Title>{project.title}</Title>
      <p
        className="
        text-foreground 
        dark:text-white
        text-black
        text-lg 
        sm:text-xl
        my-4
      "
      >
        {project.description}
      </p>
      <Link
        href="/"
        className="
        text-foreground 
        dark:text-white
        text-black
        text-lg 
        sm:text-xl
        my-4
        hover:underline
      "
      >
        Voltar
      </Link>
    </div>
  );
}
