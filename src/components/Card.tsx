"use client";

import { useRouter } from "next/navigation";
import { useRepositoryContext } from "@/contexts/RepositoryContext";
import Chip from "./ui/Chip";
import FadeIn from "./motion/FadeIn";
import { useIntroContext } from "@/contexts/IntroContext";
import { useEffect } from "react";

interface CardProps {
  title: string;
  description: string;
  id: string;
  technologies?: string[];
  isProject?: boolean;
  isRepository?: boolean;
  maxDescriptionLength?: number;
}

export default function Card(props: CardProps) {
  const {
    description,
    title,
    id,
    isProject,
    isRepository,
    technologies,
    maxDescriptionLength = 100,
  } = props;

  const router = useRouter();
  const { setID } = useRepositoryContext();
  const { setIsIntroFinished } = useIntroContext();

  useEffect(() => {
    setIsIntroFinished(true);
  }, [setIsIntroFinished]);

  const handleClick = () => {
    if (isProject) {
      router.push(`/projetos/${id}`);
    }

    if (isRepository) {
      router.push("/repositorios/repositorio");
      setID(parseInt(id));
    }
  };

  const isDescriptionLong = description.length > maxDescriptionLength;
  const displayedDescription = isDescriptionLong
    ? `${description.slice(0, maxDescriptionLength)}...`
    : description;

  return (
    <div
      className="group max-w-sm p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-xl transition transform hover:-translate-y-2 hover:shadow-2xl hover:cursor-pointer"
      onClick={handleClick}
    >
      {/* Overlay com brilho */}
      <div className="inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-30 rounded-xl transition group-hover:opacity-40"></div>
      <h5 className="mb-3 text-2xl font-bold tracking-tight text-white">
        <FadeIn>{title}</FadeIn>
      </h5>
      <FadeIn>
        <p className="mb-4 font-normal text-gray-300">{displayedDescription}</p>
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
    </div>
  );
}
