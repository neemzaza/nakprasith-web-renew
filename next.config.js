/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.np.ac.th',
        port: '',
        pathname: '**'
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  
}

module.exports = nextConfig
