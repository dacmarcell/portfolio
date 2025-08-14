"use client";

import Card from "@/components/Card";
import Title from "@/components/ui/Title";
import { projects } from "@/data/projects";
import StaggerContainer from "@/components/motion/StaggerContainer";

export default function ProjetosPage() {
  return (
    <main className="mt-0 px-4 sm:px-6 lg:px-20 py-6">
      <Title>Projetos</Title>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <Card
            isProject
            key={project.id}
            title={project.title}
            id={project.id.toString()}
            href={project.url}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </StaggerContainer>
    </main>
  );
}
