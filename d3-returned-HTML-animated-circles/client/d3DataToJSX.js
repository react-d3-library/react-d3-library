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
  				attributes[attributesObject[key].localName] = attributesObject[key].nodeValue;
  			}
  		}
  		return attributes;
}

const makeChildNodes = (data) => {
	return data.map((obj, i) => {
		// return <obj.tag {...obj.attributes} />
		return React.createElement(obj.tag, obj.attributes)
	})
}


module.exports = node => {
	if(node[0].parentNode.localName === 'svg') {

		var rawData = [];
		for(var key in node[0]) {
			if(!isNaN(key)) rawData.push(node[0][key]);
		}

		var data = rawData.map((obj, i) => {
			var output = {};
			output.tag = obj.localName;
			output.attributes = getAttributes(obj.attributes);
			output.attributes.key = output.tag + '.' + i;
			return output;
		})
		return <svg>{makeChildNodes(data)}</svg>

	} else {

	    var data = node[0].map(obj => {
		  	var output = {};
		  	output.tag = obj.localName;
		  	output.className = obj.className;
		  	output.style = obj.style;
		  	return output;
	    })

	    return data.map((obj, i) => {
	  		return <obj.tag className={obj.className} style={getStyles(obj.style)} key={i} />
	    })

	}


}
