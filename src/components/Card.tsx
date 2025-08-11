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
  href?: string; // for external link when isProject
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
    href,
  } = props;

  const router = useRouter();
  const { setID } = useRepositoryContext();
  const { setIsIntroFinished } = useIntroContext();

  useEffect(() => {
    setIsIntroFinished(true);
  }, [setIsIntroFinished]);

  const handleClick = () => {
    if (isProject) {
      if (href) {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }
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
      className="group max-w-sm p-5 bg-gray-800/50 border border-gray-700 rounded-lg shadow-md hover:bg-gray-800 transition hover:cursor-pointer"
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <h5 className="mb-2 text-xl font-semibold text-white">
        <FadeIn>{title}</FadeIn>
      </h5>
      <div className="text-sm text-gray-300">
        <FadeIn>{displayedDescription}</FadeIn>
      </div>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((technology) => (
            <Chip key={technology} element={technology} />
          ))}
        </div>
      )}
    </div>
  );
}
