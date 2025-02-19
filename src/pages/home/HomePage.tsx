import { motion } from "framer-motion";
import Typical from "react-typical";
import { useMemo } from "react";

import { projects } from "../../../public/mocks/projects.json";

import { MarqueeTechs } from "@/components/MarqueeTechs";
import FadeIn from "@/components/motion/FadeIn";
import Card from "@/components/Card";
import { app } from "@/utils/constants";
import Link from "next/link";
import { FaRegCopy } from "react-icons/fa";
import DynamicBlurImage from "@/components/DynamicBlurImage";

export default function HomePage() {
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  const getFavoriteProjects = () =>
    projects.filter((project) => project.isFavorite);

  const favoriteProjects = useMemo(() => getFavoriteProjects(), []);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[200px] gap-6 items-center">
        {/* BIO - Introdução */}
        <div className="flex flex-col justify-center md:items-start md:pl-20">
          <div className="flex flex-col justify-center p-10 md:rounded-3xl md:mr-4 border border-white bg-white/10 backdrop-blur-md shadow-lg">
            <FadeIn>
              {/* Nome e introdução animados */}
              <div className="text-5xl font-bold text-white">
                <Typical
                  steps={["Olá!", 1000, "Me chamo Marcell.", 500]}
                  loop={Infinity}
                  wrapper="h1"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-300 mt-2">
                Desenvolvendo software de qualidade como desenvolvedor web
                fullstack 🚀
              </h2>
            </FadeIn>

            {/* Botões de ação */}
            <div className="mt-5 flex flex-row items-center justify-center md:justify-start">
              <motion.a
                target="_blank"
                href={app.social_links.linkedin}
                className="px-5 py-3 mr-3 text-lg font-medium rounded-lg border border-white text-white transition duration-300 hover:bg-white hover:text-black shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                🚀 Me contrate
              </motion.a>
              <Link
                href="/projetos"
                className="flex flex-row hover:underline items-center dark:text-black"
              >
                <span>📂 Ver projetos</span>
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div className="flex flex-col justify-center p-10 md:rounded-3xl w-full md:w-80 md:mr-4 md:mt-10 border border-white bg-white/10 backdrop-blur-md shadow-lg">
            <FadeIn>
              <h1 className="font-semibold text-xl text-white">📞 Contato</h1>
            </FadeIn>
            <FadeIn className="inline-flex items-center group">
              <button
                className="text-md text-white text-center rounded-lg hover:underline focus:ring-4 focus:outline-none focus:ring-white-800 p-1 mt-2 transition duration-300"
                onClick={() => copyToClipboard(app.email)}
              >
                {app.email}
              </button>
              <FaRegCopy className="ml-2 hidden group-hover:inline text-gray-400 transition duration-300" />
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
      <div className="mt-[210px]">
        <MarqueeTechs />
      </div>
      {/* Projetos selecionados */}
      {/* Card de projeto */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            🚀 Projetos Selecionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteProjects.map((project) => (
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
