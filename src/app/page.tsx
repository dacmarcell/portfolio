import AboutMe from "@/components/AboutMe";
import PersonalPhoto from "@/components/PersonalPhoto";
import ProjectsList from "@/components/ProjectsList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl text-center sm:text-left">
          Olá! seja bem-vindo(a). por aqui você vai encontrar um pouco sobre
          mim, meus projetos de programação e algumas informações interessantes!
        </h1>
        <hr
          className="
          w-1/2 
          my-8 
          border-t-2 
          border-solid 
          border-foreground 
          dark:border-background 
          rounded-full 
          sm:w-1/4 
          sm:my-12 
          dark:border-opacity-50
        "
        />
        <AboutMe />
        <hr />
        <PersonalPhoto />
        <hr />
        <ProjectsList onlyFavorites />
      </main>
    </div>
  );
}
