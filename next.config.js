/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    DOMAIN: process.env.DOMAIN,
    PROTOCOL: process.env.PROTOCOL,
    PORT: process.env.PORT,

    BASE_PATH: process.env.BASE_URL,
    API_PATH: process.env.API_URL,
  },
}

module.exports = nextConfig
