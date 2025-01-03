import Image from "next/image";

export default function PersonalPhoto() {
  return (
    <Image
      width={300}
      height={300}
      src="/me.jpg"
      alt="homem branco com camisa cinza e mochila preta. selfie de frente como o rosto do homem centralizado, barba e bigode médios/pequenos, cabelo curto e preto e sorriso."
      className="rounded-full border-4 border-solid border-foreground dark:border-background transition-all hover:scale-105 duration-300 mt-8"
    />
  );
}
