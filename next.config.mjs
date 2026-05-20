/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
