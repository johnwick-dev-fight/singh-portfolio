/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/singh-portfolio' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  swcMinify: true,
};

module.exports = nextConfig;
