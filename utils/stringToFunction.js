module.exports = string => {
  return new Function( 'return function (e) { '+ string+'}')();
}
