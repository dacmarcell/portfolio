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
            className="relative group border border-gray-700 p-6 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Overlay com brilho ao passar o mouse */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-30 rounded-xl transition-opacity group-hover:opacity-40"></div>

            <FadeIn>
              {/* Título e Empresa */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">
                  {experience.title}
                </h3>
                <span className="text-sm font-medium text-gray-400 bg-gray-800 px-3 py-1 rounded-lg">
                  {experience.startMonth} - {experience.endMonth}
                </span>
              </div>

              {/* Descrição da Experiência */}
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="text-gray-300"
              >
                {experience.description}
              </ReactMarkdown>

              {/* Empresa */}
              <div className="mt-5">
                <b className="text-lg text-green-400">{experience.company}</b>
              </div>

              {/* Tecnologias Utilizadas */}
              <div className="mt-5">
                <h4 className="text-sm font-semibold text-gray-400">
                  Tecnologias:
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-gray-700 text-white px-3 py-1 rounded-full shadow-md transition transform hover:scale-105"
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
