'use strict'

const Utils = require('../services/Utils');

module.exports = class Repo  {
  constructor(options, config){
    this._options = options;
    this._config = config;
  }
  get init(){
    return Utils.initRepo(this._options, this._config);
  }
}
