const rp = require('request-promise');
const api = require('./web-api');
const Actions = require('../models/repo/Repo.actions');

class ApiExtension {
  constructor(params = { uri: null }) {
    this._uri = params.uri;
  }

  get repos() {

    let findAll = () => rp({ uri: `${this._uri}/repos.json`, json: true }).then(data => data.repos);
    let findOne = filter => {
      let fullUri = { uri: `${this._uri}/repos/${filter.name}/`, json: true };
      return rp(fullUri).then(data => new Actions({ uri: fullUri }));
    };
    let init = params => rp.put({ uri: `${this._uri}/repos/${params.name}/init.json`, json: true });
    let rename = params => '{}';
    let forDelete = params => {
      let fullUri = `${this._uri}/repos/${params.name}`;
      return rp({ uri: `${fullUri}/delete.json`, json: true }).then(r => rp.delete({ uri: `${fullUri}?token=${r.response.token}`, json: true }));
    };

    return {
      findAll: findAll,
      findOne: findOne,
      init: init,
      rename: rename,
      delete: forDelete
    };
  }
  get tasks() {

    let findAll = () => rp(`${this._uri}/tasks`, { json: true });
    let findOne = tasksID => rp(`${this._uri}/tasks/${tasksID}.json`, { json: true });

    return {
      findAll: findAll,
      findOne: findOne
    };
  }
}

module.exports = ApiExtension;