String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
let getItem = (params, options) => {
  let getReplaceAll = params.baseRequest + JSON.stringify(options).replaceAll(':','=').replaceAll('"','')
  .replaceAll(',','&').replaceAll('{','').replaceAll('}','');
  console.log(getReplaceAll);
  return getReplaceAll
}
module.exports =  getItem
