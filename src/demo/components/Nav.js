import React from 'react';
var {Link} = require('react-router');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar">
        	<li><Link to="/">Home</Link></li>
          <li><Link to="/bubbleChart">Bubble Chart</Link></li>
          <li><Link to="/circleEventHandler">Bubble Chart</Link></li>
        </nav>
      </div>
    )
  }
});
