/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour l'export statique
  output: 'export',
  trailingSlash: true,
  
  // Optimisations de performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },

  // Compression et optimisation des images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optimisation du bundle
  webpack: (config, { dev, isServer }) => {
    // Optimisations de production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    return config;
  },

  // Headers de performance et sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Compression
  compress: true,

  // PWA et performance
  poweredByHeader: false,

  // Configuration du tracing pour éviter les avertissements
  outputFileTracingRoot: __dirname,

  // Redirections pour SEO
  async redirects() {
    return [
      // Pages de rénovation → Services équivalents
      {
        source: '/renovation-strasbourg',
        destination: '/services/maconnerie-legere',
        permanent: true,
      },
      {
        source: '/renovation-mulhouse',
        destination: '/services/maconnerie-legere',
        permanent: true,
      },
      {
        source: '/renovation-colmar',
        destination: '/services/maconnerie-legere',
        permanent: true,
      },
      // Page réservation → Contact
      {
        source: '/reservation',
        destination: '/contact',
        permanent: true,
      },
      // Ancien lien existant
      {
        source: '/travaux',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;