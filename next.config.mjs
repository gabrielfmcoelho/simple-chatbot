/** @type {import('next').NextConfig} */

import { config } from "dotenv";
import { hostname } from "os";

config();

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "https://dashboard.shadcnuikit.com" : undefined,
  env: {
    BASE_URL: process.env.BASE_URL,
    DASHBOARD_BASE_URL: process.env.DASHBOARD_BASE_URL
  },
  images: {
    domains: ["dashboard.shadcnuikit.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "https",
        hostname: "dashboard.shadcnuikit.com"
      }
    ]
  }
};

export default nextConfig;
