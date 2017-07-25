'use strict'

const Serve = require('./Serve'),
      Repo = require('./Repo');

module.exports = class Geogig {
  constructor(config){
    this._serve = new Serve(config);
    this._config = config;
  }
  get serve(){
    return {
      init: this._serve.serveInit.bind(this._serve),
      stop: this._serve.serveStop.bind(this._serve),
      connect : this._serve.connect
    }
  }
  repo(options){
    return new Repo(options, this._config);
  }
}
