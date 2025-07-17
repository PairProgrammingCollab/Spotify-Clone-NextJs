import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config, options) => {
    const { dev } = options;
    const customConfig = dev
      ? require('./webpack/webpack.dev')
      : require('./webpack/webpack.prod');

    return customConfig(config);
  },
};

export default nextConfig;
