import rp from 'request-promise';
import Actions from './Repo.actions';
import Utils from '../services/Utils';

class Repo  {

  constructor(params, config){
    this._params = params;
    this._config = config;
  }
  get repos(){
    let find = () => rp(this._params.uri).then(data => data.repos.repo[0]);
    let findOne = (filter) => rp(this._params.uri).then(data =>
       new Actions(data.repos.repo.filter(repo => repo.name === filter.name))
    );
    return {
      find: find,
      findOne: findOne
    }
  }
  get init(){
    return Utils.initRepo(this._params, this._config);
  }

}
export default Repo