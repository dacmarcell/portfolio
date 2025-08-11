"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import SocialIcons from "./SocialIcons";
import { Navigation } from "@/interfaces/navigations";
import { navigation as NAV } from "@/data/navigation";
import { useIntroContext } from "@/contexts/IntroContext";

export default function Header() {
  const navigation: Navigation[] = useMemo(() => NAV, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isIntroFinished } = useIntroContext();
  const pathname = usePathname();


  return isIntroFinished ? (
    <header className="rounded rounded-full bg-gray-900 py-3 md:py-4 sticky top-0 z-50 px-4 md:px-5 container mx-auto flex flex-col md:flex-row justify-between items-center gap-y-3 md:gap-y-0 h-auto md:h-20">
      <div className="w-full md:w-auto flex items-center justify-between">
        <img
          src="/dark-logo.png"
          width={100}
          height={28}
          alt="DevMarcell logo"
          className="block dark:hidden"
        />
        <img
          src="/light-logo.png"
          width={100}
          height={28}
          alt="DevMarcell logo"
          className="hidden dark:block"
        />
        <button
          className="md:hidden p-2 rounded border border-gray-700 text-white ml-3"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav id="primary-navigation" className="w-full md:w-auto">
        <ul
          className={
            `${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center md:items-start gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-6` +
            " overflow-x-auto no-scrollbar"
          }
        >
          {navigation.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  target={item.endpoint.includes("https") ? "_blank" : "_self"}
                  href={item.endpoint}
                  className={
                    "hover:underline " +
                    (pathname === item.endpoint
                      ? "text-green-600 dark:text-green-500"
                      : "text-gray-700 dark:text-gray-500")
                  }
                  onClick={() => setMenuOpen(false)}
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
