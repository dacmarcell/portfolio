"use client";

import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import ArrowIcon from "./ui/ArrowIcon";
import { useRepositoryContext } from "@/contexts/RepositoryContext";

interface CardProps {
  title: string;
  description: string;
  id: string;
  isProject?: boolean;
  isRepository?: boolean;
}

export default function Card(props: CardProps) {
  const { description, title, id, isProject, isRepository } = props;

  const router = useRouter();
  const { setID } = useRepositoryContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isProject) {
      router.push(`/projetos/${id}`);
    }

    if (isRepository) {
      router.push("/repositorios/repositorio");
      setID(parseInt(id));
    }
  };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Button handleClick={handleClick}>
        Saiba mais
        <ArrowIcon />
      </Button>
    </div>
  );
}
