import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";
import { SiNextdotjs, SiVuedotjs, SiDotnet } from "react-icons/si";
import { FaNodeJs, FaLaravel } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-black">
      <Terminal className="bg-black text-white shadow-lg p-5">
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
          <span>✔ APIs, banco de dados.</span>
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
