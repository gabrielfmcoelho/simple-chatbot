/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  /* rewrites() {
    return {
      beforeFiles: [
        {
          source: "/dashboard",
          has: [
            {
              type: "host",
              value: "dashboard.shadcnuikit.com",
            },
          ],
          destination: "https://dashboard.shadcnuikit.com",
        },
      ],
    };
  }, */
  basePath: "/dashboard",
  assetPrefix: "https://dashboard.shadcnuikit.com",
};

export default nextConfig;
