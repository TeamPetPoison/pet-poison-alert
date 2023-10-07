const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // TODO: remove this when we have a proper image pipeline
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            // TODO: any way to get this path from the package.json or something?
            from: path.resolve(
              path.dirname(require.resolve('leaflet', { paths: [__dirname] })),
              'images',
            ),
            to: path.resolve(__dirname, 'public', 'leaflet', 'images'),
          },
        ],
      }),
    );
    return config;
  },
};
module.exports = nextConfig;
