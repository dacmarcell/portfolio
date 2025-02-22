import { MdEmail, MdWhatsapp } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { app } from "@/lib/constants";

interface SocialIconsProps {
  size?: number;
}

export default function SocialIcons({ size = 25 }: SocialIconsProps) {
  return (
    <div className="flex gap-x-4">
      <a
        href={app.social_links.github}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="text-white hover:text-green-800" size={size} />
      </a>
      <a
        href={app.social_links.linkedin}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin className="text-white hover:text-green-800" size={size} />
      </a>
      <a
        href={app.social_links.email}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MdEmail className="text-white hover:text-green-800" size={size} />
      </a>
      <a
        href={app.social_links.whatsapp}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MdWhatsapp className="text-white hover:text-green-800" size={size} />
      </a>
    </div>
  );
}
