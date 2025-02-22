import { useEffect, useState, useTransition } from "react";
import { BsArrowLeft } from "react-icons/bs";

import Chip from "@/components/ui/Chip";
import Title from "@/components/ui/Title";
import CustomLink from "@/components/ui/CustomLink";
import CommitsGraph from "@/components/CommitsGraph";

import { useRepositoryContext } from "@/contexts/RepositoryContext";
import { Commit } from "@/interfaces/commits";
import { formatDateToDMYHM } from "@/lib/utils";

export default function RepositorioPage() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [isPending, startTransition] = useTransition();
  const { foundRepository, isPending: isRepositoryPending } =
    useRepositoryContext();

  useEffect(() => {
    if (foundRepository?.commits_url) {
      startTransition(() => {
        fetch(foundRepository.commits_url.replace("{/sha}", ""))
          .then((response) => response.json())
          .then((commitsData) => {
            setCommits(commitsData);
          });
      });
    }
  }, [foundRepository]);

  if (isPending || isRepositoryPending) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="mb-6">
          <CustomLink href="/repositorios">
            <BsArrowLeft className="w-5 h-5 mr-2" /> Voltar
          </CustomLink>
        </div>
        <h1 className="text-4xl font-bold text-red-400 animate-pulse">
          Carregando...
        </h1>
      </main>
    );
  }

  return (
    <main className="p-8 md:p-16 bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-700 pb-6">
        <Title>{foundRepository?.name}</Title>
        <CustomLink href="/repositorios">
          <BsArrowLeft className="w-5 h-5 mr-2" /> Voltar
        </CustomLink>
      </div>

      {/* Descrição do Repositório */}
      <div className="mb-6 p-6 rounded-lg bg-gray-800/50 border border-gray-700 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-200">📌 Descrição:</h2>
        <p className="mt-2 text-lg text-gray-300">
          {foundRepository?.description}
        </p>
      </div>

      {/* Tópicos */}
      <div className="flex flex-wrap gap-3 mb-8">
        {foundRepository?.topics.map((topic) => (
          <Chip key={topic} element={topic} />
        ))}
      </div>

      {/* Gráfico de Commits */}
      <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">
          📊 Histórico de Commits
        </h2>
        <CommitsGraph commits={commits} />
      </div>

      {/* Datas e Link do Repositório */}
      <div className="mt-8 p-6 rounded-lg bg-gray-800/50 border border-gray-700 shadow-lg flex flex-col items-center text-center">
        <h1 className="text-lg text-gray-300">
          ⏳ Última atualização:{" "}
          <span className="font-semibold text-white">
            {formatDateToDMYHM(foundRepository?.updated_at)}
          </span>
        </h1>
        <h1 className="text-lg text-gray-300 mt-2">
          🛠️ Criado em:{" "}
          <span className="font-semibold text-white">
            {formatDateToDMYHM(foundRepository?.created_at)}
          </span>
        </h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={foundRepository?.html_url}
          className="mt-6 text-lg bg-green-600 hover:bg-green-500 px-6 py-3 rounded-md transition duration-300 shadow-md hover:shadow-lg text-white font-semibold"
        >
          🚀 Ir para repositório
        </a>
      </div>
    </main>
  );
}
