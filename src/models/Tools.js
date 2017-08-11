const Utils = require ('../services/Utils');
const ApiExtension = require('../services/web-api.extension');

class Repo  {

  constructor(params, config){
    this._params = params;
    this._config = config;
    this._ApiExtension = new ApiExtension(params);
  }
  get repos(){
    let action = this._ApiExtension;

    let find = () => action.repo.find();
    let findOne = (filter) => action.repo.findOne(filter);
    return {
      find: find,
      findOne: findOne
    }
  };
  get tasks(){
    let action = this._ApiExtension;

    let find = () => action.tasks.find();
    let findOne = (filter) => action.tasks.findOne(filter);
    return {
      find: find,
      findOne: findOne
    }
  }
  get init(){
    return Utils.initRepo(this._params, this._config);
  };
}
module.exports = Repo
