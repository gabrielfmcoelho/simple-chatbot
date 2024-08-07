/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd
    ? "https://dashboard.shadcnuikit.com/dashboard"
    : undefined,
};

export default nextConfig;
