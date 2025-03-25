/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
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
};

module.exports = nextConfig;
