import React, { Component } from 'react';
import d3 from 'd3';
const D3StateContainer = require('./d3Components/d3StateContainer');
const circleD3 = require('./../d3-examples/animatedCircles');

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: circleD3});
  },


  render: function() {
    return (
      <div className="react-d3">
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});
