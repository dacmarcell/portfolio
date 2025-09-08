/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";

export type MotionPreset = {
  enterDuration: number;
  exitDuration: number;
  step: number;
  ease: any;
};

type Palette = "default" | "summer" | "winter" | "mono";

function detectPalette(): Palette {
  if (typeof document === "undefined") return "default";

  const d = document.documentElement;

  if (d.classList.contains("theme-summer")) return "summer";
  if (d.classList.contains("theme-winter")) return "winter";
  if (d.classList.contains("theme-mono")) return "mono";

  return "default";
}

export function useMotionTheme(): MotionPreset {
  const [palette, setPalette] = useState<Palette>(() => detectPalette());

  useEffect(() => {
    const onChange = () => setPalette(detectPalette());
    window.addEventListener("palettechange", onChange as EventListener);
    return () =>
      window.removeEventListener("palettechange", onChange as EventListener);
  }, []);

  return useMemo(() => {
    switch (palette) {
      case "summer":
        return {
          enterDuration: 0.28,
          exitDuration: 0.2,
          step: 0.04,
          ease: "easeOut",
        };
      case "winter":
        return {
          enterDuration: 0.5,
          exitDuration: 0.35,
          step: 0.06,
          ease: [0.22, 1, 0.36, 1],
        };
      case "mono":
        return {
          enterDuration: 0.32,
          exitDuration: 0.25,
          step: 0.05,
          ease: "easeInOut",
        };
      default:
        return {
          enterDuration: 0.35,
          exitDuration: 0.25,
          step: 0.05,
          ease: "easeOut",
        };
    }
  }, [palette]);
}
