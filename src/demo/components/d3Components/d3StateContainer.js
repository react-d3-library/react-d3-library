import React from 'react';
const d3DataToJSX = require('./../../../react-d3/d3DataToJSX');
const D3ChildContainer = require('./d3ChildContainer')


module.exports = React.createClass({

  getInitialState: function() {
    return {d3: [], data: [], called: false}
  },

  componentWillReceiveProps: function(nextProps) {
    if(!this.state.called) {
      let d3Data = d3DataToJSX(nextProps.data);
      this.setState({d3: d3Data.mappedData, data: d3Data.state, called: true})
    }
  },

  update: function() {
    var circleNum = this.state.data['circle.0.0.1']
    var newData = 2 * circleNum;
    var data = this.state.data;

    data['circle.0.0.1'] = newData;

    this.setState({data})
  },

  render: function() {
    console.log(this.state.data);
    return (
      <div>
        <button onClick={this.update}>Click</button>
        <D3ChildContainer data={this.state} />
      </div>
    )
  }
});


