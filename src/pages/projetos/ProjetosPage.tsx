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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-5 rounded-lg border border-gray-700 bg-gray-800/40 animate-pulse"
            >
              <div className="h-6 w-2/3 bg-emerald-600/40 rounded mb-3"></div>
              <div className="h-4 w-full bg-gray-600/40 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-600/40 rounded"></div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="mt-0 m-20">
      <Title>Projetos</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => {
          return (
            <Card
              isProject
              key={project.id}
              title={project.title}
              id={project.id.toString()}
              href={project.url}
              description={project.description}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </main>
  );
}
