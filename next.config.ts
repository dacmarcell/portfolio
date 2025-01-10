import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "og-screenshots-prod.s3.amazonaws.com" },
    ],
  },
};

export default nextConfig;
