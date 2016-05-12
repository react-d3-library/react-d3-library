'use strict'
import React, { Component } from 'react';
const getStyles = require('./getStyles');

const getAttributes = attributesObject => {
  		var attributes = {}
  		for(var key in attributesObject) {
  			if(!isNaN(key)) {
  				attributes[attributesObject[key].localName] = attributesObject[key].nodeValue;
  			}
  		}
  		return attributes;
}

const makeChildNodes = data => {
	return data.map((obj, i) => {
		return obj.children.length === 0
    ? React.createElement(obj.tag, obj.props, obj.props.textContent)
    : React.createElement(obj.tag, obj.props, processData(obj.children).map(obj => makeChildNodes([obj])))
	});
}



module.exports = node => {
	//if(node[0].parentNode.localName === 'svg') {

		var rawData = getRawData(node);
		return build(rawData);

	// } else {

	//     var data = node[0].map(obj => {
	// 	  	var output = {};
	// 	  	output.tag = obj.localName;
	// 	  	output.className = obj.className;
	// 	  	output.style = obj.style;

	// 	  	return output;
	//     })

	//     return data.map((obj, i) => {
	//   		return <obj.tag className={obj.className} style={getStyles(obj.style)} key={i} />
	//     })

	// }


}
var counter = -1;
function build(nodes) {
	counter ++;
	if(!Array.isArray(nodes)) nodes = [nodes];
	var data = processData(nodes);
	return <svg>{makeChildNodes(data)}</svg>
}

function getRawData(node) {
	var output = [];
	for(var key in node[0]) {
		if(!isNaN(key)) output.push(node[0][key]);
	}
	return output;
}

function processData(nodes) {
	counter++
	var mappedData = nodes.map((obj, i) => {
		var output = {};
		output.tag = obj.localName;
		output.props = getAttributes(obj.attributes);
		output.props.style = getStyles(output.props.style);
		output.props.key = output.tag + '.' + counter + '.' + i;
		output.nodeType = obj.nodeType;
		output.children = Array.prototype.slice.call(obj.children);
		if(output.tag === 'text') output.props.textContent = obj.childNodes[0].data;
		return output;
	})
	return mappedData;
}
