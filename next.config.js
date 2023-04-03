/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}` || 'localhost:3000',
  },
};


module.exports = nextConfig
