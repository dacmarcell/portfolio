import { getRepositories } from "@/functions/repositories";
import Card from "../Card";
import Title from "../ui/Title";
import CustomLink from "../ui/CustomLink";
import { BsArrowLeft } from "react-icons/bs";

type Repository = {
  id: number;
  name: string;
  description: string;
};

export default async function ReposList() {
  const doesRateLimitExceeded = (message?: string) =>
    message?.includes("API rate limit exceeded") ?? false;

  const repos = await getRepositories();

  if (doesRateLimitExceeded(repos.message)) {
    return (
      <>
        <CustomLink href="/repositorios">
          <BsArrowLeft className="w-5 h-5 mr-2" /> Voltar
        </CustomLink>
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

  return (
    <>
      <Title className="text-white">Repositórios no Github</Title>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo: Repository) => {
          return (
            <Card
              isRepository
              key={repo.id}
              title={repo.name}
              id={repo.id.toString()}
              description={repo.description}
            />
          );
        })}
      </div>
    </>
  );
}
