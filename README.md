## react-d3-library
A library that will allow developers the ability to reroute D3 output to React’s virtual DOM. The backbone of our product is an algorithm that not only converts the HTML data from D3 into React Components but structures that data into a state object that the components reference to update. React D3 Library will compile your code into React components, and it also comes with a series of functions for developers who are unfamiliar with D3. These functions can be called with raw data, and instances of simple data visualizations, such as pie charts, bar graphs, and scatter plots, are returned. Not only do these functions build fully functional React components, but they utilize the power of D3 to automate scaling ranges, normalizing data, and constructing legends. Some examples are shown below, and others will be able to be viewed [here](http://someplace) with corresponding code examples.

**Caution:** This library is still in alpha state and APIs will change.

### Version
[![npm version](https://badge.fury.io/js/react-d3-library.png)](https://www.npmjs.com/package/react-d3-library)

### Basic usage

First off, install with:
`npm install [--save] react-d3-library`

Next, import into your React project:

`var rd3 = require('react-d3');`

or with ES6: 

`import rd3 from 'react-d3-library'`

//TODO :
//Add directions for implementing rd3.Component

Simple chart templates are also available under the `rd3` namespace as shown below

### Available Charts

```
var ScatterPlot = rd3.createScatterPlot;
var PieChart = rd3.createPieChart;
var LineChart = rd3.createLineChart;
var AreaChart = rd3.createAreaChart;
var BarChart = rd3.createBarChart;
```

### License
MIT

Copyright (c) 2016 Andrew Burke, Danny Lee, Dave Loyst [contributors](https://github.com/orgs/react-d3-library/people)