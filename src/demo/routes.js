var React = require('react');
var {Router, Route, browserHistory} = require('react-router');
var App = require('./components/App');
var BubbleChart = require('./components/convertBubbleChart');
var RadialTree = require('./components/convertRadialTree');

module.exports = (
  <Router history={browserHistory} >
    <Route path='/' component={App}>
    	<Route path='bubbleChart' component={BubbleChart} />
    	<Route path='radialTree' component={RadialTree} />
    </Route>
  </Router>
)