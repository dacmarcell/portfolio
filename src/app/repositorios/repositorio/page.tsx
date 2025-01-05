"use client";

import CustomLink from "@/components/ui/CustomLink";
import { useRepositoryContext } from "@/contexts/RepositoryContext";
import { useEffect, useState } from "react";

type Commit = {
  sha: string;
};

export default function Page() {
  const [commits, setCommits] = useState<Array<Commit>>([]);
  const { foundRepository } = useRepositoryContext();

  useEffect(() => {
    const getFoundRepositoryCommits = async (commitsEndpoint: string) => {
      const res = await fetch(commitsEndpoint);
      return await res.json();
    };

    if (foundRepository?.commits_url) {
      getFoundRepositoryCommits(foundRepository.commits_url).then(setCommits);
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
    <>
      <h1>{foundRepository.id}</h1>
      <h1>{foundRepository.name}</h1>
      <h1>{foundRepository.description}</h1>
      <h1>{foundRepository.language}</h1>
      <h1>{foundRepository.topics.toString()}</h1>
      <div>
        {commits.map((commit) => {
          return <h1 key={commit.sha}>{commit.sha}</h1>;
        })}
      </div>
      <h1>{foundRepository.created_at.toString()}</h1>
      <h1>{foundRepository.updated_at.toString()}</h1>
      <CustomLink href="/repositorios">Voltar</CustomLink>
    </>
  );
}
