'use strict'

const rp = require('request-promise'),
      Actions = require('./Repo.actions');

module.exports = class Repos  {
  constructor(uri){
    this._uri = uri
  }
  get repos(){
    let find = () => rp(this._uri).then(data => data.repos.repo[0]);
    let findOne = (filter) => rp(this._uri).then(data =>
       new Actions(data.repos.repo.filter(repo => repo.name === filter.name))
    );
    return {
      find: find,
      findOne: findOne
    }
  }

}
