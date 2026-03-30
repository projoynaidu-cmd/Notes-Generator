// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['example.com'], // specify allowed image domains
    },
    async redirects() {
        return [
            {
                source: '/old-route',
                destination: '/new-route',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;