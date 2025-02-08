"use client";

import ClassroomPhoto from "@/components/About/ClassroomPhoto";
import ExperiencesList from "@/components/About/ExperiencesList";
import FadeIn from "@/components/motion/FadeIn";
import Line from "@/components/ui/Line";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-2 p-5">
        <div className="flex items-center justify-center text-white rounded-md p-4">
          <ClassroomPhoto />
        </div>

        <div className="flex items-center justify-center text-dark rounded-md p-4">
          <FadeIn>
            <p className="text-lg">
              Bacharelando em Ciência da Computação e Desenvolvedor Web
              FullStack com mais de um ano de experiência. Tenho paixão por
              escrever código limpo e eficiente, seguindo princípios como DRY,
              SOLID, KISS e Clean Code, sempre com foco na criação de aplicações
              escaláveis e performáticas utilizando tecnologias modernas.
              <br />
              Atualmente, trabalho com o ecossistema PHP, especialmente com
              Laravel, e sou proficiente em diversas linguagens, como C#,
              Typescript, Rust e Python. Também tenho experiência com frameworks
              como Next.js, .NET e Quasar. Como um desenvolvedor Júnior curioso,
              adoro explorar novas tecnologias e aprimorar constantemente minhas
              habilidades.
              <br />
              Nas horas vagas, estou sempre estudando algo novo ou desenvolvendo
              projetos pessoais. Tenho um gato chamado Django, sou fã de pizza e
              movido pela inquietude de quem está sempre em busca de
              aprendizado.Bacharelando
            </p>
          </FadeIn>
        </div>
      </div>
      <Line />
      <ExperiencesList />
    </>
  );
}
