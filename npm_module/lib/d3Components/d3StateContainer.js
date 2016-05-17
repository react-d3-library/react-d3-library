const React = require('react');
const d3DataToJSX = require('./../react-d3/d3DataToJSX');
const D3ChildContainer = require('./d3ChildContainer');


module.exports = React.createClass({

  getInitialState: function() {
    return {d3: [], data: []}
  },

  componentWillReceiveProps: function(nextProps) {
      let d3Data = d3DataToJSX(nextProps.data);
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


