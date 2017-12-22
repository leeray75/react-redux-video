const webpack = require('webpack');
module.exports = [
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    },
    '__DEVTOOLS__': false
  }),
  /*
  new webpack.optimize.UglifyJsPlugin({
    comments: false, // remove comments
    compress: {
      unused: true,
      dead_code: true, // big one--strip code that will never execute
      warnings: false, // good for prod apps so users can't peek behind curtain
      drop_debugger: true,
      conditionals: true,
      evaluate: true,
      drop_console: true, // strips console statements
      sequences: true,
      booleans: true,
    }
  })
  */
];
