const webpack = require('webpack');
const common = require('./webpack.common');

console.log("✅ Production Webpack config loaded");

module.exports = (config) => {
  config = common(config);
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.PRODUCTION_BUILD': JSON.stringify(true),
    })
  );

  return config;
};