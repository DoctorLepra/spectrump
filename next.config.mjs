/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce React Strict Mode for detecting side effects and ensuring purity
  reactStrictMode: true,

  // Disable 'X-Powered-By: Next.js' header for production security hardening
  poweredByHeader: false,

  // Enable HTTP response compression (Gzip / Brotli)
  compress: true,

  // Image Optimization Configuration
  images: {
    // Prioritize high-efficiency modern image formats
    formats: ['image/avif', 'image/webp'],

    // Allow SVGs with restricted security sandboxing
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Remote patterns for placeholder team avatars, solar illustrations, and CDN assets
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'improinde.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
