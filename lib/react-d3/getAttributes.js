import toCamelCase from './../utils/toCamelCase';

module.exports = (attributesObject, node) => {
  let attributes = {}
  for(let key in attributesObject) {
    if(!isNaN(key)) {
      if(attributesObject[key].localName === 'class') {
        attributes['className'] = attributesObject[key].nodeValue;
      } else if (attributesObject[key].localName.indexOf('-') > -1) {
        let reactKey = toCamelCase(attributesObject[key].localName);
        attributes[reactKey] = attributesObject[key].nodeValue;
      }
      else attributes[attributesObject[key].localName] = attributesObject[key].nodeValue;
    }
  }

  if(node['data-react-d3-id']) {
    attributes['data-react-d3-id'] = node['data-react-d3-id']
  }

  if(node['__transition__']) {
    attributes['__transition__'] = node['__transition__'];
  }

  for(let key in node) {
    if(key.slice(0, 2) === '__') attributes[key] = node[key];
  }

  return attributes;
}