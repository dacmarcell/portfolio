"use client";

import { getRepositories } from "@/functions/repositories";
import { createContext, useContext, useEffect, useState } from "react";

export type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  commits_url: string;
  created_at: Date;
  updated_at: Date;
  language: string;
  topics: Array<string>;
};

interface RepositoryContextProps {
  repositories: Repository[];
  foundRepository: Repository | null;
  setID: React.Dispatch<React.SetStateAction<number | null>>;
}

const RepositoryContext = createContext<RepositoryContextProps>(
  {} as RepositoryContextProps
);

export function RepositoryWrapper(props: { children: React.ReactNode }) {
  const { children } = props;

  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [foundRepository, setFoundRepository] = useState<Repository | null>(
    null
  );
  const [ID, setID] = useState<number | null>(null);

  useEffect(() => {
    const getRepositoryByID = (repos: Array<Repository>) => {
      const foundRepo = repos.find((repo) => repo.id === ID) ?? null;
      setFoundRepository(foundRepo);
    };

    if (repositories.length > 0) {
      getRepositoryByID(repositories);
    }
  }, [ID, repositories]);

  useEffect(() => {
    getRepositories().then(setRepositories);
  }, []);

  return (
    <RepositoryContext.Provider
      value={{ repositories, foundRepository, setID }}
    >
      {children}
    </RepositoryContext.Provider>
  );
}

export function useRepositoryContext() {
  return useContext(RepositoryContext);
}

export default RepositoryContext;
