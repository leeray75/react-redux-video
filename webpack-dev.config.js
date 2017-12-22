let path = require("path");
let webpack = require("webpack");
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    "common": "./src/common",
    "video-redux": "./src/app/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/image-server/js"),
    publicPath: "/js/",
    filename: "[name].bundle.js"
  },
  plugins: [
    new CommonsChunkPlugin({
      // The order of this array matters
      names: ["common"],
      minChunks: 2
    })
  ],
  resolve: {
      modules: [ 'node_modules' ],
      extensions: ['.js','.jsx'],
      alias: {
        app: path.resolve(__dirname, "src/app"),
        npm: path.resolve(__dirname, 'node_modules'),
        amp: path.resolve(__dirname, "public/amp-premier"),
        styles: path.resolve(__dirname, "src/styles"),
        images: path.resolve(__dirname, "src/images")
      }
    },
    module: {
      rules:[
        { 
            test: /\.(js|jsx)$/, 
            loader: 'babel-loader', 
            exclude: /node_modules|amp-premier/,
            query:{
                presets: ['react', 'babel-preset-es2015']
            }
        },
        {
          test: /\.(scss|css)$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(svg|png|jpg|gif|woff|woff2|eot|ttf)$/,
          loader: 'url-loader'
        }
      ]
    },
    devtool: "source-map",
    devServer: {
      host: 'localhost',
      port: 8080
  }
};