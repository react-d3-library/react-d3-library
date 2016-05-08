import React, { Component } from 'react';
var d3 = require('d3');
var d3DataToJSX = require('./d3DataToJSX');
var ReactFauxDOM = require('react-faux-dom');
var el = ReactFauxDOM.createElement('div');
console.log(el);
export default class App extends Component {

  render() {

  	let dataset = [ 5, 10, 15, 20, 25 ];
  	let circleData = [{"x": 1.0, "y": 1.1}, {"x": 2.0, "y": 2.5}];

  	const bodySelection = d3.select("body");

    const svgSelection = bodySelection.append("svg")
            .attr("width", 50)
            .attr("height", 50);

  	const circles = svgSelection.selectAll("svg")
			.data(circleData)
			.enter().append("circle")
			.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; })
			.attr("r", 2.5);

	const barChart = d3.select('body')
			.selectAll("BarChart")
		    .data(dataset)
		    .enter()
		    .append("div")
		    .attr("class", "bar")
		    .style("height", function(d) {
			    var barHeight = d * 5;  //Scale up by factor of 5
			    return barHeight + "px";
				});

	

	console.log(d3DataToJSX(circles));
	const BarChart = d3DataToJSX(barChart);     

    return (

        <div>{BarChart}</div>
    )
  }
}





