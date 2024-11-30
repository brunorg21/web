import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/countries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
