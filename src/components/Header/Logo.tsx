"use client";

import Image from "next/image";
import lightLogo from "../../../public/light-logo.png";

export default function Logo() {
  return (
    <Image
      alt="Marcell's logo"
      src={lightLogo}
      className="object-contain w-30 p-2"
    />
  );
}
