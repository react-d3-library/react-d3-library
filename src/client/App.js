import React, { Component } from 'react';
var d3 = require('d3');
var d3DataToJSX = require('./../utils/d3DataToJSX');
var flare = require('./flare');



export default class App extends Component {

  render() {

	var diameter = 960,
	    format = d3.format(",d"),
	    color = d3.scale.category20c();

	var bubble = d3.layout.pack()
	    .sort(null)
	    .size([diameter, diameter])
	    .padding(1.5);


	var svg = d3.select(root).append("svg")
	    .attr("width", diameter)
	    .attr("height", diameter)
	    .attr("class", "bubble");



	  var node = svg.selectAll(".node")
	      .data(bubble.nodes(classes(flare))
	      .filter(function(d) { return !d.children; }))
	    .enter().append("g")
	      .attr("class", "node")
	      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

	  node.append("title")
	      .text(function(d) { return d.className + ": " + format(d.value); });

	  node.append("circle")
	      .attr("r", function(d) { return d.r; })
	      .style("fill", function(d) { return color(d.packageName); });

	  node.append("text")
	      .attr("dy", ".3em")
	      .style("text-anchor", "middle")
	      .text(function(d) { return d.className.substring(0, d.r / 3); });

	// Returns a flattened hierarchy containing all leaf nodes under the flare.
	function classes(flare) {
	  var classes = [];

	  function recurse(name, node) {
	    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
	    else classes.push({packageName: name, className: node.name, value: node.size});
	  }

	  recurse(null, flare);
	  return {children: classes};
	}

	// d3.select(self.frameElement).style("height", diameter + "px");
   //  console.log(root)
  	// let dataset = [ 5, 10, 15, 20, 25 ];

  	// const makeCircles = (num) => {
  	// 	var output = [];
  	// 	for (var i = 0; i < num; i ++) {
  	// 		var cords = {};
  	// 		cords.x = Math.random() * 1350;
  	// 		cords.y = Math.random() * 150;
  	// 		output.push(cords);
  	// 	}
  	// 	return output;
  	// }

  	// let circleData = makeCircles(1000);


  	// const bodySelection = d3.select(root);


   //  const svgSelection = bodySelection.append("svg")
   //          .attr("width", 1350)
   //          .attr("height", 150);

  	// const circles = svgSelection.selectAll("svg")
			// .data(circleData)
			// .enter().append("circle")
			// .attr("cx", function(d) { return d.x; })
			// .attr("cy", function(d) { return d.y; })
			// .attr("r", 2.5);

	  // const barChart = d3.select(root)
			// .selectAll("BarChart")
	  //   .data(dataset)
	  //   .enter()
	  //   .append("div")
	  //   .attr("class", "bar")
	  //   .style("height", function(d) {
		 //    var barHeight = d * 5;  //Scale up by factor of 5
		 //    return barHeight + "px";
			// });



	// const BarChart = d3DataToJSX(barChart);
	// const Circles = d3DataToJSX(circles);
		const circleGraph = d3DataToJSX(node);
    return (

        <div>
        	// {circleGraph}
        </div>
    )
  }
}





