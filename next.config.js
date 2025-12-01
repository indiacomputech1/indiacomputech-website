/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // For static export
    },
    // Uncomment for static export
    // output: 'export',
    // trailingSlash: true,
}

module.exports = nextConfig