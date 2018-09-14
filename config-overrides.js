module.exports = config => {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-import'),
      require('postcss-preset-env')({
        stage: 1,
      }),
      require('postcss-nested'),
      require('autoprefixer'),
    ]
  });

  return config;
};