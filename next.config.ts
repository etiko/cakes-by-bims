import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 defaults to "attachment", which makes browsers download
    // optimized images instead of rendering them inline in <img> tags.
    contentDispositionType: "inline",
    // Hero.tsx renders images at quality={90}; Next.js 16 requires opting in
    // to any non-default quality values used across the app.
    qualities: [75, 90],
  },
};

export default nextConfig;
