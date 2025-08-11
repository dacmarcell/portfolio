"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import SocialIcons from "./SocialIcons";
import DynamicBlurImage from "../DynamicBlurImage";
import { Navigation } from "@/interfaces/navigations";
import { navigation as NAV } from "@/data/navigation";
import { useIntroContext } from "@/contexts/IntroContext";

export default function Header() {
  const navigation: Navigation[] = useMemo(() => NAV, []);
  const { isIntroFinished } = useIntroContext();
  const pathname = usePathname();


  return isIntroFinished ? (
    <header className="rounded rounded-full bg-gray-900 py-3 md:py-4 sticky top-0 z-50 px-4 md:px-5 container mx-auto flex flex-col md:flex-row justify-between items-center gap-y-3 md:gap-y-0 h-auto md:h-20">
      <DynamicBlurImage src="/light-logo.png" width={100} />
      <nav className="w-full md:w-auto">
        <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-6 overflow-x-auto no-scrollbar">
          {navigation.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  target={item.endpoint.includes("https") ? "_blank" : "_self"}
                  href={item.endpoint}
                  className={
                    "hover:underline " +
                    (pathname === item.endpoint
                      ? "text-green-500"
                      : "text-gray-500")
                  }
                >
                  {item.formattedName}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <SocialIcons />
    </header>
  ) : null;
}
