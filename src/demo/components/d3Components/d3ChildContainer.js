import React from 'react';
var createReactComponents = require('./../../../react-d3/createReactComponents');

module.exports = React.createClass({

  getInitialState: function() {
    return {data: [], t: 0, called: false}
  },

  componentWillReceiveProps: function(nextProps) {
      var props = nextProps.data;
      var reactComponents = createReactComponents(props.d3, props.data)
      this.setState({data: reactComponents})
  },

  render: function() {
    return (
      <div className="react-component">
        <h1>{this.props.data.data['circle.0.0.1']}</h1>
        {this.state.data || ''}
      </div>
    )
  }
});


