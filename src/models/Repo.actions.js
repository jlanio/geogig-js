const api = require ('../services/web-api');


class Actions {
  constructor(repo){
    this._repo = repo[0];
    this._Adress = this._repo.href.replace('.json','/');
    this.joinParams = (params={}) => Object.assign({Adress: this._Adress}, params);
  }
  log(options){
    return api.Log(this.joinParams(), options)
  }
  get geopackage (){
    return {
      import: (params) => api.Import(this.joinParams(params)),
      export: (params) => api.Export(this.joinParams(params))
    }
  }
  export(params, options){
    return api.Export(this.joinParams(params));
  }
  get beginTransaction() {
    return api.beginTransaction(this.joinParams());
  }
  endTransaction(params, options) {
    return api.endTransaction(this.joinParams(params), options);
  }
}
module.exports = Actions
