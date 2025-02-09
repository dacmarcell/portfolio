import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { config } from "@/utils/constants";

export default function SocialIcons() {
  return (
    <div className="flex gap-x-4">
      <a
        href={config.social_links.github}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="text-white hover:text-green-800" />
      </a>
      <a
        href={config.social_links.linkedin}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin className="text-white hover:text-green-800" />
      </a>
      <a
        href={config.social_links.email}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MdEmail className="text-white hover:text-green-800" />
      </a>
    </div>
  );
}
