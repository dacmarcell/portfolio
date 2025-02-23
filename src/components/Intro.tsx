import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";
import { SiNextdotjs, SiVuedotjs, SiDotnet } from "react-icons/si";
import { FaNodeJs, FaLaravel } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-black">
      <Terminal className="bg-black text-white p-4 rounded-lg shadow-lg">
        <TypingAnimation>
          &gt; inicializando dev_portfolio.exe...
        </TypingAnimation>

        <AnimatedSpan
          delay={1500}
          className="text-green-500 flex items-center gap-2"
        >
          <span>✔ Ambiente configurado:</span>
          <SiNextdotjs size={20} />
          <SiVuedotjs size={20} className="text-green-400" />
          <FaLaravel size={20} className="text-red-500" />
          <FaNodeJs size={20} className="text-green-600" />
          <SiDotnet size={20} className="text-blue-500" />
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Experiência em desenvolvimento full-stack detectada.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Arquitetura de software e boas práticas aplicadas.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>
            ✔ Performance, escalabilidade e otimização como prioridade.
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Testes automatizados e qualidade de código garantidos.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>
            ✔ Integração com APIs, banco de dados e serviços em nuvem.
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>
            ✔ Desenvolvimento ágil: adaptabilidade e melhoria contínua.
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>
            ✔ Código sempre evoluindo. Novas tecnologias em exploração.
          </span>
        </AnimatedSpan>

        <TypingAnimation delay={5500} className="text-muted-foreground">
          Sucesso! O desenvolvimento nunca para.
        </TypingAnimation>

        <TypingAnimation delay={6000} className="text-muted-foreground">
          Bem-vindo ao meu portfólio. Vamos construir algo incrível?
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
