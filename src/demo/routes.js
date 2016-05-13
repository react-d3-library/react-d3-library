var React = require('react');
var {Router, Route, browserHistory} = require('react-router');
var App = require('./components/App');
var BubbleChart = require('./components/convertBubbleChart');
var RadialTree = require('./components/convertRadialTree');
var BestCanidate = require('./components/convertBestCanidate');
var ColorMesh = require('./components/convertColorMesh');
var MergeSort = require('./components/convertMergeSort');

module.exports = (
  <Router history={browserHistory} >
    <Route path='/' component={App}>
    	<Route path='bubbleChart' component={BubbleChart} />
    	<Route path='radialTree' component={RadialTree} />
    	<Route path='colorMesh' component={ColorMesh} />
    	<Route path='bestCanidate' component={BestCanidate} />
    	<Route path='mergeSort' component={MergeSort} />
    </Route>
  </Router>
)



