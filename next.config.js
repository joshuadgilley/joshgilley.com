/** @type {import('next').NextConfig} */
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// })

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
  }
};

module.exports = nextConfig;
