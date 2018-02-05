const api = require ('../../services/web-api');

class Actions {
  constructor(Adress){
    this._api = new api(Adress)
  }

  get geopackage (){
    return {
      import: (params, options) => this._api.Import(params, options),
      export: (params, options) => this._api.Export(params, options)
    }
  }
  lsTree() {
    return this._api.LsTree().then(result => result.response)
  }
  beginTransaction() {
    return this._api.beginTransaction().then(result => result.response);
  }
  log(params){
    return this._api.Log(params).then(result => result.response);
  }
  export(params, options){
    return this._api.Export(params, options);
  }
  endTransaction(params, options) {
    return this._api.endTransaction(params, options);
  }
  diff(options) {
    return this._api.Diff(options);
  }
  remote(options) {
    return this._api.Remote(options);
  }

  featureDiff(params, options) {
    return this._api.FeatureDiff(params, options);
  }
  add(params){
    return this._api.Add(params);
  }
  commit(params, options = {}){
    return this._api.Commit(params, options);
  }
}

module.exports = Actions
