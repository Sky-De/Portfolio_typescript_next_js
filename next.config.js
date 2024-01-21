// next.config.js

/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

module.exports = withPWA({
  // other congigs
  reactStrictMode: false,
  // disable: process.env.NODE_ENV === "development",
  images: { domains: ["res.cloudinary.com"] },
});
