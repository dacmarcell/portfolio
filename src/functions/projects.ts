import env from "@/lib/env";

export const getProjectByID = async (id: string) => {
  const response = await fetch(`${env.site_url}/api/projects?id=${id}`);
  const project = await response.json();
  return project;
};
