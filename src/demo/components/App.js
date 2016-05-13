import React, { Component } from 'react';
import Nav from './Nav';
import d3 from 'd3';

module.exports = React.createClass ({
	render() {
		return (
			<div>
				<Nav />
				React-d3-Library
				{this.props.children}
			</div>
		)
	}
});
