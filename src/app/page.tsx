"use client";

import DynamicBlurImage from "@/components/DynamicBlurImage";
import FadeIn from "@/components/motion/FadeIn";
import Typical from "react-typical";
import personalConfig from "@/utils/personalConfig";
import { CustomExternalLink } from "@/components/ui/CustomExternalLink";
import { FaRegCopy } from "react-icons/fa";

export default function Home() {
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="flex flex-col justify-center md:items-start md:pl-20">
          <div className="flex flex-col justify-center p-10 bg-slate-200/[0.5] dark:bg-white md:rounded-3xl md:mr-4 border border-black">
            <FadeIn>
              {/* Biography */}
              <div className="text-5xl font-bold dark:text-black">
                <Typical
                  steps={["Olá!", 1000, "Me chamo Marcell.", 500]}
                  loop={Infinity}
                  wrapper="h1"
                />
              </div>
              <h2 className="text-2xl font-semibold dark:text-black">
                Desenvolvendo software de qualidade como desenvolvedor web
                fullstack
              </h2>
            </FadeIn>
            <div className="mt-5 flex flex-row items-center justify-center md:justify-start">
              {/* ContractMeButton */}
              <FadeIn>
                <a
                  target="_blank"
                  href={personalConfig.social_links.linkedin}
                  className="text-[#fffafa] bg-[#038D48] hover:bg-green-600 px-4 py-2 mr-2 mb-2 rounded-md transition duration-300 w-max text-lg hover:shadow-lg"
                >
                  Me contrate
                </a>
              </FadeIn>
              <CustomExternalLink href="/projetos">
                Ver projetos
              </CustomExternalLink>
            </div>
          </div>

          {/* div abaixo aparece somente em celular */}
          <div className="md:hidden w-full h-10 bg-[#068155]" />

          {/* Contato */}
          <div className="flex flex-col justify-center p-10 bg-slate-200/[0.5] dark:bg-white md:rounded-3xl w-full md:w-80 md:mr-4 md:mt-10 border border-black">
            <FadeIn>
              <h1 className="font-semibold text-xl dark:text-black">Contato</h1>
            </FadeIn>
            <FadeIn className="inline-flex items-center group">
              <button
                className="text-md text-center text-black rounded-lg hover:underline focus:ring-4 focus:outline-none focus:ring-green-300 p-1 mt-2"
                onClick={() => copyToClipboard(personalConfig.email)}
              >
                {personalConfig.email}
              </button>
              <FaRegCopy className="ml-2 hidden text-black group-hover:inline" />
            </FadeIn>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <DynamicBlurImage src="/hero-design.png" height={400} width={400} />
        </div>
      </div>
    </main>
  );
}
