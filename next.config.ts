import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "j4j4h3h02f.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
