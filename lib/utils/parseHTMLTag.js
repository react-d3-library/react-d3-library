module.exports = string => {
  return string.slice(string.indexOf('<'), string.indexOf('>')+1)
}