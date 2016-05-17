
const React = require('react');
// const getStyles = require('./getStyles');
// const getAttributes = require('./getAttributes');
// const parseHTMLTag = require('./../../utils/parseHTMLTag');
// const applyD3ReactId = require('./../../utils/applyD3ReactId');
const extractData = require('./extractData');

// Counter to build unique React keys. Increments with every call to build.
// var counter = -1;

// Extract each DOM element in the node
const getRawData = node => {

  var output = [];

  for(var key in node.childNodes) {

    if(!isNaN(key) && node.childNodes[key]) output.push(node.childNodes[key]);

  }

  return output;
}

// Build React elements inside an svg
const build = nodes => {

  // If nodes is a single element wrap it in an array for extractData to work properly
  if(!Array.isArray(nodes)) nodes = [nodes];

  // Extract all the relevant data for React createElement from each DOM node.
  var reactData = extractData(nodes);
  // var parsedData = getData(reactData);
  // console.log(reactData);
  // var createdElements = makeChildNodes(reactData);

  // return makeChildNodes(reactData.mappedData)
  return reactData;
}

// Maps over all the nodes and extracts all the data relevant to React
// Does not map over child elements of the nodes, this is done in recurssive calls from makeChildNodes
// const extractData = nodes => {
//   let extractedData = {state: {}, mappedData: []}

//   //increment the counter so the key is different for each nested layer.
//   counter++;

//   let mappedData = nodes.map((obj, i) => {
//     let output = {};
//     let nodeId;

//     if(obj['__data__']) {
//       output.data = obj['__data__']
//     }

//     // //outHTML
//     output.outerHTML = parseHTMLTag(String(obj.outerHTML));

//     //HTML tag name ...div, g, circle, etc...
//     output.tag = obj.localName;

//     nodeId = applyD3ReactId(Array.prototype.slice.call(obj.children), i)

//     for(var key in nodeId.state) {
//       extractedData.state[key] = nodeId.state[key]
//     }

//     // Create an array for all the child nodes
//     output.children = nodeId.children;

//     // Build the props object to be used in react createElement and convert into react friendly syntax
//     output.props = getAttributes(obj.attributes, obj);

//     // If styles exits convert the CSSStyleDeclaration into react friendly syntax-
//     if(output.props.style) output.props.style = getStyles(output.props.style);

//     // Key represents (type of DOM element) + (layer deep in the tree) + (index of each sibling element)
//     output.props.key = output.tag + '.' + counter + '.' + i;

//     // Special case for text tags
//     if(output.tag === 'text') output.props.textContent = obj.childNodes[0].data;

//     // output.props['react-d3-id'] = output.tag + '.' + counter + '.' + i;
//     output['__react-d3-id'] = output.tag + '.' + i + '.' + 0 + '.' + 0;
//     return output;
//   });

//   extractedData.mappedData = mappedData;

//   return extractedData;
// }

// const getData = reactData => {
//   return reactData.map((obj, i) => {

//     return obj.children.length === 0
//         ? obj[obj.outerHTML] = obj.data
//         : extractData(obj.children).reduce((prev,obj) => {
//           return !prev.length ? prev.concat(getData([obj]))
//             : prev.length >= 1 && prev[prev.length - 1] !== obj.data
//             ? prev.concat(getData([obj])) : prev
//         }, [])
//   })[0];

// }

// const getData = reactData => {
//   return reactData.map((obj, i) => {

//     return obj.children.length === 0
//         ? obj[obj.outerHTML] = obj.data
//         : extractData(obj.children).map(obj => getData([obj]))
//   });

// }


//Recurssively create all nested React components with reactData
//Child elements are sent back back to extractData and then mapped over to be called recurssively
//TextContent is always passed as a child, if null react ignores it

// const makeChildNodes = (reactData) => {

//   return reactData.map((obj, i) => {

//     return obj.children.length === 0

//       ? React.createElement(obj.tag, obj.props, obj.props.textContent)

//       : React.createElement(obj.tag, obj.props, extractData(obj.children).mappedData.map(obj => makeChildNodes([obj])))

//   });

// }

//Build raw data and then build the react DOM
module.exports = nodes => {

  var rawData = getRawData(nodes);

  return build(rawData);
}
