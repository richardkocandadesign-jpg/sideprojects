import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.walkinggreenflag.com" }],
        destination: "https://walkinggreenflag.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
