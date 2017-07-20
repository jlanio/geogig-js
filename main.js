'use strict'

const geogigJS = require('./geogig-js/models/Geogig');

let geogig = new geogigJS({
  bin: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\geogig\\bin\\geogig.bat",
  cwd: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\tmp"
});


// let localhost = Geogig.serve.init().then(succes => console.log(succes))

let localhost = geogig.serve.connect({uri: 'http://localhost:8182/repos'})

let Acre = localhost.repos.findOne({name: 'Acre'});
Acre.then(get => console.log(get.commit))

let newRepo = geogig.repo({name:'JovenSS'});
newRepo.init()
