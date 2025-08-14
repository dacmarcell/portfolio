import { useEffect } from "react";

import { TextAnimate } from "@/components/magicui/text-animate";
import DynamicBlurImage from "@/components/DynamicBlurImage";
import Reveal from "@/components/motion/Reveal";
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
          <Reveal delay={0.05}>
            <DynamicBlurImage
              isRounded
              width={500}
              height={500}
              src="https://avatars.githubusercontent.com/u/83461178?v=4"
            />
          </Reveal>
          <Reveal delay={0.1}>
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
                Desenvolvedor FullStack com mais de um ano de experiência, desenvolvedor com foco em estruturação de sistemas escaláveis, utilizando práticas modernas de desenvolvimento de software. Em constante atualização e aprendizado. Aplicando princípios como DRY, SOLID, KISS e Clean Code.
                Nas horas vagas, aproveito para estudar tendências da área ou desenvolver projetos pessoais. Adoro explorar novas tecnologias.
              </TextAnimate>
            </div>
          </Reveal>
        </div>
        {/* Segunda Seção - Tecnologias */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
          <Reveal delay={0.05}>
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
                Atualmente, me desenvolvendo profissionalmente com o ecossistema Laravel e Vue.js. minhas skills além do PHP, abrangem as linguagens C#, Typescript, Rust e Python. Experiência comprovada com diversos frameworks como Next.js, .NET, Vue.js e Laravel.
              </TextAnimate>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <DynamicBlurImage
              isRounded
              width={500}
              height={500}
              src="/me.jpg"
            />
          </Reveal>
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
