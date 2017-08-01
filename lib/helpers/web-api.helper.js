'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};
var getItem = function getItem(params, options) {
  return params.baseRequest + JSON.stringify(options).replaceAll(':', '=').replaceAll('"', '').replaceAll(',', '&').replaceAll('{', '').replaceAll('}', '');
};
exports.default = getItem;