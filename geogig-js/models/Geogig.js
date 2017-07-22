'use strict'

const Serve = require('./Serve'),
      Repo = require('./Repo');

module.exports = class Geogig {
  constructor(config){
    this._serve = new Serve(config);
    this._config = config;
  }
  get serve(){
    let serveInit = this._serve.serveInit;
    let serveStop = this._serve.serveStop;
    let serveConnect = this._serve.connect;

    return {
      init: serveInit.bind(this._serve),
      stop: serveStop.bind(this._serve),
      connect : serveConnect
    }
  }
  repo(ontions){
    return new Repo(ontions, this._config);
  }
}
