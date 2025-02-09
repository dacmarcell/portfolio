"use client";

import FadeIn from "../motion/FadeIn";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <FadeIn>
      <h1 className={"text-4xl font-semibold my-8 " + className}>{children}</h1>
    </FadeIn>
  );
}
