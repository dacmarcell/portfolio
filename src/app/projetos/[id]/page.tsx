import { projects } from "../../../../public/mocks/projects.json";
import ProjetoIDPage from "@/pages/projetos/projetoID/ProjetoIDPage";

const getProjectByID = async (id: number) =>
  (!isNaN(id) && projects.find((project) => project.id === id)) || undefined;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectByID(parseInt(id));

  return <ProjetoIDPage project={project} />;
}
