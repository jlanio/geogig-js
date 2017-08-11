String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
let getItem = function(params, options) {
  return params.baseRequest + JSON.stringify(options).replaceAll(':','=').replaceAll('"','')
  .replaceAll(',','&').replaceAll('{','').replaceAll('}','');
}
module.exports =  getItem
