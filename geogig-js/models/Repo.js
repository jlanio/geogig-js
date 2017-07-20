'use strict'

module.exports = class Repo  {
  constructor(name){
    this._name = name
  }
  init(){
    return this._name
  }

}
