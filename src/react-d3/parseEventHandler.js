const parseD3Function = require('./../../utils/parseD3Function')
const parseD3Event = require('./../../utils/parseD3Event')

module.exports = node => {
  let eventHandlers = {};
  for(var key in node) {
    if(key.indexOf('__') > -1 && key.indexOf('data') < 0) {
      // console.log('function:',node[key]['_']);
      let stringifiedFunction = String(node[key]['_']);
      console.log(key);
      let parsedD3Function = parseD3Function(stringifiedFunction);
      eventHandlers[parseD3Event(key)] = parsedD3Function
    }
  }
  console.log(eventHandlers)
  return eventHandlers;
}
