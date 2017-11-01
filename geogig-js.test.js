const geogigJS = require('./main');
// INITIAL CONFIG
const geogig = new geogigJS({
  bin: "C:\\geogig\\bin\\geogig.bat",
  cwd: "C:\\patchForRepository"
});
const localhost = geogig.serve.connect({uri: 'http://localhost:8182'})

// let repositorio = localhost.repos.findOne({'name': 'dsdasd'})
// repositorio.then( async (action) => {
//   console.log(await action.log({offset: 1, path: 2}));
// })

test('function => repos.findAll()', async () => {
  const reposFind = await localhost.repos.findAll();
  expect(reposFind)
});

test('function => repos.findOne()', async () => {
  const reposFindOne = await localhost.repos.findOne({'name': 'acre'});
  expect(reposFindOne)
});
