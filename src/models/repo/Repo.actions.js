const api = require ('../../services/web-api');

class Actions {
  constructor(Adress){
    this._api = new api(Adress)
  }

  get geopackage (){
    return {
      import: (params) => this._api.Import(params),
      export: (params) => this._api.Export(params)
    }
  }
  lsTree() {
    return this._api.LsTree().then(result => result.response)
    // return api.LsTree(this._params.set()).then(result => result.response);
  }
  beginTransaction() {
    return this._api.beginTransaction().then(result => result.response);
  }
  log(params){
    return this._api.Log(params).then(result => result.response);
    // return api.Log(this.joinParams(), options).then(result => result.response);
  }
  export(params, options){
    return this._api.Export(params);
  }
  endTransaction(params, options) {
    return this._api.endTransaction(params, options);
  }
}

module.exports = Actions
