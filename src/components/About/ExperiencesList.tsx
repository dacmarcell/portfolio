"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { experiencies } from "../../../public/mocks/experiences.json";
import FadeIn from "../motion/FadeIn";

const ExperiencesList = () => {
  return (
    <div className="mx-auto p-10 rounded-lg">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-6">Experiências Profissionais</h2>
      </FadeIn>
      <div className="space-y-6">
        {experiencies.map((experience: (typeof experiencies)[number]) => (
          <div
            key={experience.id}
            className="border border-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <FadeIn>
              <div className="flex justify-between items-center mb-10">
                <h3 className="mr-10 text-xl font-semibold">
                  {experience.title}
                </h3>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  className="text-sm text-gray-500"
                >
                  {experience.description}
                </ReactMarkdown>
              </div>
              <b className="text-gray-700 mt-5 mr-5">{experience.company}</b>
              <span className="mt-4 text-center text-gray-700 text-lg font-semibold">
                {experience.startMonth} - {experience.endMonth}
              </span>
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
