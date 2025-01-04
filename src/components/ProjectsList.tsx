import { projects } from "../mocks/projects.json";
import Card from "./Card";
import Title from "./ui/Title";

export default function ProjectsList() {
  return (
    <div>
      <Title>Projetos</Title>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}
