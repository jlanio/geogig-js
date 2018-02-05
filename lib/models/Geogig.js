const Utils = require('../services/helpers/utils');
const webApiExt = require('../services/web-api.extension');

class Geogig {
  constructor(config = { bin: null, cwd: null }) {
    this._config = config;
  }
  get serve() {

    return {
      start: Utils.start(this._config),
      stop: Utils.stop,
      connect: (params = { uri: null }) => new webApiExt(params, this._config)
    };
  }
  repo(params) {

    return {
      init: Utils.initRepo(params, this._config),
      clone: Utils.cloneRepo(params, this._config)
    };
  }
}

module.exports = Geogig;