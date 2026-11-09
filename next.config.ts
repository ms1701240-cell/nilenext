import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  /* config options here */
  experimental: {
    // @ts-ignore
    viewTransition: true,
    agentFeedback: true,
  },
  typescript: {
    ignoreBuildErrors: true, // دي هتخلي الـ build يعدي فورا من غير مشاكل الـ Types
  },
  eslint: {
    ignoreDuringBuilds: true,
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
