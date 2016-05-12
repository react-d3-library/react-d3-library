import React from 'react';
import d3DataToJSX from './../../react-d3/d3DataToJSX';
import node from './../d3-examples/radialTree';

module.exports = React.createClass ({
	render() {
		return (
			<div>
    		{d3DataToJSX(node)}
			</div>
		)
	}
});