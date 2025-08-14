"use client";

import Reveal from "../motion/Reveal";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <Reveal>
      <h1 className={"text-2xl sm:text-3xl md:text-4xl font-semibold my-6 md:my-8 " + className}>{children}</h1>
    </Reveal>
  );
}
