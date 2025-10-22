import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "example.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.incolmotos-yamaha.com.co",
      },
    ],
  },
};

module.exports = nextConfig;
