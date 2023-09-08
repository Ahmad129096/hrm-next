/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // webpackBuildWorker: false,
    // serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
