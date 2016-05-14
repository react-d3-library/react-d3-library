import React from 'react';
const d3DataToJSX = require('./../../../react-d3/d3DataToJSX');
const D3ChildContainer = require('./d3ChildContainer')


module.exports = React.createClass({

  getInitialState: function() {
    return {data: []}
  },

  componentWillReceiveProps: function(nextProps) {
    let data = d3DataToJSX(nextProps.data);
    console.log(data);
    // this.setState({d3: d3DataToJSX(nextProps.data)})
  },

  render: function() {
    return <D3ChildContainer data={this.state.d3} />
  }
});


