/** @type {import('next').NextConfig} */
const nextConfig = {
  // تفعيل Static Export للأداء
  output: 'export',
  
  // تحسينات الأداء
  compress: true,
  poweredByHeader: false,
  
  // تحسين الصور
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  
  // تقليل حجم JavaScript
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // تقليل حجم الـ bundle
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // تقسيم المكتبات الكبيرة
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )?.[1];
                return `npm.${packageName?.replace('@', '')}`;
              },
              priority: 10,
            },
            // تقسيم المكونات
            commons: {
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
        minimize: true,
      };
    }
    
    return config;
  },
  
  // Headers للأداء
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
