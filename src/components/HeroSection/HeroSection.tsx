import PersonalPhoto from "./PersonalPhoto";
import Presentation from "./Presentation";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex flex-col justify-center items-center md:items-start md:pl-20">
        <Presentation />
      </div>
      <PersonalPhoto />
    </div>
  );
}
