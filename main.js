'use strict'

const geogigJS = require('./geogig-js/models/Geogig');

let geogig = new geogigJS({
  bin: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\geogig\\bin\\geogig.bat",
  cwd: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\tmp"
});


// let localhost = Geogig.serve.init().then(succes => console.log(succes))
