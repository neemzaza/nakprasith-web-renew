/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.np.ac.th',
        port: '',
        pathname: '**'
      }
    ]
  }
}

module.exports = nextConfig
