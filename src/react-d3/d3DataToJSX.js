'use strict'
import React, { Component } from 'react';
const getStyles = require('./getStyles');
const getAttributes = require('./getAttributes');

// Counter to build unique React keys. Increments with every call to build.
var counter = -1;

// Extract each DOM element in the node
const getRawData = node => {

  var output = [];

  for(var key in node[0]) {

    if(!isNaN(key)) output.push(node[0][key]);

  }

  return output;
}

// Build React elements inside an svg
const build = nodes => {

  // If nodes is a single element wrap it in an array for extractData to work properly
  if(!Array.isArray(nodes)) nodes = [nodes];

  // Extract all the relevant data for React createElement from each DOM node.
  var reactData = extractData(nodes);
  console.log(reactData);
  return <svg>{makeChildNodes(reactData)}</svg>;
}

// Maps over all the nodes and extracts all the data relevant to React
// Does not map over child elements of the nodes, this is done in recurssive calls from makeChildNodes
const extractData = nodes => {
  //increment the counter so the key is different for each nested layer.
  counter++
  let mappedData = nodes.map((obj, i) => {

    let output = {};

    //HTML tag name ...div, g, circle, etc...
    output.tag = obj.localName;

    // Create an array for all the child nodes
    output.children = Array.prototype.slice.call(obj.children);

    // Build the props object to be used in react createElement and convert into react friendly syntax
    output.props = getAttributes(obj.attributes, obj);
    // If styles exits convert the CSSStyleDeclaration into react friendly syntax-
    if(output.props.style) output.props.style = getStyles(output.props.style);

    // Key represents (type of DOM element) + (layer deep in the tree) + (index of each sibling element)
    output.props.key = output.tag + '.' + counter + '.' + i;

    // Special case for text tags
    if(output.tag === 'text') output.props.textContent = obj.childNodes[0].data;

    return output;
  })

  return mappedData;
}

//Recurssively create all nested React components with reactData
//Child elements are sent back back to extractData and then mapped over to be called recurssively
//TextContent is always passed as a child, if null react ignores it
const makeChildNodes = reactData => {

  return reactData.map((obj, i) => {

    return obj.children.length === 0

        ? React.createElement(obj.tag, obj.props, obj.props.textContent)

        : React.createElement(obj.tag, obj.props, extractData(obj.children).map(obj => makeChildNodes([obj])))

  });

}
//Build raw data and then build the react DOM
module.exports = nodes => {

  var rawData = getRawData(nodes);

  return build(rawData);
}
