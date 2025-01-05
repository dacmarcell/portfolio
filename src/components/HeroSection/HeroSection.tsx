import PersonalPhoto from "../PersonalPhoto";
import Presentation from "./Presentation";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <Presentation />
      <PersonalPhoto />
    </div>
  );
}
