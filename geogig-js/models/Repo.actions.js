'use strict'

const rp = require('request-promise');

module.exports = class Actions {
  constructor(repo){
    this._repo = repo
  }
  get commit(){
    return this._repo[0].href;
  }

}
