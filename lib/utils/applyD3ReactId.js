function applyD3ReactId(children, counter) {
  var count = -1;
  var length = 0;
  var childCount = 0;
  var parentCount = 0;
  var result = {state: {}, children: []};

  function apply(parent) {
    count++;
    parent.forEach( (child, i) => {
      var d3Attributes = Object.keys(child);
      var id = child.localName + '.' + counter + '.' + parentCount + '.' + count;
      var currentNode = child['data-react-d3-id'] = id;
      var resultObj = result.state[id] = {};

      if(child.childNodes.length) length = child.childNodes.length;
      if(d3Attributes.length) d3Attributes.forEach( (key) => { resultObj[key] = child[key]; })
      else  resultObj['__data__'] = null;
      if(count === length) count = 0, parentCount++;

      return child.childNodes.length
        ? ([].slice.call(child.childNodes).forEach(child => apply([child])))
        : []
    });

  }

  apply(children);
  result.children = children;
  return result;
}

module.exports = applyD3ReactId;
