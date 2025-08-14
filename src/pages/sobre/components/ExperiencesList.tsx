"use client";

import React, { useEffect, useState, useTransition } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { motion } from "motion/react";
import { Experience } from "@/interfaces/experiences";

export default function ExperiencesList() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      fetch("/api/experiences")
        .then((response) => response.json())
        .then(setExperiences);
    });
  }, []);

  if (isPending) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="mx-auto p-10 rounded-lg">
      <motion.h2
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        Experiências Profissionais
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((experience, i) => (
          <motion.article
            key={experience.id}
            className="relative group border border-gray-700 p-6 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-30 rounded-xl transition-opacity group-hover:opacity-40"></div>
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">
                  {experience.position}
                </h3>
                <span className="text-sm font-medium text-gray-400 bg-gray-800 px-3 py-1 rounded-lg">
                  {experience.period}
                </span>
              </div>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-gray-300">
                {experience.description}
              </ReactMarkdown>
              <div className="mt-5">
                <b className="text-lg text-green-400">{experience.enterprise}</b>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
