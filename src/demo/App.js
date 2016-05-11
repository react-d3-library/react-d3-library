import React, { Component } from 'react';
// var d3 = require('d3');
var d3DataToJSX = require('./../react-d3/d3DataToJSX');
var node = require('./d3-examples/bubbleChart');

export default class App extends Component {

  render() {
	const circleGraph = d3DataToJSX(node);
    return (
        <div>
          {circleGraph}
        </div>
    )
  }
}





