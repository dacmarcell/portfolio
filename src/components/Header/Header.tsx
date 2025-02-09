"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import SocialIcons from "./SocialIcons";
import DynamicBlurImage from "../DynamicBlurImage";

import { navigation } from "../../../public/mocks/navigation.json";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-4 sticky top-0 z-50 px-5 container mx-auto flex flex-col md:flex-row justify-between items-center">
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
      <div>
        <SocialIcons />
      </div>
    </header>
  );
}
