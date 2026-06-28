import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pozn.: 'output: standalone' je pre self-hosting/Docker. Na Verceli sa
  // nepoužíva (Vercel rieši build sám), preto je odstránené.

  // Security: Remove X-Powered-By header
  poweredByHeader: false,

  // Performance: Enable gzip compression
  compress: true,

  // Security headers - Applied to all routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Enable XSS filter (legacy browsers)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Restrict browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Enforce HTTPS (enable in production)
          // Uncomment below for production with HTTPS
          // {
          //   key: 'Strict-Transport-Security',
          //   value: 'max-age=31536000; includeSubDomains; preload',
          // },
          // Note: CSP with nonce is now handled in middleware.ts for 2026 standards
          // This provides per-request nonce generation without unsafe-inline/unsafe-eval
        ],
      },
    ];
  },
};

export default nextConfig;
