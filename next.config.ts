import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: this site is deployed to plain PHP/Apache hosting with
  // no Node.js server, so there's no image-optimization endpoint or SSR.
  output: "export",
  images: {
    // Next.js 16 defaults to "attachment", which makes browsers download
    // optimized images instead of rendering them inline in <img> tags.
    contentDispositionType: "inline",
    // Hero.tsx renders images at quality={90}; Next.js 16 requires opting in
    // to any non-default quality values used across the app.
    qualities: [75, 90],
    // No image-optimization server is available on static export hosts;
    // serve the original files as-is.
    unoptimized: true,
  },
};

export default nextConfig;
