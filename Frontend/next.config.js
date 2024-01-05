/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'xsgames.co',
      'jumpstart-static.s3.amazonaws.com',
      'www.google.com',
      'pixlok.com',
    ],
  },
}

module.exports = nextConfig
