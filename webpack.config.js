const path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    // the output bundle
    path: path.resolve(__dirname, 'dist'),
    // The output directory
    publicPath: '/dist/',
    // necessary for HMR to know where to load the hot update chunks
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
  ],
}
