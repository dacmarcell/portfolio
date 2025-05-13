import { useEffect } from "react";

import { TextAnimate } from "@/components/magicui/text-animate";
import DynamicBlurImage from "@/components/DynamicBlurImage";
import FadeIn from "@/components/motion/FadeIn";
import Line from "@/components/ui/Line";
import ExperiencesList from "./components/ExperiencesList";
import { useIntroContext } from "@/contexts/IntroContext";

export default function SobrePage() {
  const { setIsIntroFinished } = useIntroContext();

  useEffect(() => {
    setIsIntroFinished(true);
  }, [setIsIntroFinished]);

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
                Sou desenvolvedor Full Stack com foco em soluções escaláveis e
                robustas, especializado em PHP e JavaScript com experiência
                sólida em Laravel, Node.js, C#, TypeScript, Rust e Python. Tenho
                atuado na criação de APIs, otimização de sistemas e arquiteturas
                escaláveis, sempre seguindo boas práticas como Clean Code e
                SOLID. Trabalho com cloud computing (AWS), frameworks modernos
                como Next.js, React, Quasar e ferramentas como Docker. Sou
                motivado por desafios, aprendizado contínuo e colaboração para
                entregar valor real aos projetos.
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
        {/* <UFBA2024HackathonSection /> */}
      </section>
      <div className="flex justify-center">
        <Line />
      </div>
      <ExperiencesList />
    </>
  );
}
