import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

import { TextAnimate } from "@/components/magicui/text-animate";
import DynamicBlurImage from "@/components/DynamicBlurImage";
import FadeIn from "@/components/motion/FadeIn";
import Line from "@/components/ui/Line";
import ExperiencesList from "./components/ExperiencesList";

export default function SobrePage() {
  return (
    <>
      <section className="px-6 md:px-20 py-16">
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
            <div className="max-w-xl text-xl font-bold leading-relaxed p-6 border border-gray-700 bg-gray-800/50 rounded-lg shadow-md">
              <span>👨‍💻</span>
              <TextAnimate
                once
                by="character"
                animation="blurInUp"
                className="text-3xl font-bold"
              >
                Quem sou eu?
              </TextAnimate>
              <TextAnimate
                once
                by="line"
                delay={500}
                animation="fadeIn"
                className="font-normal text-lg"
              >
                Bacharelando em Ciência da Computação e Desenvolvedor Web
                FullStack com mais de um ano de experiência. Sou apaixonado por
                escrever código limpo e eficiente, seguindo os princípios DRY,
                SOLID, KISS e Clean Code . Sempre busco criar aplicações
                escaláveis e performáticas utilizando tecnologias modernas. Fora
                do trabalho, estou sempre estudando algo novo ou desenvolvendo
                projetos pessoais. Tenho um gato chamado Django 🐱, sou fã de
                pizza 🍕 e movido pela busca constante por aprendizado.
              </TextAnimate>
            </div>
          </FadeIn>
        </div>

        {/* Segunda Seção - Tecnologias */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
          <FadeIn>
            <div className="max-w-xl text-lg leading-relaxed p-6 border border-gray-700 bg-gray-800/50 rounded-lg shadow-md">
              <span>🚀</span>
              <TextAnimate
                once
                by="character"
                animation="blurInUp"
                className="text-3xl font-bold"
              >
                O que eu faço?
              </TextAnimate>
              <TextAnimate
                once
                by="line"
                delay={500}
                animation="fadeIn"
                className="font-normal text-lg"
              >
                Atualmente, trabalho com o ecossistema PHP, especialmente com
                Laravel, além de ser proficiente em diversas linguagens como C#,
                TypeScript, Rust e Python. Tenho experiência com frameworks como
                Next.js, .NET e Quasar. Como um desenvolvedor Júnior curioso,
                adoro explorar novas tecnologias e aprimorar minhas habilidades
                constantemente.
              </TextAnimate>
            </div>
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
            <div className="text-lg leading-relaxed p-6 border border-gray-700 bg-gray-800/50 rounded-lg shadow-md">
              <TextAnimate
                once
                by="line"
                animation="fadeIn"
                className="font-normal text-lg"
              >
                Participar do Hackathon SEMCOMP UFBA 2024 foi uma experiência
                incrível! Desenvolvemos uma solução inovadora para levar
                tecnologia e informação a comunidades marginalizadas. A
                arquitetura da solução foi idealizada por mim, garantindo
                acessibilidade para públicos com dificuldade de acesso à
                internet. Esse projeto nos garantiu o 3º lugar na competição,
                uma conquista que nos trouxe muito aprendizado e crescimento!
              </TextAnimate>
            </div>
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
