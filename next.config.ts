import type { NextConfig } from "next";

// Web comercial 100% estática (Cloudflare Pages: build "npm run build", salida "out").
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
