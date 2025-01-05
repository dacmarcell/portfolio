import personalConfig from "@/utils/personalConfig";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navigation } from "../mocks/navigation.json";
import { MdEmail } from "react-icons/md";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="dark:bg-gray-950 bg-green-500 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-around items-center">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex gap-x-6">
            <NavigationLinks />
          </ul>
        </nav>
        <div className="hidden md:block">
          <SocialIcons />
        </div>
      </div>
    </header>
  );
}

function NavigationLinks() {
  return navigation.map((item) => {
    return (
      <li key={item.id}>
        <Link
          href={item.endpoint}
          className="hover:text-green-800 text-black dark:text-white"
        >
          {item.formattedName}
        </Link>
      </li>
    );
  });
}

function SocialIcons() {
  return (
    <div className="flex gap-x-4">
      <a
        href={personalConfig.social_links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="dark:text-white text-black hover:text-green-800" />
      </a>
      <a
        href={personalConfig.social_links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="dark:text-white text-black hover:text-green-800" />
      </a>
      <a
        href={personalConfig.social_links.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail className="dark:text-white text-black hover:text-green-800" />
      </a>
    </div>
  );
}
