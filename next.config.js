/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/planet/mercury",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
