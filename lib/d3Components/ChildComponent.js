const React = require('react');
var createReactComponents = require('./../react-d3/createReactComponents');

module.exports = React.createClass({

  getInitialState: function() {
    return {reactComponents: []}
  },

  componentWillReceiveProps: function(nextProps) {
      var props = nextProps.data;
      var reactComponents = createReactComponents(props.d3DOM, props.state)
      this.setState({reactComponents: reactComponents})
  },

  render: function() {
    return (
      <div className="react-component">
        {this.state.reactComponents || ''}
      </div>
    )
  }
});


