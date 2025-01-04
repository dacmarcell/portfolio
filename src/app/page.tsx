import AboutMe from "@/components/AboutMe";
import PersonalPhoto from "@/components/PersonalPhoto";
import ProjectsList from "@/components/ProjectsList";
import Line from "@/components/ui/Line";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl text-center sm:text-left">
        Olá! seja bem-vindo(a). por aqui você vai encontrar um pouco sobre mim,
        meus projetos de programação e algumas informações interessantes!
      </h1>
      <Line />
      <AboutMe />
      <Line />
      <PersonalPhoto />
      <Line />
      <ProjectsList onlyFavorites />
    </main>
  );
}
