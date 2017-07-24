'use strict'

const api = require('../services/web-api');

module.exports = class Actions {
  constructor(repo){
    this._repo = repo[0]
    this._Adress = this._repo.href.replace('.json','/');
  }
  log(options){
    return api.Log({Adress: this._Adress }, options);
  }
  get geopackage (){
    return {
      import: api.GeopackageImport.bind(this),
      export: api.GeopackageExport.bind(this)
    }
  }
  get beginTransaction() {
    return rp(`${this._Adress}beginTransaction.json`,{json: true}).then(e => JSON.parse(e).response);
  }
  endTransaction(params, options) {
    return rp(`${this._Adress}${api.endTransaction(params, options)}`,{json: true});
  }
}
