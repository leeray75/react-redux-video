const path = require('path');
module.exports = (__dirname) => {
  return {
    modules: [ 'node_modules', 'modules' ],
    extensions: ['.js', '.jsx'],
    alias: {
      amp:            path.resolve(__dirname, 'amp-premier/amp.premier'),
      x2js:           path.resolve(__dirname, 'ext_libraries/parsing/x2js/xml2json.min.js'),
      // component styles
      baseStyle:      path.resolve(__dirname, 'assets/css/base.scss'),
      mainStyle:      path.resolve(__dirname, 'assets/css/main.scss')
    }
  };
};
