import Title from "@/components/ui/Title";
import Card from "@/components/Card";

import { projects } from "../../../public/mocks/projects.json";

export default function Page() {
  return (
    <main className="p-10">
      <Title>Projetos</Title>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
