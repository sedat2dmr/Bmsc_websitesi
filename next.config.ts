import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "**.fal.media",
      },
      {
        protocol: "https",
        hostname: "fal.media",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "**.huggingface.co",
      },
      {
        protocol: "https",
        hostname: "huggingface.co",
      },
    ],
    // Allow local /public images without domain
    unoptimized: false,
  },
};

export default nextConfig;
