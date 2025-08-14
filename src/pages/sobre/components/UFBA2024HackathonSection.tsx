import DynamicBlurImage from "@/components/DynamicBlurImage";
import { TextAnimate } from "@/components/magicui/text-animate";
import FadeIn from "@/components/motion/FadeIn";
import { motion } from "motion/react";
import { FaTrophy } from "react-icons/fa";

export default function UFBA2024HackathonSection() {
  const hackathonSemCompImgPath = "/hackathon-semcomp.jpeg";

  return (
    <>
      {/* Destaque - Hackathon */}
      <motion.div
        className="text-md p-4 md:p-6 border border-yellow-500 rounded-lg bg-yellow-500/[0.15] w-4/5 md:w-1/2 mx-auto mt-16 text-center font-semibold text-yellow-400 shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        <FaTrophy className="inline-block text-2xl mb-1 text-yellow-400" /> 3°
        lugar no Hackathon SEMCOMP UFBA 2024
      </motion.div>

      {/* Seção Hackathon */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Imagem do Hackathon */}
        <FadeIn className="rounded-lg overflow-hidden shadow-md">
          <DynamicBlurImage
            width={500}
            height={500}
            src={hackathonSemCompImgPath}
          />
        </FadeIn>

        {/* Texto Hackathon */}
        <FadeIn>
          <div className="text-lg leading-relaxed p-6 border border-gray-700 bg-gray-800/50 rounded-lg shadow-md">
            <TextAnimate
              once
              by="line"
              animation="fadeIn"
              className="font-normal text-lg"
            >
              Participar do Hackathon SEMCOMP UFBA 2024 foi uma experiência
              incrível! Desenvolvemos uma solução inovadora para levar
              tecnologia e informação a comunidades marginalizadas. A
              arquitetura da solução foi idealizada por mim, garantindo
              acessibilidade para públicos com dificuldade de acesso à internet.
              Esse projeto nos garantiu o 3º lugar na competição, uma conquista
              que nos trouxe muito aprendizado e crescimento!
            </TextAnimate>
          </div>
        </FadeIn>

        {/* Vídeo Hackathon */}
        <div className="flex justify-center">
          <iframe
            allowFullScreen
            width="500"
            height="600"
            src="https://www.youtube.com/embed/3aH0Sz7eVy4"
            title="Hackathon SEMCOMP 2024"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </>
  );
}
