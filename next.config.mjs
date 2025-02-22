/** @type {import('next').NextConfig} */

import { config } from "dotenv";

config();

const nextConfig = {
  assetPrefix: "https://dashboard.shadcnuikit.com",
  env: {
    BASE_URL: process.env.BASE_URL,
    DASHBOARD_BASE_URL: process.env.DASHBOARD_BASE_URL
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
