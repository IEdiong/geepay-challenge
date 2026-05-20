/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

if (!process.env.VERCEL) {
  import('@opennextjs/cloudflare').then((m) =>
    m.initOpenNextCloudflareForDev()
  );
}
