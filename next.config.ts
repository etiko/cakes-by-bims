import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 defaults to "attachment", which makes browsers download
    // optimized images instead of rendering them inline in <img> tags.
    contentDispositionType: "inline",
  },
};

export default nextConfig;
