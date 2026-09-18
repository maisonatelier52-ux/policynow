/** @type {import('next').NextConfig} */

const nextConfig = {
  allowedDevOrigins: ['172.20.10.10'],

  outputFileTracingIncludes: {
    '/*': ['./public/site/**/*'],
  },
};

module.exports = nextConfig;