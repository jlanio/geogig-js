const Tools = require ('./Tools');
const Utils = require ('../services/utils');

class Geogig {
  constructor(config = {bin:null, cwd:null}){
    this._config = config;
  }
  get serve(){

    return {
      init: Utils.start(this._config),
      stop: Utils.stop,
      connect: (uri = {uri: null}) => new Tools(uri, this._config)
    }
  }
  repo(params){

    return {
      init: Utils.initRepo(params, this._config),
      clone: Utils.cloneRepo(params, this._config)
    }
  }
}

module.exports = Geogig
