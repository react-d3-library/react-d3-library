const getStyles = require('./getStyles');
const getAttributes = require('./getAttributes');
const applyD3ReactId = require('./../utils/applyD3ReactId');

// Counter to build unique React keys. Increments with every call to build.
// var counter = -1;
// Maps over all the nodes and extracts all the data relevant to React
// Does not map over child elements of the nodes, this is done in recurssive calls from makeChildNodes
module.exports = (nodes) => {
  let extractedData = {state: {}, mappedData: []}
  //increment the counter so the key is different for each nested layer.
  // counter++;
  if(!Array.isArray(nodes)) {
    nodes = Array.prototype.slice.call(nodes);
  }

  let mappedData = nodes.map((obj, i) => {
    let output = {};
    let nodeId = {};

    if(obj['__data__']) {
      output['__data__'] = obj['__data__']
    }

    //HTML tag name ...div, g, circle, etc...
    output.tag = obj.localName;

    if(!obj['__react-d3-id']) {
      nodeId = applyD3ReactId(Array.prototype.slice.call(obj.children), i)
      for(var key in nodeId.state) {
        extractedData.state[key] = nodeId.state[key]
      }
    } else {
      nodeId.children = obj.children;
    }

    // Create an array for all the child nodes
    output.children = nodeId.children;

    // Build the props object to be used in react createElement and convert into react friendly syntax
    output.props = getAttributes(obj.attributes, obj);

    // If styles exits convert the CSSStyleDeclaration into react friendly syntax-
    if(output.props.style) output.props.style = getStyles(output.props.style);

    // Key represents (type of DOM element) + (layer deep in the tree) + (index of each sibling element)
    // output.props.key = output.tag + '.' + counter + '.' + i;

    // Special case for text tags
    if(output.tag === 'text') output.props.textContent = obj.childNodes[0].data;

    // output.props['react-d3-id'] = output.tag + '.' + counter + '.' + i;\
    if(!obj['__react-d3-id']) {
      output['__react-d3-id'] = output.tag + '.' + i + '.' + 0 + '.' + 0;
      output.props.key = output.tag + '.' + i + '.' + 0 + '.' + 0;
    } else {
      output['__react-d3-id'] = obj['__react-d3-id'];
      output.props.key = obj['__react-d3-id'];
    }

    return output;
  });

  extractedData.mappedData = mappedData;

  return extractedData;
}
