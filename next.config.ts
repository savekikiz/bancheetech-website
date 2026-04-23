import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/claude-101-workshop",
        destination:
          "https://www.notion.so/langchain-introduction/Workshop-Claude-101-34bcb6948c72803da552de66a780a156?source=copy_link",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
