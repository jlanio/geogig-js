const Serve = require ('./Serve');
const Tools = require ('./Tools');

class Geogig {
  constructor(config = {bin:null, cwd:null}){
    this._serve = new Serve(config);
  }
  get serve(){
    let serve = this._serve;

    return {
      init: serve.serveInit.bind(serve),
      stop: serve.serveStop.bind(serve),
      connect: serve.connect
    }
  }
  repo(params){
    let config = this._serve._config;
    let repo = new Tools(params, config);

    return {
      init: repo.init
    }
  }
}

module.exports = Geogig
