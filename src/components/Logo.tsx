"use client";

import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";

import darkLogo from "../../public/dark-logo.png";
import lightLogo from "../../public/light-logo.png";

export default function Logo() {
  const theme = useTheme();

  return (
    <Image
      alt="Marcell's logo"
      src={theme === "dark" ? lightLogo : darkLogo}
      className="object-contain w-30 p-2"
    />
  );
}
