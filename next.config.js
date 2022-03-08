const withPWA = require("next-pwa");

/**
 * @type {import('next').NextConfig}
 */
 module.exports = withPWA({
    /* config options here */
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development'
      },
    });

  
