"use client";

import FadeIn from "../motion/FadeIn";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title(props: TitleProps) {
  const { children } = props;
  return (
    <FadeIn>
      <h1 className="text-4xl font-semibold my-8">{children}</h1>
    </FadeIn>
  );
}
