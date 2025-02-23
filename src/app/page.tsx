"use client";

import Intro from "@/components/Intro";
import { useIntroContext } from "@/contexts/IntroContext";
import HomePage from "@/pages/home/HomePage";
import { useEffect } from "react";

export default function Home() {
  const { isIntroFinished, setIsIntroFinished } = useIntroContext();

  useEffect(() => {
    setTimeout(() => {
      setIsIntroFinished(true);
    }, 10000);
  });

  return isIntroFinished ? (
    <HomePage />
  ) : (
    <div className="flex items-center justify-center h-screen w-full">
      <Intro />
    </div>
  );
}
