module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: './app.js',

  output: {
    filename: 'app.js',
    path: __dirname + "/dist",
  },

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
