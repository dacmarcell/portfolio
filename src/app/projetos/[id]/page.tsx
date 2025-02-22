import ProjetoIDPage from "@/pages/projetos/projetoID/ProjetoIDPage";
import { getProjectByID } from "@/functions/projects";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectByID(id);

  return <ProjetoIDPage project={project} />;
}
