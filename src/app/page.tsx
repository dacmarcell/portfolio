"use client";

import Typical from "react-typical";
import { FaRegCopy } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMemo } from "react";

import FadeIn from "@/components/motion/FadeIn";
import personalConfig from "@/utils/personalConfig";
import DynamicBlurImage from "@/components/DynamicBlurImage";
import { CustomExternalLink } from "@/components/ui/CustomExternalLink";

import json from "../../public/mocks/projects.json";
import Link from "next/link";

export default function Home() {
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  const getFavoriteProjects = () =>
    json.projects.filter((project) => project.isFavorite);

  const projects = useMemo(() => getFavoriteProjects(), []);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="flex flex-col justify-center md:items-start md:pl-20">
          <div className="flex flex-col justify-center p-10 bg-slate-200/[0.5] dark:bg-white md:rounded-3xl md:mr-4 border border-black">
            <FadeIn>
              {/* Biography */}
              <div className="text-5xl font-bold dark:text-black">
                <Typical
                  steps={["Olá!", 1000, "Me chamo Marcell.", 500]}
                  loop={Infinity}
                  wrapper="h1"
                />
              </div>
              <h2 className="text-2xl font-semibold dark:text-black">
                Desenvolvendo software de qualidade como desenvolvedor web
                fullstack
              </h2>
            </FadeIn>
            <div className="mt-5 flex flex-row items-center justify-center md:justify-start">
              {/* ContractMeButton */}
              <FadeIn>
                <a
                  target="_blank"
                  href={personalConfig.social_links.linkedin}
                  className="text-[#fffafa] bg-[#038D48] hover:bg-green-600 px-4 py-2 mr-2 mb-2 rounded-md transition duration-300 w-max text-lg hover:shadow-lg"
                >
                  Me contrate
                </a>
              </FadeIn>
              <CustomExternalLink href="/projetos">
                Ver projetos
              </CustomExternalLink>
            </div>
          </div>

          {/* div abaixo aparece somente em celular */}
          <div className="md:hidden w-full h-10 bg-[#068155]" />

          {/* Contato */}
          <div className="flex flex-col justify-center p-10 bg-slate-200/[0.5] dark:bg-white md:rounded-3xl w-full md:w-80 md:mr-4 md:mt-10 border border-black">
            <FadeIn>
              <h1 className="font-semibold text-xl dark:text-black">Contato</h1>
            </FadeIn>
            <FadeIn className="inline-flex items-center group">
              <button
                className="text-md text-center text-black rounded-lg hover:underline focus:ring-4 focus:outline-none focus:ring-green-300 p-1 mt-2"
                onClick={() => copyToClipboard(personalConfig.email)}
              >
                {personalConfig.email}
              </button>
              <FaRegCopy className="ml-2 hidden text-black group-hover:inline" />
            </FadeIn>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <DynamicBlurImage src="/hero-design.png" height={400} width={400} />
        </div>
      </div>

      {/* Projetos selecionados */}
      {/* Card de projeto */}
      <section className="py-20 bg-gray-900 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            🚀 Projetos Selecionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {/* TODO: Adicionar imagens aos projetos */}
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                /> */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, j) => {
                      return (
                        <span
                          key={j}
                          className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <Link
                    href={`/projetos/${project.id}`}
                    className="mt-4 inline-block text-green-400 hover:text-green-300 transition"
                  >
                    Ver mais →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
