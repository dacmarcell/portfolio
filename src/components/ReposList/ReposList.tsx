import { getRepositories } from "@/functions/repositories";
import Card from "../Card";
import Title from "../ui/Title";
import CustomLink from "../ui/CustomLink";

type Repository = {
  id: number;
  name: string;
  description: string;
};

const doesRateLimitExceeded = (message?: string) =>
  message?.includes("API rate limit exceeded") ?? false;

export default async function ReposList() {
  const repos = await getRepositories();

  if (doesRateLimitExceeded(repos.message)) {
    return (
      <>
        <CustomLink href="/repositorios">Voltar</CustomLink>
        <h1 className="text-2xl font-bold">
          Oops! Não foi possível carregar os repositórios.
        </h1>
        <h2 className="text-xl font-semibold">Motivo:</h2>
        <p>
          O limite de solicitações por hora na api do github para obter essas
          informações foi atingido. Volte mais tarde.
        </p>
      </>
    );
  }

  const reposList = repos.map((repo: Repository) => {
    return (
      <Card
        isRepository
        technologies={[]}
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
