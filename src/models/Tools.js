const ApiExtension = require('../services/web-api.extension');

class Tools  {
  constructor(params, config){
    this._apiEx = new ApiExtension(params);
  }

  get repos(){
    return {
      find: () => this._apiEx.repo.find(),
      findOne: (filter) => this._apiEx.repo.findOne(filter)
    }
  };
  get tasks(){
    return {
      find: () => this._apiEx.tasks.find(),
      findOne: (filter) => this._apiEx.tasks.findOne(filter)
    }
  }
}
module.exports = Tools
