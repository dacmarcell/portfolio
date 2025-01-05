import Informations from "@/components/Home/Informations";
import PersonalPhoto from "@/components/Home/PersonalPhoto";
import Presentation from "@/components/Home/Presentation";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="flex flex-col justify-center md:items-start md:pl-20">
          <Presentation />
          <Informations />
        </div>
        <PersonalPhoto />
      </div>
    </main>
  );
}
