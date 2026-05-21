/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',
    devIndicators: false,
    turbopack: {
        root: '.',
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            { hostname: 'avatars.githubusercontent.com' },
        ],
    },
};

export default nextConfig;
