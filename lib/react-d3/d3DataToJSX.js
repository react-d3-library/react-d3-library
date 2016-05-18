const React = require('react');
const extractData = require('./extractData');
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

  return reactData;
}

//Build raw data and then build the react DOM
module.exports = nodes => {

  var rawData = getRawData(nodes);

  return build(rawData);
}
