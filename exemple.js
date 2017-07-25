'use strict';

const geogigJS = require('./bin/models/Geogig');
// INITIAL CONFIG
let geogig = new geogigJS({
  bin: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\geogig\\bin\\geogig.bat",
  cwd: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\tmp"
});
// START SERVE
// geogig.serve.init().then(e => console.log(e))

// CONFIG connect to Serve
let localhost = geogig.serve.connect({uri: 'http://localhost:8182/repos'})

//INIT REPOSITORY IN LOCAL PATCH
// let newRepo = geogig.repo({name:'Amazonas2'});
// newRepo.init.then(e => console.log(e))

// let Amazonas = localhost.repos.findOne({name: 'Amazonas'});
// Amazonas.then(get => get.log()).then(e => console.log(e));
// Amazonas.then(get => get.geopackage.import({
//     fileUpload: 'C:\\Users\\jlanio\\Desktop\\GeoPackage\\imovel.gpkg',
//     transactionId: 'e89175f5-6a9c-497d-968a-eb42221226e9',
//     interchange: true,
//     message: 'Ola Mundo'
//   })
// ).then(e => console.log(e))
// Amazonas.then(get => get.commit)
// Amazonas.then(get => get.beginTransaction)
// Amazonas.then(get => get.endTransaction(
//   {transactionId: '60dc0d4b-8afa-47c2-a0ed-501d06bc3a16'},
//   {cancel: false}
// ))
// Amazonas.then(get => get.geopackage.export(33)).then(e => console.log(e))
