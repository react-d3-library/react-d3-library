const eventHandler = require('./parseEventHandler')

module.exports = (attributesObject, node) => {
	var attributes = {}
	for(var key in attributesObject) {
  	if(!isNaN(key)) {
			attributes[attributesObject[key].localName] = attributesObject[key].nodeValue;
		}
	}

  let eventHandlers = eventHandler(node);

  for(let key in eventHandlers) {
    attributes[key] = eventHandlers[key]
  }

	return attributes;
}
