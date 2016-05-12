var React = require('react');
var {Router, Route, browserHistory} = require('react-router');
var App = require('./components/App');
var BubbleChart = require('./components/convertBubbleChart');

module.exports = (
  <Router history={browserHistory} >
    <Route path='/' component={App}>
    	<Route path='bubbleChart' component={BubbleChart} />
    </Route>
  </Router>
)