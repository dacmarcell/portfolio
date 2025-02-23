"use client";

import Intro from "@/components/Intro";
import HomePage from "@/pages/home/HomePage";
import { useEffect, useState } from "react";

export default function Home() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsIntroFinished(true);
    }, 10000);
  });

  return isIntroFinished ? <HomePage /> : <Intro />;
}
