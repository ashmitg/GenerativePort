/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  
  experimental: { serverComponentsExternalPackages: [ '@firebase' ] }
};

export default nextConfig;