String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
module.exports =  function(obj){
  return JSON.stringify(obj).replaceAll(':','=').replaceAll('"','')
  .replaceAll(',','&').replaceAll('{','').replaceAll('}','').replaceAll('baseRequest=','');
}
