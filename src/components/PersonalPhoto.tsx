import Image from "next/image";

export default function PersonalPhoto() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-auto rounded-lg my-5 sm:mx-8 sm:px-8 sm:py-6 dark:bg-opacity-10">
        <Image
          width={300}
          height={300}
          src="/me.jpg"
          alt="homem branco com camisa cinza e mochila preta. selfie de frente como o rosto do homem centralizado, barba e bigode médios/pequenos, cabelo curto e preto e sorriso."
          className="rounded-full border-2 border-solid border-foreground transition-all duration-300 my-5 w-60 h-60 object-cover shadow-lg sm:mt-0 sm:w-72 sm:h-72 hover:scale-105 dark:border-background dark:shadow-none"
        />
      </div>
    </div>
  );
}
