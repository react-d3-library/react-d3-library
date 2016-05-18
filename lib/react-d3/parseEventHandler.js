const parseD3Function = require('./../utils/parseD3Function')
const parseD3Event = require('./../utils/parseD3Event')

module.exports = node => {
  let eventHandlers = {};
  for(var key in node) {
    if(key.indexOf('__') > -1 && key.indexOf('data') < 0) {
      let stringifiedFunction = String(node[key]['_']);
      let parsedD3Function = parseD3Function(stringifiedFunction);
      eventHandlers[parseD3Event(key)] = parsedD3Function;
    }
  }
  return eventHandlers;
}
