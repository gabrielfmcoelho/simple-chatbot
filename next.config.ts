import type { NextConfig } from "next";
import { config } from "dotenv";

config();

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'standalone',
  //assetPrefix: isProduction ? "https://dashboard.shadcnuikit.com" : undefined,
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
