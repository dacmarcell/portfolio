"use client";

import Typical from "react-typical";
import { FaRegCopy } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMemo } from "react";

import FadeIn from "@/components/motion/FadeIn";
import DynamicBlurImage from "@/components/DynamicBlurImage";
import { CustomExternalLink } from "@/components/ui/CustomExternalLink";

import json from "../../public/mocks/projects.json";
import Card from "@/components/Card";
import { config } from "@/utils/constants";

export default function Home() {
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  const getFavoriteProjects = () =>
    json.projects.filter((project) => project.isFavorite);

  const projects = useMemo(() => getFavoriteProjects(), []);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="flex flex-col justify-center md:items-start md:pl-20">
          <div className="flex flex-col justify-center p-10 md:rounded-3xl md:mr-4 border border-white">
            <FadeIn>
              {/* Biography */}
              <div className="text-5xl font-bold">
                <Typical
                  steps={["Olá!", 1000, "Me chamo Marcell.", 500]}
                  loop={Infinity}
                  wrapper="h1"
                />
              </div>
              <h2 className="text-2xl font-semibold">
                Desenvolvendo software de qualidade como desenvolvedor web
                fullstack
              </h2>
            </FadeIn>
            <div className="mt-5 flex flex-row items-center justify-center md:justify-start">
              {/* ContractMeButton */}
              <motion.a
                target="_blank"
                href={config.social_links.linkedin}
                className="px-4 py-2 mr-2 mb-2 rounded-md transition duration-300 w-max text-lg border border-white"
                whileHover={{ scale: 1.05 }}
              >
                Me contrate
              </motion.a>
              <CustomExternalLink href="/projetos">
                Ver projetos
              </CustomExternalLink>
            </div>
          </div>

          {/* div abaixo aparece somente em celular */}
          <div className="md:hidden w-full h-10 bg-[#068155]" />

          {/* Contato */}
          <div className="flex flex-col justify-center p-10 md:rounded-3xl w-full md:w-80 md:mr-4 md:mt-10 border border-white">
            <FadeIn>
              <h1 className="font-semibold text-xl">Contato</h1>
            </FadeIn>
            <FadeIn className="inline-flex items-center group">
              <button
                className="text-md text-center rounded-lg hover:underline focus:ring-4 focus:outline-none focus:ring-white-800 p-1 mt-2"
                onClick={() => copyToClipboard(config.email)}
              >
                {config.email}
              </button>
              <FaRegCopy className="ml-2 hidden group-hover:inline" />
            </FadeIn>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <DynamicBlurImage src="/hero-design.png" height={400} width={400} />
        </div>
      </div>

      {/* Projetos selecionados */}
      {/* Card de projeto */}
      <section className="py-20 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            🚀 Projetos Selecionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                isProject
                key={project.id}
                title={project.title}
                id={project.id.toString()}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
