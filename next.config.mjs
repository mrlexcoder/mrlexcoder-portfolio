/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/blog/:slug", destination: "/resources", permanent: true },
    ];
  },
};

export default nextConfig;
