"use client";

import CommitsGraph from "@/components/CommitsGraph";
import CustomLink from "@/components/ui/CustomLink";
import { useRepositoryContext } from "@/contexts/RepositoryContext";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export type Commit = {
  sha: string;
  commit: {
    author: {
      date: Date;
    };
  };
};

const formatDateTime = (date: Date) => dayjs(date).format("DD/MM/YYYY - HH:mm");

export default function Page() {
  const [commits, setCommits] = useState<Array<Commit>>([]);
  const { foundRepository } = useRepositoryContext();

  useEffect(() => {
    const getFoundRepositoryCommits = async (commitsEndpoint: string) => {
      const res = await fetch(commitsEndpoint);
      return await res.json();
    };

    if (foundRepository?.commits_url) {
      const endpoint = foundRepository.commits_url.replace("{/sha}", "");
      getFoundRepositoryCommits(endpoint).then(setCommits);
    }
  }, [foundRepository]);

  if (!foundRepository) {
    return (
      <>
        <h1>Nenhum repositório encontrado.</h1>
        <CustomLink href="/repositorios">Voltar</CustomLink>
      </>
    );
  }

  return (
    <main className="p-5">
      <CustomLink href="/repositorios">Voltar</CustomLink>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">{foundRepository.name}</h1>
          <h1>{foundRepository.description}</h1>
          <h1>{foundRepository.topics.toString()}</h1>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <h1 className="text-black/[0.4]">{foundRepository.id}</h1>
          <h1>
            Última atualização: {formatDateTime(foundRepository.updated_at)}
          </h1>
          <h1>Data de criação: {formatDateTime(foundRepository.created_at)}</h1>
        </div>
      </div>
      <div className="my-5 p-20 bg-white rounded-xl shadow-lg dark:bg-gray-800">
        <CommitsGraph commits={commits} />
      </div>
    </main>
  );
}
