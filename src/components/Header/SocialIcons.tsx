import { MdEmail, MdWhatsapp } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { app } from "@/lib/constants";

interface SocialIconsProps {
  size?: number;
}

export default function SocialIcons({ size = 25 }: SocialIconsProps) {
  return (
    <div className="flex gap-x-4 hidden md:flex">
      <a
        href={app.social_links.github}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="text-gray-800 dark:text-white hover:text-green-700 dark:hover:text-green-800" size={size} />
      </a>
      <a
        href={app.social_links.linkedin}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin className="text-gray-800 dark:text-white hover:text-green-700 dark:hover:text-green-800" size={size} />
      </a>
      <a
        href={app.social_links.email}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MdEmail className="text-gray-800 dark:text-white hover:text-green-700 dark:hover:text-green-800" size={size} />
      </a>
      <a
        href={app.social_links.whatsapp}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MdWhatsapp className="text-gray-800 dark:text-white hover:text-green-700 dark:hover:text-green-800" size={size} />
      </a>
    </div>
  );
}
