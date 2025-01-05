import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['gateway.pinata.cloud', 'via.placeholder.com'], // Add this line to allow images from this domain
  },
};

export default nextConfig;
