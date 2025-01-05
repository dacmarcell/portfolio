import AboutMe from "@/components/AboutMe";
import PersonalPhoto from "@/components/PersonalPhoto";
import ProjectsList from "@/components/ProjectsList";
import Line from "@/components/ui/Line";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Welcome />
      <Line />
      <AboutMe />
      <Line />
      <PersonalPhoto />
      <Line />
      <ProjectsList onlyFavorites />
    </main>
  );
}
