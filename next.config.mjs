/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "dashboard.shadcnuikit.com",
            },
          ],
          destination: "/app/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
