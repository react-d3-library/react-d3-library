import React, { Component } from 'react';
var d3DataToJSX = require('./../../react-d3/d3DataToJSX');

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: '', t: 0}
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({d3: d3DataToJSX(nextProps.data)})
  },


  render: function() {
    return (
      <div>
        {this.state.d3}
      </div>
    )
  }
});


