"use client";

import { useMemo } from "react";
import json from "../../public/mocks/projects.json";
import Card from "./Card";
import Title from "./ui/Title";
import CustomLink from "./ui/CustomLink";

interface ProjectsListProps {
  onlyFavorites?: boolean;
}

export default function ProjectsList(props: ProjectsListProps) {
  const { onlyFavorites } = props;

  const filteredProjects = useMemo(() => {
    return onlyFavorites
      ? json.projects.filter((project) => project.isFavorite)
      : json.projects;
  }, [onlyFavorites]);

  return (
    <div>
      <Title>Projetos</Title>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => {
          return (
            <Card
              isProject
              key={project.id}
              title={project.title}
              id={project.id.toString()}
              description={project.description}
              technologies={project.technologies}
            />
          );
        })}
        {onlyFavorites ? (
          <CustomLink href="/projetos">Ver todos</CustomLink>
        ) : null}
      </div>
    </div>
  );
}
