const React = require('react');
const d3DataToJSX = require('./../react-d3/d3DataToJSX');
const ChildComponent = require('./ChildComponent');


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
        <ChildComponent data={this.state} />
      </div>
    )
  }
});


