import { getRepositories } from "@/functions/repositories";
import Card from "./Card";
import Title from "./ui/Title";
import Link from "next/link";

type Repository = {
  id: number;
  name: string;
  description: string;
};

export default async function ReposList() {
  const repos = await getRepositories();

  if (repos.message.includes("API rate limit exceeded") || !repos) {
    return (
      <div>
        <h1>Oops! Não foi possível carregar os repositórios.</h1>
        <h2>Possíveis razões:</h2>
        <ol>
          <li>Verifique sua conexão com a internet.</li>
          <li>
            O limite de solicitações por hora na api do github para obter essas
            informações foi atingido. Volte mais tarde.
          </li>
          <Link href="/repositorios">Voltar</Link>
        </ol>
      </div>
    );
  }

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
