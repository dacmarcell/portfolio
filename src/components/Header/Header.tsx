import Link from "next/link";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import SocialIcons from "./SocialIcons";
import personalConfig from "@/utils/personalConfig";

export default function Header() {
  return (
    <header className="bg-gray-950 text-white py-4 sticky top-0 z-50 w-full px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex gap-x-6">
            <NavigationLinks />
            <li>
              <Link
                href={personalConfig.gumroad}
                className="hover:text-green-800 hover:underline text-white"
                target="_blank"
              >
                Loja
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <SocialIcons />
        </div>
      </div>
    </header>
  );
}
