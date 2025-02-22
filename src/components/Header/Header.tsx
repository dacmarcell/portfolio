"use client";

import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";

import SocialIcons from "./SocialIcons";
import DynamicBlurImage from "../DynamicBlurImage";
import { Navigation } from "@/interfaces/navigations";

export default function Header() {
  const [navigation, setNavigation] = useState<Navigation[]>([]);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  useEffect(() => {
    startTransition(() => {
      fetch("/api/navigation")
        .then((response) => response.json())
        .then((navigationData) => {
          setNavigation(navigationData);
        });
    });
  }, []);

  if (isPending) {
    return <h1>Carregando...</h1>;
  }

  return (
    <header className="rounded rounded-full bg-gray-900 py-4 sticky top-0 z-50 px-5 container mx-auto flex flex-col md:flex-row justify-between items-center">
      <DynamicBlurImage src="/light-logo.png" width={110} />
      <nav>
        <ul className="flex gap-x-6">
          {navigation.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  target={item.endpoint.includes("https") ? "_blank" : ""}
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
  );
}
