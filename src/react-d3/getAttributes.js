const toCamelCase = require('./../../utils/toCamelCase');

module.exports = attributesObject => {
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
	return attributes;
}
