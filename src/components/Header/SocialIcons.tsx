import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import personalConfig from "@/utils/personalConfig";

export default function SocialIcons() {
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
