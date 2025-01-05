import ClassroomPhoto from "@/components/About/ClassroomPhoto";
import ExperiencesList from "@/components/About/ExperiencesList";
import Line from "@/components/ui/Line";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-2 p-5">
        <div className="flex items-center justify-center text-white rounded-md p-4">
          <ClassroomPhoto />
        </div>

        <div className="flex items-center justify-center text-dark rounded-md p-4">
          <p className="text-lg">
            Bacharelando em Ciência da Computação, Desenvolvedor Web FullStack
            com aproximadamente 1 ano de experiência. Aprecio conceitos como
            DRY, SOLID, KISS e Clean Code durante a codificação de aplicações,
            com foco no desenvolvimento de aplicações escaláveis e
            performáticas, utilizando tecnologias da atualidade. Como um bom
            Júnior, também adoro experimentar novas tecnologias. Atualmente
            trabalho com o ecossistema Typescript com foco na Web, utilizando
            Next.js e Node.js. No back-end que é minha stack, atualmente utilizo
            C# e .NET para criação de aplicações. Também tenho projetos pessoais
            em Rust, Python e outras linguagens. Tenho um gato chamado Django e
            amo pizza. Sou curioso e inquieto. Sempre estudando algo novo ou
            fazendo algum projeto.
          </p>
        </div>
      </div>
      <Line />
      <ExperiencesList />
    </>
  );
}
