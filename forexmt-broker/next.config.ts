import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  eslint: {
    // Do not fail the build on ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Do not fail the build on type errors during production builds
    ignoreBuildErrors: true,
  },
  // Output configuration
  output: 'standalone',
  outputFileTracingRoot: __dirname,
  // Configure images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
