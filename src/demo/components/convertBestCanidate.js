import React from 'react';
import d3DataToJSX from './../../react-d3/d3DataToJSX';
import node from './../d3-examples/bestCanidate';
const D3StateContainer = require('./d3Components/d3StateContainer');

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
