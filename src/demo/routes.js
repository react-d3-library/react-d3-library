var React = require('react');
var {Router, Route, browserHistory} = require('react-router');
var App = require('./components/App');
var BubbleChart = require('./components/convertBubbleChart');
var CircleEventHandler = require('./components/circleEventHandler');
var RadialTree = require('./components/convertRadialTree');
var BestCanidate = require('./components/convertBestCanidate');
var ColorMesh = require('./components/convertColorMesh');
var MergeSort = require('./components/convertMergeSort');
var CircleTransitions = require('./components/circleTransitions');

module.exports = (
  <Router history={browserHistory} >
    <Route path='/' component={App}>
      <Route path='bubbleChart' component={BubbleChart} />
      <Route path='circleEventHandler' component={CircleEventHandler} />
      <Route path='radialTree' component={RadialTree} />
      <Route path='colorMesh' component={ColorMesh} />
      <Route path='bestCanidate' component={BestCanidate} />
      <Route path='mergeSort' component={MergeSort} />
      <Route path='circleTransitions' component={CircleTransitions} />
    </Route>
  </Router>
)
