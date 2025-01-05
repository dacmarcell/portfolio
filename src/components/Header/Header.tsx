import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <header className="dark:bg-gray-950 bg-green-100 text-white py-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex gap-x-6">
            <NavigationLinks />
          </ul>
        </nav>
        <div>
          <SocialIcons />
        </div>
      </div>
    </header>
  );
}
