/** @type {import('next').NextConfig} */
const apiUrl = process.env.API_URL;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.kbc.co.ke",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/api/:path*",
          destination: `${apiUrl}/:path*/`,
        },
      ],
    };
  },
};

export default nextConfig;
