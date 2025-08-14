"use client";

import { FaCheck, FaRegCopy } from "react-icons/fa";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
const Typical = dynamic(() => import("react-typical"), { ssr: false });
import Link from "next/link";

import { MarqueeTechs } from "@/components/MarqueeTechs";
import FadeIn from "@/components/motion/FadeIn";
import Card from "@/components/Card";
import { app } from "@/lib/constants";
import DynamicBlurImage from "@/components/DynamicBlurImage";
import { Project } from "@/interfaces/projects";
import { projects as ALL_PROJECTS } from "@/data/projects";
import StaggerContainer from "@/components/motion/StaggerContainer";

export default function HomePage() {
  const [projects] = useState<Project[]>(ALL_PROJECTS);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(app.email);

    setCopiedToClipboard(true);

    setTimeout(() => {
      setCopiedToClipboard(false);
    }, 5000);
  };

  const firstThreeFavoriteProjects = useMemo(
    () => projects.filter((project) => project.isFavorite).slice(0, 3),
    [projects]
  );

  // No client fetch; data is local for instant render

  return (
    <main className="px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-24 lg:mt-[200px] gap-6 items-center">
        {/* BIO - Introdução */}
        <div className="flex flex-col justify-center md:items-start md:pl-20">
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 md:rounded-3xl md:mr-4 border border-gray-200 dark:border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-lg">
            <FadeIn>
              {/* Nome e introdução animados */}
              <div className="text-5xl font-bold text-foreground">
                <Typical
                  steps={["Olá!", 1000, "Me chamo Marcell.", 500]}
                  loop={Infinity}
                  wrapper="h1"
                />
              </div>
              <h2 className="text-2xl font-semibold text-muted-foreground mt-2">
                Desenvolvendo software de qualidade como desenvolvedor web
                fullstack 🚀
              </h2>
            </FadeIn>

            {/* Botões de ação */}
            <div className="mt-5 flex flex-row flex-wrap gap-2 items-center justify-center md:justify-start">
              <motion.a
                target="_blank"
                href={app.social_links.linkedin}
                className="px-5 py-3 mr-3 text-lg font-medium rounded-lg border border-foreground text-foreground transition duration-300 hover:bg-white hover:text-black shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                🚀 Me contrate
              </motion.a>
              <Link
                href="/projetos"
                className="flex flex-row hover:underline items-center text-foreground"
              >
                <span>📂 Ver projetos</span>
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 md:rounded-3xl w-full md:w-80 md:mr-4 md:mt-10 border border-gray-200 dark:border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-lg">
            <FadeIn>
              <h1 className="font-semibold text-xl text-foreground">📞 Contato</h1>
            </FadeIn>
            <FadeIn className="inline-flex items-center group">
              <button
                className="text-md text-foreground text-center rounded-lg hover:underline focus:ring-4 focus:outline-none focus:ring-ring p-1 mt-2 transition duration-300"
                onClick={() => {
                  copyEmailToClipboard();
                }}
              >
                {app.email}
              </button>
              {copiedToClipboard ? (
                <FaCheck className="ml-2 hidden group-hover:inline text-gray-400 transition duration-300" />
              ) : (
                <FaRegCopy className="ml-2 hidden group-hover:inline text-gray-400 transition duration-300" />
              )}
            </FadeIn>
          </div>
        </div>

        {/* Imagem destacada */}
        <div className="hidden md:flex justify-center items-center">
          <DynamicBlurImage
            isRounded
            src="/hero-design.png"
            height={400}
            width={400}
          />
        </div>
      </div>
      <div className="mt-10 md:mt-20 lg:mt-[210px]">
        <MarqueeTechs />
      </div>
      <section className="py-10 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            🚀 Projetos Selecionados
          </h2>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firstThreeFavoriteProjects.map((project) => (
              <Card
                isProject
                key={project.id}
                title={project.title}
                id={project.id.toString()}
                href={project.url}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
