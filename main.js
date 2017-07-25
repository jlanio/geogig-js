/*!
 * geogig-js <https://github.com/jlanio/geogig-js>
 *
 * Copyright (c) 2017, JLânio Morais.
 * Released under the GPL-3.0 License.
 */

 'use strict';

 const geogigJS = require('./geogig-js/models/Geogig');

 let geogig = new geogigJS({
   bin: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\geogig\\bin\\geogig.bat",
   cwd: "C:\\Users\\jlanio\\Geogig-Desktop\\app\\static\\tmp"
 });
console.log(geogig);
