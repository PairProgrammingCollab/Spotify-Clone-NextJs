module.exports = (config) => {
  config.module.rules.push({
    test: /\.txt$/,
    use: 'raw-loader',
  });

  return config;
};