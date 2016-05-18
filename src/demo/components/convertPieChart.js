import React from 'react';
import node from './../d3-examples/pieChart';
import PieChart from './d3Components/PieChart'

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
        <PieChart data={this.state.d3} />
      </div>
    )
  }
});
