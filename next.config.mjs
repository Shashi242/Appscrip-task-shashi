/** @type {import('next').NextConfig} */
const { withNetlify } = require('@netlify/next');
const nextConfig = withNetlify({
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
});

export default nextConfig;