import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";
import { SiNextdotjs, SiVuedotjs, SiDotnet } from "react-icons/si";
import { FaNodeJs, FaLaravel, FaArrowRight } from "react-icons/fa";
import { useIntroContext } from "@/contexts/IntroContext";

export default function Intro() {
  const { setIsIntroFinished } = useIntroContext();

  function handleSkip() {
    setIsIntroFinished(true);
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <button
        onClick={handleSkip}
        className="absolute top-5 right-5 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-800 transition duration-300 ease-in-out flex items-center gap-2"
      >
        Pular
        <FaArrowRight className="ml-2" />
      </button>
      <Terminal className="bg-gray-900 text-white shadow-lg p-5">
        <TypingAnimation>
          &gt; inicializando devmarcell_portfolio.exe...
        </TypingAnimation>

        <AnimatedSpan
          delay={2000}
          className="text-green-500 flex items-center gap-2 mt-5"
        >
          <span>✔ Stack ativa:</span>
          <SiNextdotjs size={20} />
          <SiVuedotjs size={20} className="text-green-400" />
          <FaLaravel size={20} className="text-red-500" />
          <FaNodeJs size={20} className="text-green-600" />
          <SiDotnet size={20} className="text-blue-500" />
        </AnimatedSpan>
        <AnimatedSpan delay={3000} className="text-green-500 mt-5">
          <span>✔ Full-stack, arquitetura limpa e performance.</span>
        </AnimatedSpan>
        <AnimatedSpan delay={4000} className="text-green-500 mt-5">
          <span>✔ APIs e banco de dados.</span>
        </AnimatedSpan>
        <AnimatedSpan delay={5000} className="text-green-500 mt-5">
          <span>✔ Escalabilidade, segurança e agilidade.</span>
        </AnimatedSpan>
        <TypingAnimation delay={6000} className="text-muted-foreground mt-5">
          Sucesso! Seja bem-vindo(a) ao portfólio do Marcell. 🚀
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
