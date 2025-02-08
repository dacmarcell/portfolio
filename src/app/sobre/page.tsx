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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 items-center">
        <FadeIn className="border-2 border-black rounded-lg overflow-hidden">
          <DynamicBlurImage
            width={500}
            height={500}
            src="/hackathon-semcomp.jpeg"
          />
        </FadeIn>

        <FadeIn className="md:col-span-1 text-lg text-start">
          <p className="mt-4 md:mt-0">
            <b>3° lugar no hackathon SemComp UFBA 2024</b>
            <br />
            Foi uma grande honra participar do Hackathon SEMCOMP UFBA 2024. Por
            lá desenvolvemos uma solução que leva tecnologia e informação para
            as comunidades marginalizadas.
            <br />
            Arquitetura idealizada por mim visando foco em públicos
            marginalizados com dificuldade de acesso à internet.
            <br />
            Com essa solução, conseguimos o terceiro lugar na competição. Foi um
            desafio muito proveitoso para a equipe como um todo, uma ótima
            experiência!
          </p>
        </FadeIn>

        <div className="flex justify-center">
          <iframe
            allowFullScreen
            width="500"
            height="600"
            src="https://www.youtube.com/embed/3aH0Sz7eVy4"
            title="hackathon semcomp 2024"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      <Line />
      <ExperiencesList />
    </>
  );
}
