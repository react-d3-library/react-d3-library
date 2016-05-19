import React from 'react';
const d3DataToJSX = require('./../../../react-d3/d3DataToJSX');
const D3ChildContainer = require('./d3ChildContainer')
const createLineChart = require('./../../basic-graphs/createLineChart');
const d3 = require('d3');

function processData (props) {
        var processedData = createLineChart(props);
        it.next(processedData);
      }

      function *gen() {
        var data = yield processData(nextProps)
      }

      

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: [], data: []}
  },

  componentWillReceiveProps: function(nextProps) {
      const it = gen();
      var data = it.next()
      console.log(data)
      let d3Data = d3DataToJSX(data);
      this.setState({d3: d3Data.mappedData, data: d3Data.state})
  },

  render: function() {
    return (
      <div>
        <D3ChildContainer data={this.state} />
      </div>
    )
  }
});


