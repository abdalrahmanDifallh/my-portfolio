import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // أضف هذا السطر
  },
  /* config options here */
};

export default nextConfig;