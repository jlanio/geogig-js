const Utils = require ('../services/Utils');
const ApiExtension = require('../services/web-api.extension');

class Tools  {
  constructor(params, config){
    this._params = params;
    this._config = config;
    this._ApiExtension = new ApiExtension(params);
  }
  get _apiEx (){return this._ApiExtension};

  get repos(){
    let find = () => this._apiEx.repo.find();
    let findOne = (filter) => this._apiEx.repo.findOne(filter);

    return {
      find: find,
      findOne: findOne
    }
  };
  get tasks(){
    let find = () => this._apiEx.tasks.find();
    let findOne = (filter) => this._apiEx.tasks.findOne(filter);

    return {
      find: find,
      findOne: findOne
    }
  }
  get init(){
    return Utils.initRepo(this._params, this._config);
  };
}
module.exports = Tools
