import React from 'react';
var d3DataToJSX = require('./../../../react-d3/d3DataToJSX');

module.exports = React.createClass({

  getInitialState: function() {
    return {data: []}
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({data: nextProps.data})
  },


  render: function() {
    return (
      <div className="react-component">
        {this.state.data || ''}
      </div>
    )
  }
});


