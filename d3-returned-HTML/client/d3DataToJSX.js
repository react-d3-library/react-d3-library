'use strict'
import React, { Component } from 'react';

const getStyles = styleObject => {
  		var styles = {}
  		for(var key in styleObject) {
  			if(!isNaN(key)) {
  				styles[styleObject[key]] = styleObject[styleObject[key]];
  			} 
  		}
  		return styles;
}

const getAttributes = attributesObject => {
  		var attributes = {}
  		for(var key in attributesObject) {
  			if(!isNaN(key)) {
  				attributes[attributesObject[key]] = attributesObject[key][nodeValue];
  			} 
  		}
  		return attributes;
}

module.exports = node => {
	console.log('node: ', node[0])
	if(node[0].parentNode.localName === 'svg') {
		// var svgData = getAttributes(node[0].parentNode.attributes);

		var rawData = [];
		for(var key in node[0]) {
			if(!isNaN(key)) rawData.push(node[0][key]);
		}

		// console.log('svgData: ', svgData);
		console.log('circleData: ', rawData);
		return 'completed function'
	} else {

	    var data = node[0].map(obj => {
		  	var output = {};
		  	output.tag = obj.localName;
		  	output.className = obj.className;
		  	output.style = obj.style;
		  	return output;
	    }) 

	    return data.map((tag, i) => {
	  		return <tag.tag className={tag.className} style={getStyles(tag.style)} key={i} />
	    })

	}	


}