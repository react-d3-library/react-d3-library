import React from 'react';
import d3DataToJSX from './../../react-d3/d3DataToJSX';
import node from './../d3-examples/calendarView';
const D3StateContainer = require('./d3Components/d3StateContainer');

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: '',called:false}
  },

  componentDidMount: function() {
    if(!this.state.called){
      this.setState({d3: node, called: true});
    }
  },

  render: function() {
    console.log(this.state);
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});
