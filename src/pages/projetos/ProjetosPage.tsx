"use client";

import { useEffect, useState, useTransition } from "react";

import Card from "@/components/Card";
import Title from "@/components/ui/Title";
import { Project } from "@/interfaces/projects";

export default function ProjetosPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      fetch("/api/projects")
        .then((response) => response.json())
        .then((projectsData) => setProjects(projectsData));
    });
  }, []);

  if (isPending) {
    return (
      <main className="p-10">
        <Title>Projetos</Title>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <h1>Carregando...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="mt-0 m-20">
      <Title>Projetos</Title>
      <div className="grid grid-cols-3 gap-x-20 gap-y-5 mt-0 m-20 p-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
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
      </div>
    </main>
  );
}
