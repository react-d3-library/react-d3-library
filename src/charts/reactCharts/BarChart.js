import React from 'react';
import d3DataToJSX from './../../react-d3/d3DataToJSX';
import barChart from './../d3Charts/barchart';

module.exports = React.createClass ({
	render() {
		return (
			<div>
    		{d3DataToJSX(barChart)}
			</div>
		)
	}
});
