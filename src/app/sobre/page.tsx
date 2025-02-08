"use client";

import ExperiencesList from "@/components/About/ExperiencesList";
import DynamicBlurImage from "@/components/Home/DynamicBlurImage";
import FadeIn from "@/components/motion/FadeIn";
import Line from "@/components/ui/Line";

export default function Page() {
  return (
    <>
      <div className="flex flex-row">
        <FadeIn className="ml-10 mt-10 mr-10">
          <DynamicBlurImage
            isRounded
            width={500}
            height={500}
            src="https://avatars.githubusercontent.com/u/83461178?v=4"
          />
        </FadeIn>
        <FadeIn>
          <p className="mt-20 text-lg text-start">
            Bacharelando em Ciência da Computação e Desenvolvedor Web FullStack
            com mais de um ano de experiência. Tenho paixão por escrever código
            limpo e eficiente, seguindo princípios como DRY, SOLID, KISS e Clean
            Code, sempre com foco na criação de aplicações escaláveis e
            performáticas utilizando tecnologias modernas.
            <br />
            Nas horas vagas, estou sempre estudando algo novo ou desenvolvendo
            projetos pessoais. Tenho um gato chamado Django, sou fã de pizza e
            movido pela inquietude de quem está sempre em busca de
            aprendizado.Bacharelando
          </p>
        </FadeIn>
      </div>
      <div className="flex flex-row">
        <FadeIn>
          <p className="mt-10 text-lg text-end">
            Atualmente, trabalho com o ecossistema PHP, especialmente com
            Laravel, e sou proficiente em diversas linguagens, como C#,
            Typescript, Rust e Python. Também tenho experiência com frameworks
            como Next.js, .NET e Quasar. Como um desenvolvedor Júnior curioso,
            adoro explorar novas tecnologias e aprimorar constantemente minhas
            habilidades.
          </p>
        </FadeIn>
        <FadeIn className="ml-10 mr-10">
          <DynamicBlurImage
            isRounded
            width={500}
            height={500}
            src="/hero-design.png"
          />
        </FadeIn>
      </div>
      <Line />
      <ExperiencesList />
    </>
  );
}
