
## Synopsis:
"GeoGig is an open source tool that draws inspiration from Git, but adapts its core concepts to handle distributed versioning of geospatial data." *more information [geogig](http://geogig.org/)*

## This is module/lib javascript for depelopers.
Unofficial module/lib for geogig.

## **Download**
```bash
npm install geogig-js
```

## Instructions for use
```jsx

const geogigJS = require('./bin/models/Geogig');
// INITIAL CONFIG
let geogig = new geogigJS({
  bin: "C:\\geogig\\bin\\geogig.bat",
  cwd: "C:\\patchForRepository"
});
// If you want to start the local geogig server.
geogig.serve.init().then(e => console.log(e))

// Or connect to an existing server.
let localhost = geogig.serve.connect({uri: 'http://localhost:8182/repos'})

//Function for get all REPOSITORY. Return pormise.
let allRepo = localhost.repos.find();

//Or search current connection by REPOSITORY. Return pormise.
// Can be used Amazonas.then().catch();
let Amazonas = localhost.repos.findOne({name: 'Amazonas'});

//get log in REPOSITORY.
Amazonas.then(e => e.log).then(e => console.log(e));

//get all commit ID in REPOSITORY.
Amazonas.then(e => e.commit).then(e => console.log(e));

//get transactionId for REPOSITORY.
Amazonas.then(e => e.beginTransaction).then(e => console.log(e));

//Exemple to  ENDtransaction.
Amazonas.then(e => e.endTransaction(
  {transactionId: '60dc0d4b-8afa-47c2-a0ed-501d06bc3a16'},
  {cancel: false}
));

//Exemple to import GeoPackage to REPOSITORY.
Amazonas.then(e => e.geopackage.import({
    fileUpload: 'C:\\Users\\Name\\Desktop\\GeoPackage\\imovel.gpkg',
    transactionId: 'e89175f5-6a9c-497d-968a-eb42221226e9',
    interchange: true,
    message: 'Ola Mundo'
  })
).then(e => console.log(e))
```

```jsx
//Exemple to export REPOSITORY
Amazonas.then(get => get.geopackage.export(33)).then(e => console.log(e))

// INIT REPOSITORY IN LOCAL PATCH
let Amazonas2 = geogig.repo({name:'Amazonas2'});
newRepo.init.then(e => console.log(e))

```


## **Developing**
> Feedback or suggestions: lanio.morais@gmail.com

## **License**

Source code and software is distributed under an GPL-3.0
