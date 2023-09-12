/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    microSiteId: process.env.MICRO_SITE_ID,
    brandsApiUrl: process.env.BRANDS_API_URL,
  },
  images: {
    unoptimized: true,
    domains: ['https://bucket-boostjuice-stack.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
