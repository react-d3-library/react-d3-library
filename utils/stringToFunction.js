module.exports = string => {
  console.log(string);
  return new Function('e', string);
}
