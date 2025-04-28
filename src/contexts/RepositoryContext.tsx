"use client";

import { getRepositories } from "@/functions/repositories";
import { Repository } from "@/interfaces/repositories";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";

interface RepositoryContextProps {
  isPending: boolean;
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
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getRepositoryByID = (repos: Array<Repository>) => {
      const foundRepo = repos.find((repo) => repo.id === ID) ?? null;
      setFoundRepository(foundRepo);
    };

    if (repositories?.length > 0) {
      getRepositoryByID(repositories);
    }
  }, [ID, repositories]);

  useEffect(() => {
    startTransition(() => {
      getRepositories().then(setRepositories);
    });
  }, []);

  return (
    <RepositoryContext.Provider
      value={{ isPending, repositories, foundRepository, setID }}
    >
      {children}
    </RepositoryContext.Provider>
  );
}

export function useRepositoryContext() {
  return useContext(RepositoryContext);
}

export default RepositoryContext;
