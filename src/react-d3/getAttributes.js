module.exports = attributesObject => {
	var attributes = {}
	for(var key in attributesObject) {
		if(!isNaN(key)) {
			attributes[attributesObject[key].localName] = attributesObject[key].nodeValue;
		}
	}
	return attributes;
}