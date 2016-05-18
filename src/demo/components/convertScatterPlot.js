import React from 'react';
import node from './../d3-examples/scatterPlot';
import ScatterPlot from './d3Components/ScatterPlot';

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
        <ScatterPlot data={this.state.d3} />
      </div>
    )
  }
});
