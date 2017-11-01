const rp = require ('request-promise')
const api = require ('./web-api')
const Actions = require ('../models/repo/Repo.actions')

class ApiExtension  {
  constructor(params = {uri: null}){
    this._uri = params.uri;
  };

  get repos (){

    let findAll = () => rp(`${this._uri}/repos`, {json: true}).then(data => data.repos);
    let findOne = (filter) => {
      let fullUri = `${this._uri}/repos/${filter.name}/`
      return rp(fullUri, {json: true}).then(data => new Actions({uri: fullUri}))
    }

    return{
      findAll: findAll,
      findOne: findOne
    }
  };
  get tasks(){
    
    let findAll = () => rp(`${this._uri}/tasks`, {json: true})
    let findOne = (tasksID) => rp(`${this._uri}/tasks/${tasksID}`, {json: true})

    return {
      findAll: findAll,
      findOne: findOne
    }
  }
}

module.exports = ApiExtension
