/** @type {import('next').NextConfig} */
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
  assetPrefix: "https://dashboard.shadcnuikit.com",
};

export default nextConfig;
