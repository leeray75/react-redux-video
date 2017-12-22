const webpack = require('webpack');
const path = require('path');
const WebpackConfigs = require('./webpack-configs');

let configs = new WebpackConfigs(__dirname);


configs.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  )

module.exports = {
  entry: {
    'medscapetv': [path.resolve(__dirname, 'modules/index.js')]
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'medscape-tv.bundle.js',
  },

  devtool: "source-map", 
  module: configs.module,
  resolve: configs.resolve,
  context: __dirname, 
  plugins: configs.plugins,

  bail: true, //boolean
  // fail out on the first error instead of tolerating it.

  cache: false, // boolean
  // disable/enable caching

  watch: false, // boolean
  // enables watching

  node: {
    fs: "empty" // avoids error messages
  }

}

