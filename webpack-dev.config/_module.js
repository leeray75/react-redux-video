const path = require('path');
module.exports = (__dirname) => {
  const rules = [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules|amp.premier/,
        include: [
          path.resolve(__dirname, 'modules')
        ],
        query:{
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'modules')
        ],
        query:{
          presets: ['react', 'es2015']
        },
        exclude: /node_modules|amp.premier/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: [
          path.resolve(__dirname, 'assets/css'),
          path.resolve(__dirname, 'amp-premier')
        ],
        exclude: /public/
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'assets/css')
        ],
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|png|jpg|gif|woff|woff2|eot|ttf)$/,
        loader: 'url-loader'
      },
    ]; // rules
    return {
      rules: rules
    };
};
