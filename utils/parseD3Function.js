const stringToFunction = require('./stringToFunction');

//Takes function string
module.exports = func => {
  //Parses string and returns new function
  console.log(func);
  return stringToFunction(func.substring(func.indexOf("{") + 1,
    func.lastIndexOf("}")).replace(/^[ \s]+|[ \s]+$/gi, ''));
}
