import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

interface CustomExternalLinkProps {
  href: string;
}

export function CustomExternalLink(props: Readonly<CustomExternalLinkProps>) {
  const { href } = props;

  return (
    <Link
      href={href}
      className="flex flex-row hover:underline items-center dark:text-black"
    >
      <span>Projetos</span>
      <GoLinkExternal className="ml-1" />
    </Link>
  );
}
