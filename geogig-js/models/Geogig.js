'use strict'

const Serve = require('./Serve');

module.exports = class Geogig {
  constructor(config){
    this._serve = new Serve(config);
  }
  get serve(){
    let serveInit = this._serve.serveInit;
    let serveStop = this._serve.serveStop;

    return {
      init: serveInit.bind(this._serve),
      stop: serveStop.bind(this._serve)
    }
  }
}
