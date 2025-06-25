import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProduction ? "https://dashboard.shadcnuikit.com" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "https",
        hostname: "bundui-images.netlify.app"
      }
    ]
  }
};

export default nextConfig;
