import json from "../../../public/mocks/projects.json";

import Card from "@/components/Card";
import Title from "@/components/ui/Title";

export default function ProjetosPage() {
  return (
    <main className="p-10">
      <Title>Projetos</Title>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {json.projects.map((project) => {
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
