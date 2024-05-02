/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SITE_URL: process.env.SITE_URL || "",
  },
};

export default nextConfig;
