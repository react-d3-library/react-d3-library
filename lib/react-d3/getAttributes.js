const eventHandler = require('./parseEventHandler')
const toCamelCase = require('./../utils/toCamelCase');

module.exports = (attributesObject, node) => {
  var attributes = {}
  for(var key in attributesObject) {
    if(!isNaN(key)) {
      if(attributesObject[key].localName === 'class') {
        attributes['className'] = attributesObject[key].nodeValue;
      } else if (attributesObject[key].localName.indexOf('-') > -1) {
        var reactKey = toCamelCase(attributesObject[key].localName);
        attributes[reactKey] = attributesObject[key].nodeValue;
      }
      else attributes[attributesObject[key].localName] = attributesObject[key].nodeValue;
    }
  }

  let eventHandlers = eventHandler(node);

  for(let key in eventHandlers) {
    if(key !== 'undefined') attributes[key] = eventHandlers[key]
  }

  if(node['__react-d3-id']) {
    attributes['__react-d3-id'] = node['__react-d3-id']
  }

  if(node['__data__']) {
    attributes['__data__'] = node['__data__']
  }

  return attributes;
}
