
## Synopsis:
"GeoGig is an open source tool that draws inspiration from Git, but adapts its core concepts to handle distributed versioning of geospatial data." *more information [geogig](http://geogig.org/)*

## This is module/lib javascript for depelopers.
Unofficial module/lib for geogig.

## **Download**
```bash
npm install geogig-js
```

## Instructions for use
```bash
'use strict';

const geogigJS = require('./geogig-js/models/Geogig');
// INITIAL CONFIG
let geogig = new geogigJS({
  bin: "C:\\geogig\\bin\\geogig.bat",
  cwd: "C:\\patchForRepository"
});
// START SERVE
// geogig.serve.init()

// CONFIG connect to Serve
let localhost = geogig.serve.connect({uri: 'http://localhost:8182/repos'})

//INIT REPOSITORY IN LOCAL PATCH
// let newRepo = geogig.repo({name:'Amazonas2'});
// newRepo.init.then(e => console.log(e))

let Amazonas = localhost.repos.findOne({name: 'Amazonas'});
// Amazonas.then(get => get.log)
// Amazonas.then(get => get.commit)
// Amazonas.then(get => get.beginTransaction)
Amazonas.then(get => get.endTransaction(
  {transactionId: '60dc0d4b-8afa-47c2-a0ed-501d06bc3a16'},
  {cancel: false}
))
```


## **Developing**
> Feedback or suggestions: lanio.morais@gmail.com

## **License**

Source code and software is distributed under an GPL-3.0
