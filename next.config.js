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
  },
  // Configure asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  distDir: '.next',
  generateBuildId: async () => {
    return 'build'
  }
};

module.exports = nextConfig;
