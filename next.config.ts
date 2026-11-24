import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Use standalone output for Docker/Coolify, standard output on Vercel */
  ...(process.env.VERCEL ? {} : { output: "standalone" }),
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
