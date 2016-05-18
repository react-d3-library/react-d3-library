function applyD3ReactId(children, counter) {
  var count = -1;
  var length = 0;
  var childCount = 0;
  var parentCount = 0;
  var result = {state: {}, children: []};

  function apply(parent) {
    count++;
    parent.forEach( (child, i) => {
      if(child.children.length) length = child.children.length;

      child['__react-d3-id'] = child.localName + '.' + counter + '.' + parentCount + '.' + count;
      child['__data__']
        ? result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count] = child['__data__']
        : result.state[child.localName + '.' + counter + '.' + parentCount + '.' + count] = null

      if(count === length) count = 0, parentCount++;

      return child.children.length
        ? ([].slice.call(child.children).forEach(child => apply([child])))
        : []
    });

  }

  apply(children);
  result.children = children;

  return result;
}

module.exports = applyD3ReactId;
