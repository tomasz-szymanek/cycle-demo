const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  plugins: [
    new webpack.NoErrorsPlugin(), // use it
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/most-adapter/) // for adaperts not installed
  ],

  module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }
  ],
},
}
