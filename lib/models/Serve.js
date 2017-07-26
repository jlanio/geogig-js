'use strict'

const rp = require('request-promise'),
      Utils = require('../services/Utils'),
      Repos = require('./Repo');

module.exports = class Serve{
  constructor(config){
    this._config = config;
  }
  serveInit(){
    return  Utils.start(this._config);
  }
  serveStop(){
    return Utils.stop(this._config);
  }
  connect(uriAdress){
    return new Repos(Object.assign({}, uriAdress, {json: true}));
  }
}
