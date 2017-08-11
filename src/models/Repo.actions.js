const api = require ('../services/web-api');

class Actions {
  constructor(repo){
    this._repo = repo[0];
    this._Adress = this._repo.href.replace('.json','/');
    this.joinParams = (params={}) => Object.assign({Adress: this._Adress}, params);
  }
  get _params (){return {set: this.joinParams}};

  get geopackage (){
    return {
      import: (params) => api.Import(this._params.set(params)),
      export: (params) => api.Export(this._params.set(params))
    }
  }
  get beginTransaction() {
    return api.beginTransaction(this._params.set(params));
  }

  log(options){
    return api.Log(this.joinParams(), options)
  }
  export(params, options){
    return api.Export(this._params.set(params));
  }
  endTransaction(params, options) {
    return api.endTransaction(this._params.set(params), options);
  }
}

module.exports = Actions
