const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './app/index.js',
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle
    path: path.resolve(__dirname, 'dist'),
    // The output directory
    publicPath: '/dist/',
    // necessary for HMR to know where to load the hot update chunks
  },
  devServer: {
    hot: true,
    // enable HMR on the server
    contentBase: path.join(__dirname, '/'),
    // match the output path
    port: 9000,
    publicPath: '/dist/',
    // match the output `publicPath`
    public: '192.168.2.36',
    // Uncomment if regular HMR won't work.
    // watchOptions: {
    //     poll: true,
    // }
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
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
}
