/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 👈 VERY IMPORTANT

  images: {
    unoptimized: true, // 👈 REQUIRED for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
    ],
  },
};

export default nextConfig;