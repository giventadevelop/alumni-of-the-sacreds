/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable new features in Next.js 15
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', '@heroicons/react', 'lucide-react'],
    optimizeCss: true,
    webpackBuildWorker: true,
    turbo: {
      rules: {
        // Opt-in to our new Turbopack-powered Next.js development server
        loaders: ['@next/font/google'],
      },
    },
  },
  // Configure asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

module.exports = nextConfig;
