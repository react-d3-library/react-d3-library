module.exports = string => {
  return new Function('e', string);
}
