"use client";

import CommitsGraph from "@/components/CommitsGraph";
import Chip from "@/components/ui/Chip";
import CustomLink from "@/components/ui/CustomLink";
import Title from "@/components/ui/Title";
import { useRepositoryContext } from "@/contexts/RepositoryContext";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
    router.push("/repositorios");
    return;
  }

  return (
    <main className="p-5">
      <div className="flex justify-between items-center mb-6">
        <Title>{foundRepository.name}</Title>
        <CustomLink href="/repositorios">Voltar</CustomLink>
      </div>
      <h1>{foundRepository.description}</h1>
      {foundRepository.topics.map((topic) => {
        return (
          <div key={topic} className="inline-block m-2">
            <Chip element={topic} />
          </div>
        );
      })}

      <div className="mt-5 p-5 bg-red-900 rounded-lg shadow-lg dark:bg-gray-800 dark:shadow-dark dark:text-white dark:border dark:border-gray-700 dark:divide-gray-700 divide-y divide-gray-200 flex flex-col items-center">
        <CommitsGraph commits={commits} />
        <div className="flex flex-col items-center space-y-2 mt-5">
          <h1 className="text-black/[0.4]">{foundRepository.id}</h1>
          <h1>
            Última atualização: {formatDateTime(foundRepository.updated_at)}
          </h1>
          <h1>Data de criação: {formatDateTime(foundRepository.created_at)}</h1>
          <a
            target="_blank"
            className="text-[#fffafa] bg-[#038D48] hover:bg-green-600 px-4 py-2 rounded-md transition duration-300 w-max text-lg hover:shadow-lg"
            href={foundRepository.html_url}
          >
            Ir para repositório
          </a>
        </div>
      </div>
    </main>
  );
}
