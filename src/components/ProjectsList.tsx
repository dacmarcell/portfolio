"use client";

import { useMemo, useState } from "react";
import json from "../../public/mocks/projects.json";
import Card from "./Card";
import Title from "./ui/Title";
import shuffle from "@/utils/shuffle";
import CustomLink from "./ui/CustomLink";
import FadeIn from "./motion/FadeIn";

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
      <FadeIn>
        <Title>Projetos</Title>
      </FadeIn>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => {
          return (
            <FadeIn key={project.id}>
              <Card
                isProject
                title={project.title}
                id={project.id.toString()}
                description={project.description}
                technologies={project.technologies}
              />
            </FadeIn>
          );
        })}
        {onlyFavorites ? (
          <CustomLink href="/projetos">Ver todos</CustomLink>
        ) : null}
      </div>
    </div>
  );
}
