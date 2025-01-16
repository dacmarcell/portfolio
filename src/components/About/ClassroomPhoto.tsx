"use client";

import Image from "next/image";
import FadeIn from "../motion/FadeIn";

export default function ClassroomPhoto() {
  return (
    <div className="flex items-center justify-center">
      <FadeIn>
        <Image
          width={500}
          height={500}
          src="https://avatars.githubusercontent.com/u/83461178?v=4"
          alt="Marcell, careca com camisa preta e calça preta e segurando um papel, dando aula de lógica de programação"
          className="transition-all duration-300 object-cover shadow-lg hover:scale-105 dark:border-background dark:shadow-none rounded-lg border-2 border-black dark:border-white"
        />
      </FadeIn>
    </div>
  );
}
