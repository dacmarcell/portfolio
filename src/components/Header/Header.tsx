import Link from "next/link";
import SocialIcons from "./SocialIcons";
import personalConfig from "@/utils/personalConfig";
import { navigation } from "../../../public/mocks/navigation.json";
import DynamicBlurImage from "../DynamicBlurImage";

export default function Header() {
  return (
    <header className="py-4 sticky top-0 z-50 px-5 container mx-auto flex flex-col md:flex-row justify-between items-center">
      <DynamicBlurImage src="/light-logo.png" width={110} />
      <nav>
        <ul className="flex gap-x-6">
          {navigation.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.endpoint} className="hover:underline">
                  {item.formattedName}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={personalConfig.gumroad}
              className="hover:underline"
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
    </header>
  );
}
