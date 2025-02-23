"use client";

import { useRouter } from "next/navigation";
import ArrowIcon from "./ui/ArrowIcon";
import { useRepositoryContext } from "@/contexts/RepositoryContext";
import Chip from "./ui/Chip";
import FadeIn from "./motion/FadeIn";

interface CardProps {
  title: string;
  description: string;
  id: string;
  technologies?: string[];
  isProject?: boolean;
  isRepository?: boolean;
}

export default function Card(props: CardProps) {
  const { description, title, id, isProject, isRepository, technologies } =
    props;

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
    <div className="group max-w-sm p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-xl transition transform hover:-translate-y-2 hover:shadow-2xl">
      {/* Overlay com brilho */}
      <div className="inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-30 rounded-xl transition group-hover:opacity-40"></div>

      <h5 className="mb-3 text-2xl font-bold tracking-tight text-white">
        <FadeIn>{title}</FadeIn>
      </h5>

      <FadeIn>
        <p className="mb-4 font-normal text-gray-300">{description}</p>
      </FadeIn>

      {/* Tecnologias usadas */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((technology) => (
            <FadeIn key={technology}>
              <Chip element={technology} />
            </FadeIn>
          ))}
        </div>
      )}

      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition flex items-center gap-2 mt-10"
      >
        Saiba mais
        <ArrowIcon />
      </button>
    </div>
  );
}
