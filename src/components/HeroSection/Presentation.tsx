import personalConfig from "@/utils/personalConfig";

export default function Presentation() {
  return (
    <div className="bg-background dark:bg-background-dark flex flex-col justify-center p-10">
      <h1 className="text-5xl font-bold">Olá! Me chamo Marcell.</h1>
      <h2 className="text-2xl font-semibold">
        Desenvolvendo softwares de qualidade como desenvolvedor web fullstack
      </h2>
      <a
        target="_blank"
        href={personalConfig.social_links.linkedin}
        className="
        text-black
        dark:text-white
        bg-green-500
        px-4
        py-2
        rounded-md
        mt-4
        hover:bg-green-600
        transition
        duration-300
        w-max
      "
      >
        Me contrate
      </a>
    </div>
  );
}
