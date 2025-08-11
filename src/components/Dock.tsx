"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";

import { Dock, DockIcon } from "./magicui/dock";
import FadeIn from "./motion/FadeIn";
import { app } from "@/lib/constants";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { useIntroContext } from "@/contexts/IntroContext";

export default function BottomDock() {
  const { isIntroFinished } = useIntroContext();

  return isIntroFinished ? (
    <FadeIn>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2">
        <Dock direction="middle">
          <DockIcon>
            <a
              href={app.social_links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="text-gray-800 dark:text-white hover:text-green-700 dark:hover:text-green-800" size={25} />
            </a>
          </DockIcon>
          <DockIcon>
            <a
              href={app.social_links.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="text-gray-800 dark:text-white hover:text-green-700 dark:hover:text-green-800" size={25} />
            </a>
          </DockIcon>
          <DockIcon>
            <a
              href={app.social_links.email}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MdEmail className="text-gray-800 dark:text-white hover:text-green-700 dark:hover:text-green-800" size={25} />
            </a>
          </DockIcon>
          <DockIcon>
            {" "}
            <a
              href={app.social_links.whatsapp}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MdWhatsapp className="text-gray-800 dark:text-white hover:text-green-700 dark:hover:text-green-800" size={25} />
            </a>
          </DockIcon>
        </Dock>
      </div>
    </FadeIn>
  ) : null;
}
