import Link from "next/link";
import { projects } from "../../../mocks/projects.json";
import Title from "@/components/ui/Title";

async function getProjectByID(id: number) {
  return isNaN(id) ? null : projects.find((project) => project.id === id);
}

const linkClassname =
  "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#008b48] rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";

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
        <Link href="/projetos" className={linkClassname}>
          Voltar
        </Link>
      </main>
    );
  }

  return (
    <main className="p-5">
      <Title>{project.title}</Title>
      <p className="text-foreground dark:text-whitetext-black text-lg sm:text-xl my-4">
        {project.description}
      </p>
      <Link href="/projetos" className={linkClassname}>
        Voltar
      </Link>
    </main>
  );
}
