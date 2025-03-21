/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/singh-portfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
