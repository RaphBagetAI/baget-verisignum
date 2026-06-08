/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["better-auth", "pg"],
  },
};

export default nextConfig;
