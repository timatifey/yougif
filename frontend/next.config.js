/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  },
  swcMinify: true,
}

module.exports = nextConfig
