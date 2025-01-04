import { useMemo } from "react";
import { projects } from "../mocks/projects.json";
import Card from "./Card";
import Title from "./ui/Title";
import Link from "next/link";

interface ProjectsListProps {
  onlyFavorites?: boolean;
}

export default function ProjectsList(props: ProjectsListProps) {
  const { onlyFavorites } = props;

  const filteredProjects = useMemo(() => {
    return onlyFavorites
      ? projects.filter((project) => project.isFavorite)
      : projects;
  }, [onlyFavorites]);

  return (
    <div>
      <Title>Projetos</Title>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => {
          return (
            <Card
              isProject
              id={project.id.toString()}
              key={project.id}
              title={project.title}
              description={project.description}
            />
          );
        })}
        {onlyFavorites ? (
          <Link
            href="/projetos"
            className="
          text-lg
          text-foreground
          hover:text-accent 
          dark:hover:text-accent 
          underline
          cursor-pointer
          text-black
          dark:text-white
        "
          >
            Ver todos
          </Link>
        ) : null}
      </div>
    </div>
  );
}
