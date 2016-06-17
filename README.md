## react-d3-library
An open source library that will allow developers the ability to reroute D3 output to React’s virtual DOM. Just use your existing D3 code, and with a few simples lines, you can now harness the power of React with the flexibility of D3! React-D3-Library will compile your code into React components, and it also comes with a series of D3 template charts converted to React components for developers who are unfamiliar with D3. Not only do we build fully functional React components, but they utilize the power of D3 to automate scaling ranges, normalizing data, and constructing legends.

![Voronoi](http://i.imgur.com/zwSsPTS.gif) 

### Version
[![npm version](https://badge.fury.io/js/react-d3-library.png)](https://www.npmjs.com/package/react-d3-library)

### Installing

First off, install with:

`npm install --save react-d3-library`

Next, import into your React project:

```javascript
const rd3 = require('react-d3-library');
```

or 

```javascript
import rd3 from 'react-d3-library'
```
### Wiki

If you are using D3 Code that only produces static content, or any functionality you have is embedded in event listeners, check out these two links for instructions:

[D3 Code](https://github.com/react-d3-library/react-d3-library/wiki/D3-Code)
[React Code](https://github.com/react-d3-library/react-d3-library/wiki/React-Code)

If you do have functionality that should trigger on load(transitions, animations, timers) and/or you are using canvas tags you also need to follow these instructions:

[Functionality](https://github.com/react-d3-library/react-d3-library/wiki/Functionality)

If you are using D3 timers and want to be sure to prevent memory leaks take a look at this:

[Timers](https://github.com/react-d3-library/react-d3-library/wiki/Timers)

If you just want some easy to use graphs and charts without writing your own D3 code, checkout our template libaray:

[Templates](https://github.com/react-d3-library/react-d3-library/wiki/Templates)

### Use With Existing D3 Code

Developers can now take their existing D3 code and use React-D3-Library to create React components.
Below is an excerpt of using D3 to create a Bubble Chart with Mike Bostock's D3 code found [here](https://bl.ocks.org/mbostock/4063269).

![BubbleChart](http://i.imgur.com/iBumKRW.png)

```javascript
var diameter = 960,
    format = d3.format(",d"),
    color = d3.scale.category20c();

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select('body').append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

d3.json("flare.json", function(error, root) {
  if (error) throw error;

var bubbles = svg.selectAll(".node")
    .data(bubble.nodes(classes(flare))
    .filter(function(d) { return !d.children; }))
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

//etc...
```

We need to create a `div` element for D3 to build upon before
converting it to a React component,

`var node = document.createElement('div');`

and this **`node`** is what we will have D3 select.

We change the selection from 
```javascript
d3.select('body')
```
to our new **`node`** variable.
```javascript
d3.select(node)
```

This is what the new code should look like:

```javascript
var node = document.createElement('div');

var diameter = 960,
    format = d3.format(",d"),
    color = d3.scale.category20c();

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);
    
var svg = d3.select(node).append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

d3.json("flare.json", function(error, root) {
  if (error) throw error;

var bubbles = svg.selectAll(".node")
    .data(bubble.nodes(classes(flare))
    .filter(function(d) { return !d.children; }))
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

//etc...
```

Just one more step and you are ready to convert everything to React!

Use the `componentDidMount()` React lifecycle method to make the state aware of your new D3 **`node`**. 

Then pass the state as props to the react-d3-library Component `rd3.Component`.

```javascript
import rd3 from 'react-d3-library';
import node from 'd3file';
const RD3Component = rd3.Component;

class my_First_React_D3_Library_Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  componentDidMount() {
    this.setState({d3: node});
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
};
```
And that's it!! Good Job!!


Simple chart components are also available under the `rd3` namespace as shown below

### Available Charts

```
const ScatterPlot = rd3.ScatterPlot;
const PieChart = rd3.PieChart;
const LineChart = rd3.LineChart;
const AreaChart = rd3.AreaChart;
const BarChart = rd3.BarChart;
```

Check out the Wiki to see more about using our [template](https://github.com/react-d3-library/react-d3-library/wiki/Templates) components.

**Due to the recent large influx of emails we have been getting, please note we do plan on releasing more highly available template charts along with accessible D3 and unit tests for open source contributors to help.  

### License
MIT

Because this is an open source project, we are constantly evaluating feedback and continuing to improve upon the content.

Copyright (c) 2016 Andrew Burke, Danny Lee, Dave Loyst [contributors](https://github.com/orgs/react-d3-library/people)
