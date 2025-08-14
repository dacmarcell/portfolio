import Link from "next/link";

interface CustomLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function CustomLink({ children, href }: CustomLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-green-700 text-white rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      {children}
    </Link>
  );
}
