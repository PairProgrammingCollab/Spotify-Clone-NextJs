const common = require('./webpack.common');

console.log("⁉️ Dev Webpack config loaded");

module.exports = (config) => {
  config.devtool = 'eval-source-map';
  config = common(config);
  config.module.rules.push({
    test: /\.debug\.js$/,
    use: 'raw-loader',
  });

  return config;
};