"use client";

import Intro from "@/components/Intro";
import { useIntroContext } from "@/contexts/IntroContext";
import HomePage from "@/pages/home/HomePage";
import { useEffect } from "react";

export default function Home() {
  const { isIntroFinished, setIsIntroFinished } = useIntroContext();

  useEffect(() => {
    const seen = localStorage.getItem("intro_seen");
    if (seen) {
      setIsIntroFinished(true);
      return;
    }
    const timer = setTimeout(() => {
      setIsIntroFinished(true);
      localStorage.setItem("intro_seen", "1");
    }, 3000);
    return () => clearTimeout(timer);
  }, [setIsIntroFinished]);

  return isIntroFinished ? (
    <HomePage />
  ) : (
    <div className="flex items-center justify-center h-screen w-full">
      <Intro />
    </div>
  );
}
