import Informations from "@/components/Home/Informations";
import DynamicBlurImage from "@/components/Home/DynamicBlurImage";
import Presentation from "@/components/Home/Presentation";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="flex flex-col justify-center md:items-start md:pl-20">
          <Presentation />
          {/* div abaixo aparece somente em celular */}
          <div className="md:hidden w-full h-10 bg-[#068155]" />
          <Informations />
        </div>
        <div className="hidden md:flex justify-center items-center">
          <DynamicBlurImage src="/hero-design.png" height={400} width={400} />
        </div>
      </div>
    </main>
  );
}
