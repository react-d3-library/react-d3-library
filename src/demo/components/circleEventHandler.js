import React, { Component } from 'react';
import d3 from 'd3';
const d3DataToJSX = require('./../../react-d3/d3DataToJSX');
const D3StateContainer = require('./d3Components/d3StateContainer');
const node = require('./../d3-examples/circleEventHandler');


module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  render: function() {
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});
