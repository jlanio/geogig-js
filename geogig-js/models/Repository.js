const request = require('request');

class Repository  {
  init(){

  }
  // ls(){
  //   return new Promise((resolve, reject) => {
  //    request(`${this._serverAddress}/ls-tree.json`, (error, response, body) => {
  //         resolve(JSON.parse(body).response.node.map(shp => getJson.shpfile(shp.path)));
  //     })
  //   })
  // }
  // log() {
  //   return new Promise((resolve, reject) => {
  //       request(`${this._serverAddress}/log.json`,
  //           (error, response, body)=>{error ? reject(error) : resolve(body)}
  //       )
  //   });
  // };

}
