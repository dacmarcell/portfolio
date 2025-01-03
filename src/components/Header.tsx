import personalConfig from "@/utils/personalConfig";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navigation } from "../mocks/navigation.json";
import { MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
      {/* Header container */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Website title */}
        <div>
          <h1 className="text-lg font-semibold">Marcell</h1>
          <h2>Fullstack web dev</h2>
        </div>
        {/* Navigation menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6">
            <NavigationLinks />
          </ul>
        </nav>
        {/* Social media icons */}
        <div className="hidden md:block">
          <SocialIcons />
        </div>
        {/* Add Mobile Navigation Toggle Here */}
      </div>
    </header>
  );
}

function NavigationLinks() {
  return navigation.map((item) => {
    return (
      <li key={item.id}>
        <Link href={item.endpoint} className="hover:text-gray-300">
          {item.formattedName}
        </Link>
      </li>
    );
  });
}

// Define the SocialIcons component
function SocialIcons() {
  return (
    <div className="flex gap-x-4">
      {/* GitHub icon */}
      <a
        href={personalConfig.social_links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-white hover:text-gray-300" />
      </a>
      <a
        href={personalConfig.social_links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-white hover:text-gray-300" />
      </a>
      <a
        href={personalConfig.social_links.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail className="text-white hover:text-gray-300" />
      </a>
      {/* Add more social media icons as needed */}
    </div>
  );
}
