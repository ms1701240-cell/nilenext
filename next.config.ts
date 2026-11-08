import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // @ts-ignore
    viewTransition: true,
    agentFeedback: true,
  },
  cacheComponents: true,
  cacheLife:  {
    creators:{
      stale:60,
      revalidate: 300,
       expire: 3600,
    }
  },
  partialPrefetching: true,
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
