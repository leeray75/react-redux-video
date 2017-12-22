const _resolve = require('./_resolve'),
      _module = require('./_module'),
     _plugins = require('./_plugins');
class WebpackConfigs {
  constructor(__dirname) {
    this.module = _module(__dirname);
    this.resolve = _resolve(__dirname);
    this.plugins = _plugins;
  }
}

module.exports = WebpackConfigs;
