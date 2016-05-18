const React = require('react');
const d3DataToJSX = require('./../react-d3/d3DataToJSX');
const ChildComponent = require('./ChildComponent');


module.exports = React.createClass({

  getInitialState: function() {
    return {d3DOM: [], state: []}
  },

  componentWillReceiveProps: function(nextProps) {
      let d3Data = d3DataToJSX(nextProps.data);
      this.setState({d3DOM: d3Data.mappedData, state: d3Data.state})
  },

  render: function() {
    return (
      <div>
        <ChildComponent data={this.state} />
      </div>
    )
  }
});


