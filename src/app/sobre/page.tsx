"use client";

import ExperiencesList from "@/components/About/ExperiencesList";
import DynamicBlurImage from "@/components/DynamicBlurImage";
import FadeIn from "@/components/motion/FadeIn";
import Line from "@/components/ui/Line";
import { motion } from "motion/react";
import { FaTrophy } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Primeira Seção - Sobre Mim */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <FadeIn>
            <DynamicBlurImage
              isRounded
              width={500}
              height={500}
              src="https://avatars.githubusercontent.com/u/83461178?v=4"
            />
          </FadeIn>
          <FadeIn>
            <p className="max-w-xl text-lg leading-relaxed p-6 border border-gray-700 bg-gray-800/50 rounded-lg shadow-md">
              <span className="text-xl font-bold">👨‍💻 Quem sou eu?</span>
              <br />
              Bacharelando em Ciência da Computação e Desenvolvedor Web
              FullStack com mais de um ano de experiência. Sou apaixonado por
              escrever código limpo e eficiente, seguindo os princípios{" "}
              <b>DRY, SOLID, KISS e Clean Code</b>. Sempre busco criar
              aplicações escaláveis e performáticas utilizando tecnologias
              modernas.
              <br />
              Fora do trabalho, estou sempre estudando algo novo ou
              desenvolvendo projetos pessoais. Tenho um gato chamado Django 🐱,
              sou fã de pizza 🍕 e movido pela busca constante por aprendizado.
            </p>
          </FadeIn>
        </div>

        {/* Segunda Seção - Tecnologias */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
          <FadeIn>
            <p className="max-w-xl text-lg leading-relaxed p-6 border border-gray-700 bg-gray-800/50 rounded-lg shadow-md">
              <span className="text-xl font-bold">🚀 O que eu faço?</span>
              <br />
              Atualmente, trabalho com o ecossistema <b>PHP</b>, especialmente
              com <b>Laravel</b>, além de ser proficiente em diversas linguagens
              como <b>C#, TypeScript, Rust e Python</b>. Tenho experiência com
              frameworks como <b>Next.js, .NET e Quasar</b>. Como um
              desenvolvedor Júnior curioso, adoro explorar novas tecnologias e
              aprimorar minhas habilidades constantemente.
            </p>
          </FadeIn>
          <FadeIn>
            <DynamicBlurImage
              isRounded
              width={500}
              height={500}
              src="/me.jpg"
            />
          </FadeIn>
        </div>

        {/* Destaque - Hackathon */}
        <motion.div
          className="text-md p-4 md:p-6 border border-yellow-500 rounded-lg bg-yellow-500/[0.15] w-4/5 md:w-1/2 mx-auto mt-16 text-center font-semibold text-yellow-400 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <FaTrophy className="inline-block text-2xl mb-1 text-yellow-400" /> 3°
          lugar no Hackathon SEMCOMP UFBA 2024
        </motion.div>

        {/* Seção Hackathon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Imagem do Hackathon */}
          <FadeIn className="rounded-lg overflow-hidden shadow-md">
            <DynamicBlurImage
              width={500}
              height={500}
              src="/hackathon-semcomp.jpeg"
            />
          </FadeIn>

          {/* Texto Hackathon */}
          <FadeIn>
            <p className="text-lg leading-relaxed p-6 border border-gray-700 bg-gray-800/50 rounded-lg shadow-md">
              Participar do <b>Hackathon SEMCOMP UFBA 2024</b> foi uma
              experiência incrível! Desenvolvemos uma solução inovadora para
              levar <b>tecnologia e informação</b> a comunidades marginalizadas.
              <br />A arquitetura da solução foi idealizada por mim, garantindo
              acessibilidade para públicos com dificuldade de acesso à internet.
              Esse projeto nos garantiu o <b>3º lugar na competição</b>, uma
              conquista que nos trouxe muito aprendizado e crescimento!
            </p>
          </FadeIn>

          {/* Vídeo Hackathon */}
          <div className="flex justify-center">
            <iframe
              allowFullScreen
              width="500"
              height="600"
              src="https://www.youtube.com/embed/3aH0Sz7eVy4"
              title="Hackathon SEMCOMP 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <Line />

      <ExperiencesList />
    </>
  );
}
