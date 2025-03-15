/** @type {import('next').NextConfig} */

import { config } from "dotenv";

config();

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProduction ? process.env.DASHBOARD_BASE_URL : undefined,
  env: {
    BASE_URL: process.env.BASE_URL,
    DASHBOARD_BASE_URL: process.env.DASHBOARD_BASE_URL,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
    GA_KEY: process.env.GA_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "https",
        hostname: "dashboard.shadcnuikit.com"
      },
      {
        protocol: "https",
        hostname: "shadcnuikit.com"
      }
    ]
  }
};

export default nextConfig;
