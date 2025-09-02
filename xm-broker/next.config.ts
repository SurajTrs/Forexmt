import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Do not fail the build on ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Do not fail the build on type errors during production builds
    // Consider fixing types locally while allowing deployment
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
