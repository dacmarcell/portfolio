import Image from "next/image";
import { dynamicBlurDataUrl } from "@/utils/dynamicBlurDataUrl";
import { useEffect, useState } from "react";
import { DEFAULT_BLUR } from "@/utils/constants";

interface DynamicBlurImageProps {
  src: string;
  width?: number;
  height?: number;
  isRounded?: boolean;
}

export default function DynamicBlurImage({
  src,
  height,
  width,
  isRounded,
}: DynamicBlurImageProps) {
  const [blurDataURL, setBlurDataURL] = useState(DEFAULT_BLUR);

  useEffect(() => {
    dynamicBlurDataUrl(src).then(setBlurDataURL);
  }, [src]);

  return (
    <Image
      src={src}
      width={width ?? 500}
      height={height ?? 500}
      blurDataURL={blurDataURL}
      // TODO: atualizar alt text
      alt="Homem branco de camisa cinza e calça preta, com uma mochila preta e um sorriso. No lado esquerdo da cabeça dele tem uma bolha adicionada via edição de imagem com a logo da linguagem de programação Rust. As bolhas do lado direito da cabeça dele se referem às linguagens de programação csharp (c#) e typescript. o fundo da imagem é verde com tonalidade mais puxada pro escuro."
      className={`transition-all duration-300 object-cover hover:scale-105 dark:border-background dark:shadow-none ${
        isRounded ? "rounded-full" : ""
      }`}
      placeholder="blur"
    />
  );
}
