import React, { Component } from 'react';
import Nav from './Nav';
import d3 from 'd3';

module.exports = React.createClass ({
	render() {
		return (
			<div>
				<Nav />
				<h1>React-d3-Library</h1>
				{this.props.children}
			</div>
		)
	}
});
