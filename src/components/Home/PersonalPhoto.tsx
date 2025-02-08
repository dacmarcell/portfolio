import Image from "next/image";
import { dynamicBlurDataUrl } from "@/utils/dynamicBlurDataUrl";

export default async function PersonalPhoto() {
  const src = "/hero-design.png";
  const blurDataURL = await dynamicBlurDataUrl(src);

  return (
    <div className="flex items-center justify-center bg-white md:bg-transparent">
      <Image
        width={500}
        height={400}
        src={src}
        alt="Homem branco de camisa cinza e calça preta, com uma mochila preta e um sorriso. No lado esquerdo da cabeça dele tem uma bolha adicionada via edição de imagem com a logo da linguagem de programação Rust. As bolhas do lado direito da cabeça dele se referem às linguagens de programação csharp (c#) e typescript. o fundo da imagem é verde com tonalidade mais puxada pro escuro."
        className="transition-all duration-300 object-cover hover:scale-105 dark:border-background dark:shadow-none rounded-full md:rounded-none md:rounded-r-full md:rounded-l-none"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </div>
  );
}
