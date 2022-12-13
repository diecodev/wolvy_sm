/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  redirects: async () => {
    return [
      {
        source: '/instagram',
        destination: 'https://instagram.com/wolvy_sm',
        permanent: true
      },
      {
        source: '/whatsapp',
        destination: 'https://api.whatsapp.com/send/?phone=573102629919&text&type=phone_number&app_absent=0'
      }
    ]
  }
}

module.exports = nextConfig
