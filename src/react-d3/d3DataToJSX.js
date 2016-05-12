'use strict'
import React, { Component } from 'react';
const getStyles = require('./getStyles');
const getAttributes = require('./getAttributes');

<<<<<<< HEAD

const getAttributes = attributesObject => {
  		var attributes = {}
  		for(var key in attributesObject) {
  			if(!isNaN(key)) {
  				if(attributesObject[key].localName === 'class') {
  					attributes['className'] = attributesObject[key].nodeValue;
  				} else if (attributesObject[key].localName.indexOf('-') > -1) {
  					attributes['textAnchor'] = attributesObject[key].nodeValue;
  				}
  				else attributes[attributesObject[key].localName] = attributesObject[key].nodeValue;
  			}
  		}
  		// console.log('attt: ', attributes);
  		return attributes;
}


const makeChildNodes = data => {
	return data.map((obj, i) => {
		return obj.children.length === 0
    ? React.createElement(obj.tag, obj.props, obj.props.textContent)
    : React.createElement(obj.tag, obj.props, processData(obj.children).map(obj => makeChildNodes([obj])))
	});
}
=======
// Counter to build unique React keys. Increments with every call to build.
var counter = -1;

// Extract each DOM element in the node
const getRawData = node => {
>>>>>>> cddc3e2ae6bda8b04baa5fc0580abeb8fade0c7d

	var output = [];

	for(var key in node[0]) {

<<<<<<< HEAD
module.exports = node => {
	var rawData = getRawData(node);
	return build(rawData);
}

var counter = -1;

function build(nodes) {
	counter ++;
	if(!Array.isArray(nodes)) nodes = [nodes];
	var data = processData(nodes);
	return <svg>{makeChildNodes(data)}</svg>
}
=======
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

	return <svg>{makeChildNodes(reactData)}</svg>
}

// Maps over all the nodes and extracts all the data relevant to React
// Does not map over child elements of the nodes, this is done in recurssive calls from makeChildNodes
const extractData = nodes => {

	//increment the counter so the key is different for each nested layer. 
	counter++

	let mappedData = nodes.map((obj, i) => {
>>>>>>> cddc3e2ae6bda8b04baa5fc0580abeb8fade0c7d

		let output = {};

		//HTML tag name ...div, g, circle, etc...
		output.tag = obj.localName;

		// Create an array for all the child nodes
		output.children = Array.prototype.slice.call(obj.children);

		//Build the props object to be used in react createElement and convert into react friendly syntax
		output.props = getAttributes(obj.attributes);

		//Retrieve the styles form the CSSStyleDeclaration object and convert into react friendly syntax
		output.props.style = getStyles(output.props.style);

		//Key represents (type of DOM element) + (layer deep in the tree) + (index of each sibling element)
		output.props.key = output.tag + '.' + counter + '.' + i;

		//Special case for text tags
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
module.exports = node => {

		var rawData = getRawData(node);

		return build(rawData);
}


