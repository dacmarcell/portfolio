import React from "react";

import json from "../../../public/mocks/experiences.json";

interface Experience {
  id: number;
  title: string;
  company: string;
  startMonth: string;
  endMonth: string;
  technologies: string[];
  description: string;
}

const ExperienceCard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Experiências Profissionais
      </h2>
      <div className="space-y-6">
        {json.experiencies.map((experience: Experience) => (
          <div
            key={experience.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {experience.title}
              </h3>
              <span className="text-sm text-gray-500">
                {experience.description}
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              <strong>{experience.company}</strong>
            </p>
            <ul className="mt-3 text-gray-600 list-disc list-inside space-y-2">
              {experience.technologies.map((technology, id) => (
                <li key={id}>{technology}</li>
              ))}
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-600">
                Tecnologias:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-200 text-gray-800 py-1 px-2 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
