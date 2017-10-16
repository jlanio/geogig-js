const rp = require ('request-promise');
const Actions = require ('../models/repo/Repo.actions');
const api = require ('./web-api');

class ApiExtension  {
  constructor(params){
    this._params = params;
  };

  get repo (){
    let find = () => {
      return rp(this._params.uri  + '/repos', {json: true}).then(data => data.repos);
    };
    let findOne = (filter) => {
      return rp(this._params.uri + '/repos', {json: true})
        .then(data => {
          let filterRepo = data.repos.repo.filter(repo => repo.name === filter.name);
          if (!Array.isArray(filterRepo) || !filterRepo.length) {
             throw `The repository ${filter.name} is not exist`;
          }else{
            return new Actions(filterRepo)
          }
        }
      )
    }
    return{
      find: find,
      findOne: findOne
    }
  };
  get tasks(){
    let find = () => rp(this._params.uri + '/tasks', {json: true})
    let findOne = (tasksID) => rp(`${this._params.uri}/tasks/${tasksID}`, {json: true})
    return {
      find: find,
      findOne: findOne
    }
  }
}

module.exports = ApiExtension
