/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Jeff\'s Repo',
    description: 'Jeff\'s official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    contactUrl: 'https://github.com/jeff-bracewell/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
