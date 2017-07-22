'use strict'

const rp = require('request-promise'),
      api = require('../helpers/web-api');

module.exports = class Actions {
  constructor(repo){
    this._repo = repo[0]
    this._Adress = this._repo.href.replace('.json','/');
  }
  get log(){
    return this._Adress;
  }
  get beginTransaction() {
    return rp(`${this._Adress}beginTransaction.json`,{json: true}).then(e => JSON.parse(e).response);
  }
  endTransaction(params, options) {
    return rp(`${this._Adress}${api.endTransaction(params, options)}`,{json: true});
  }
}
