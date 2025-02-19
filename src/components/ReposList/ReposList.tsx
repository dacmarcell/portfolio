import { getRepositories } from "@/functions/repositories";
import Card from "../Card";
import Title from "../ui/Title";
import CustomLink from "../ui/CustomLink";
import { BsArrowLeft } from "react-icons/bs";
import { GithubAPIError } from "@/errors/GithubAPIError";

type Repository = {
  id: number;
  name: string;
  description: string;
};

export default async function ReposList() {
  try {
    const repos = await getRepositories();

    return (
      <>
        <Title className="text-white">Repositórios no Github</Title>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo: Repository) => (
            <Card
              isRepository
              key={repo.id}
              title={repo.name}
              id={repo.id.toString()}
              description={repo.description}
            />
          ))}
        </div>
      </>
    );
  } catch (error) {
    const errorMessage =
      error instanceof GithubAPIError
        ? error.message
        : "Erro ao carregar repositórios. Por favor, tente novamente mais tarde.";

    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <CustomLink href="/repositorios">
          <BsArrowLeft className="w-5 h-5 mr-2" /> Voltar
        </CustomLink>
        <div className="mt-6 p-6 bg-red-500/10 border border-red-500 rounded-lg">
          <h1 className="text-2xl font-bold text-red-500 mb-2">
            Oops! Algo deu errado
          </h1>
          <p className="text-gray-300">{errorMessage}</p>
        </div>
      </div>
    );
  }
}
