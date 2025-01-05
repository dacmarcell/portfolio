import Presentation from "./Presentation";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <Presentation />
      <div className="bg-blue-500 flex items-center justify-center">
        <p className="text-white text-xl">Metade Direita</p>
      </div>
    </div>
  );
}
