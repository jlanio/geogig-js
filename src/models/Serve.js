import rp from 'request-promise';
import Utils from '../services/Utils';
import Repos from './Repo';

class Serve{
  constructor(config){
    this._config = config;
  }
  serveInit(){
    return  Utils.start(this._config);
  }
  serveStop(){
    return Utils.stop(this._config);
  }
  connect(uriAdress){
    return new Repos(Object.assign({}, uriAdress, {json: true}));
  }
}

export default Serve
