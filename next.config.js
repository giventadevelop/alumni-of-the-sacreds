/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  transpilePackages: ['cmdk'],
  async headers() {
    return [
      {
        source: '/ads.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
        ],
      },
    ];
  },
  // Enable new features in Next.js 15
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', '@heroicons/react', 'lucide-react'],
    optimizeCss: true,
    appDir: true,
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
