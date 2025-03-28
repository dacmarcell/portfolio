/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { GoLinkExternal } from "react-icons/go";

import ScreenshotBox from "./ScreenshotBox";
import env from "@/lib/env";
import { Project } from "@/interfaces/projects";

interface PreviewButtonProps {
  project: Project;
}

const PreviewButton = ({ project }: PreviewButtonProps) => {
  const [siteScreenshot, setSiteScreenshot] = useState<string | null>(null);
  const [isSiteScreenshotBoxOpen, setIsSiteScreenshotBoxOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPreviewData = async () => {
    if (siteScreenshot) return;

    try {
      setIsLoading(true);
      const encodedURI = encodeURIComponent(project.url);
      const response = await fetch(
        `https://opengraph.io/api/1.1/screenshot/${encodedURI}?accept_lang=auto&quality=80&dimensions=md&app_id=${env.open_graph_api_key}`
      );

      const data: { message: string; screenshotUrl: string } =
        await response.json();

      setSiteScreenshot(data.screenshotUrl);
    } catch (_) {
      setError("Failed to fetch site screenshot");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMouseEnter = async () => {
    if (!isSiteScreenshotBoxOpen) {
      setIsSiteScreenshotBoxOpen(true);

      if (!siteScreenshot) {
        await fetchPreviewData();
      }
    }
  };

  return (
    <div className="flex justify-center gap-4 mt-6 absolute left-1/2 transform -translate-x-1/2">
      <a
        target="_blank"
        href={project.url}
        onMouseEnter={handleMouseEnter}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <span>Saiba mais</span>
        <GoLinkExternal className="ml-1" />
      </a>
      {isSiteScreenshotBoxOpen ? (
        <ScreenshotBox
          error={error}
          isLoading={isLoading}
          siteScreenshot={siteScreenshot}
          isSiteScreenshotBoxOpen={isSiteScreenshotBoxOpen}
          setIsSiteScreenshotBoxOpen={setIsSiteScreenshotBoxOpen}
        />
      ) : null}
    </div>
  );
};

export default PreviewButton;
