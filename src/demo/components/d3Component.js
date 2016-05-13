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
    var self = this;
    var button = (<button onClick={function(e){
      for(var key in e.currentTarget.style) {
        console.log(key)
      }
      }}>
        Click
      </button>)

    var circle = React.createElement('h1', null, this.state.t);
    return (
      <div>
        {circle}
        {button}
        {this.state.d3}
      </div>
    )
  }
});


