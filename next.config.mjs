/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "https://dashboard.shadcnuikit.com" : undefined,
  env: {
    BASE_URL: process.env.NODE_ENV,
  },
};

export default nextConfig;
