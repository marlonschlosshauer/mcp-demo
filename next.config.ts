import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://images.ctfassets.net/**")],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/chat",
      permanent: true,
    },
  ],
};

export default nextConfig;
