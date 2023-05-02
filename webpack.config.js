const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'sources/main-project/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/main-project/assets'),
    filename: 'apps-greeting.js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/main-project'),
    },
    port: 8080,
    compress: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',
      },
    ],
  },
};
