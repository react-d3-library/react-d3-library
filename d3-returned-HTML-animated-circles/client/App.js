import React, { Component } from 'react';
var d3 = require('d3');
var d3DataToJSX = require('./d3DataToJSX');


export default class App extends Component {

  render() {
    console.log(root)
  	let dataset = [ 5, 10, 15, 20, 25 ];

  	const makeCircles = (num) => {
  		var output = [];
  		for (var i = 0; i < num; i ++) {
  			var cords = {};
  			cords.x = Math.random() * 1350;
  			cords.y = Math.random() * 150;
  			output.push(cords);
  		}
  		return output;
  	}

  	let circleData = makeCircles(1000);


  	const bodySelection = d3.select(root);


    const svgSelection = bodySelection.append("svg")
            .attr("width", 1350)
            .attr("height", 150);

  	const circles = svgSelection.selectAll("svg")
			.data(circleData)
			.enter().append("circle")
			.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; })
			.attr("r", 2.5);

	  const barChart = d3.select(root)
			.selectAll("BarChart")
	    .data(dataset)
	    .enter()
	    .append("div")
	    .attr("class", "bar")
	    .style("height", function(d) {
		    var barHeight = d * 5;  //Scale up by factor of 5
		    return barHeight + "px";
			});



	const BarChart = d3DataToJSX(barChart);
	const Circles = d3DataToJSX(circles);
    return (

        <div>

        </div>
    )
  }
}





