"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import json from "../../../public/mocks/experiences.json";
import FadeIn from "../motion/FadeIn";

interface Experience {
  id: number;
  title: string;
  company: string;
  startMonth: string;
  endMonth: string;
  technologies: string[];
  description: string;
}

const ExperiencesList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-2 rounded-lg">
      <FadeIn>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Experiências Profissionais
        </h2>
      </FadeIn>
      <div className="space-y-6">
        {json.experiencies.map((experience: Experience) => (
          <div
            key={experience.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <FadeIn>
              <div className="flex justify-between items-center">
                <h3 className="mr-10 text-xl font-semibold text-gray-800">
                  {experience.title}
                </h3>
                <span className="text-sm text-gray-500">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {experience.description}
                  </ReactMarkdown>
                </span>
              </div>
              <p className="text-gray-700 mt-2">
                <strong>{experience.company}</strong>
              </p>
              <div className="mt-4 text-center">
                <span className="text-gray-700 text-lg font-semibold">
                  {experience.startMonth} - {experience.endMonth}
                </span>
              </div>
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
            </FadeIn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesList;
