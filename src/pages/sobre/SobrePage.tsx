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
                Olá! Sou Marcell Andrade, estudante de Ciência da Computação e
                desenvolvedor web com mais de um ano de experiência. Meu
                objetivo? Criar aplicações rápidas, intuitivas e bem
                estruturadas, garantindo que tudo funcione de forma eficiente
                nos bastidores. Adoro transformar ideias em realidade através da
                tecnologia, sempre seguindo boas práticas para garantir um
                código organizado e de fácil manutenção. Focado em construir
                soluções digitais para tornar a vida mais simples e produtiva.
                Fora do código, estou sempre aprendendo algo novo, explorando
                projetos pessoais ou aproveitando o tempo com meu gato, 🐱
                Django! Vamos criar algo incrível juntos? 🚀
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
