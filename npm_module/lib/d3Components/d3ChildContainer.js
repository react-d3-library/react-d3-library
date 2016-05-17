const React = require('react');
var createReactComponents = require('./../react-d3/createReactComponents');

module.exports = React.createClass({

  getInitialState: function() {
    return {data: []}
  },

  componentWillReceiveProps: function(nextProps) {
      var props = nextProps.data;
      var reactComponents = createReactComponents(props.d3, props.data)
      this.setState({data: reactComponents})
  },

  render: function() {
    return (
      <div className="react-component">
        {this.state.data || ''}
      </div>
    )
  }
});


