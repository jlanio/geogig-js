'use strict'

const rp = require('request-promise'),
      Utils = require('../services/Utils')

module.exports = class Serve{
  constructor(config){
    this._config = config;
  }
  serveInit(){
    return  Utils.start(this._config);
  }
  serveStop(){
    return Utils.stop(this._config);
  }
  connect(){
    return rp({uri:this._serverAddress, json: true}).then(repos => {
      this._Repository = repos;
      return this;
    });
  }
  get repos () {
    let filter = (filter) => {
      this._Repository.repos.repo.filter(repos => filter)
    };
    return {
      filter:filter
    }
  }
  getRepo (filter) {
    return

  }
  get RepositoryLog(){
    return rp({uri:this._serverAddress + '/Acre/log.json', json: true}).then(log => log)

  }
}
