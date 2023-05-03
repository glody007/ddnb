/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'www.generationcable.net',
      'warehouse.canal-overseas.com',
      'encrypted-tbn0.gstatic.com'
    ],
  },
}

module.exports = nextConfig
