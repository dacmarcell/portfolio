import { getRepositories } from "@/functions/repositories";
import Card from "./Card";
import Title from "./ui/Title";

type Repository = {
  id: number;
  name: string;
  description: string;
};

export default async function ReposList() {
  const repos = await getRepositories();

  const reposList = repos.map((repo: Repository) => {
    return (
      <Card
        isRepository
        id={repo.id.toString()}
        key={repo.id}
        title={repo.name}
        description={repo.description}
      />
    );
  });

  return (
    <div>
      <Title>Repositórios no Github</Title>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reposList}
      </div>
    </div>
  );
}
