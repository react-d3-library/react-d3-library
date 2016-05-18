import React from 'react';
import node from './../d3-examples/barChart';
import BarChart from './d3Components/BarChart';

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
        <BarChart data={this.state.d3} />
      </div>
    )
  }
});
