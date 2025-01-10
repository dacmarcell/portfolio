import personalConfig from "@/utils/personalConfig";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

export default function Presentation() {
  return (
    <div className="flex flex-col justify-center p-10 bg-slate-200/[0.5] dark:bg-green-600/[0.5] md:rounded-3xl md:mr-4 mb-10">
      <Biography />
      <div className="mt-5 flex flex-row items-center justify-center md:justify-start">
        <ContractMeButton />
        <ProjectsLink />
      </div>
    </div>
  );
}

function Biography() {
  return (
    <>
      <h1 className="text-6xl font-bold">Olá! Me chamo Marcell.</h1>
      <h2 className="text-2xl font-semibold">
        Desenvolvendo software de qualidade como desenvolvedor web fullstack
      </h2>
    </>
  );
}

function ContractMeButton() {
  return (
    <a
      target="_blank"
      href={personalConfig.social_links.linkedin}
      className="text-[#fffafa] bg-[#038D48] hover:bg-green-600 px-4 py-2 mr-2 mb-2 rounded-md transition duration-300 w-max text-lg hover:shadow-lg"
    >
      Me contrate
    </a>
  );
}

function ProjectsLink() {
  return (
    <Link
      href="/projetos"
      className="flex flex-row hover:underline items-center"
    >
      <span>Projetos</span>
      <GoLinkExternal className="ml-1" />
    </Link>
  );
}
