"use client";

import { Project } from "@/interfaces/projects";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Botão de Voltar */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-400 mb-6 transition"
        >
          <BsArrowLeft className="w-5 h-5 mr-2" /> Voltar
        </button>

        {/* Título e Imagem */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-gray-400 mt-2">{project.description}</p>
          {/* <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 object-cover rounded-xl mt-6 shadow-lg"
          /> */}
        </motion.div>

        {/* Tecnologias */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 mt-6"
        >
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Recursos do Projeto */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold">🔹 Recursos do Projeto</h2>
          <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="before:content-['🔥'] before:mr-2">
                {feature}
              </li>
            ))}
          </ul>
        </motion.div> */}

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <a
            target="_blank"
            href={project.url}
            className="bg-green-700 hover:bg-green-600 font-semibold px-6 py-3 rounded-lg transition"
          >
            🔗 Ver Projeto
          </a>
          {/* <a
            href={project.repoLink}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            🛠 Código Fonte
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}
