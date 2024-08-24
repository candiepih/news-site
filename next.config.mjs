/** @type {import('next').NextConfig} */
const apiUrl = process.env.API_URL;

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/proxy-api/:path*",
          destination: `${apiUrl}/:path*/`,
        },
      ],
    };
  },
};

export default nextConfig;
