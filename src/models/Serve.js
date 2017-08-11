const Utils = require ('../services/Utils');
const Tools = require ('./Tools');

class Serve{
  constructor(config= {uri: null}){
    this._config = config;
  }
  serveInit(){
    return  Utils.start(this._config);
  }
  serveStop(){
    return Utils.stop(this._config);
  }
  connect(uri = {uri: null}){
    return new Tools(uri);
  }
}

module.exports = Serve
