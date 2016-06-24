module.exports = spinalCaseValue => {
  return spinalCaseValue.replace(/-[a-zA-Z]/g, match => match[1].toUpperCase())
}
