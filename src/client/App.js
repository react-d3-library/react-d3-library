import React, { Component } from 'react';
var d3 = require('d3');
var d3DataToJSX = require('./../react-d3/d3DataToJSX');
var flare = require('./../react-d3/flare');



export default class App extends Component {

  render() {

    var width = 960,
        height = 500;

    var svg = d3.select('body').append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var gradient = svg.append("defs").append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "20%")
        .attr("x2", "20%")
        .attr("y2", "100%");

    gradient.append("stop")
        .attr("offset", "20%")
        .attr("stop-color", "#ccf");

    gradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "#1C425C");

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#19162B");

    // could use transparent gradient overlay to vary raindrop color
    svg.selectAll("path")
        .data(d3.range(358))
      .enter().append("path")
        .attr("fill", "url(#gradient)")
        .attr("d", function() { return raindrop(10 + Math.random() * 200); })
        .attr("transform", function(d) {
          return "rotate(" + d + ")"
              + "translate(" + (height / 4 + Math.random() * height / 6) + ",0)"
              + "rotate(90)";
        });

    // size is linearly proportional to square pixels (not exact, yet)
    function raindrop(size) {
      var r = Math.sqrt(size / Math.PI);
      return "M" + r + ",0"
          + "A" + r + "," + r + " 0 1,1 " + -r + ",0"
          + "C" + -r + "," + -r + " 0," + -r + " 0," + -3*r
          + "C0," + -r + " " + r + "," + -r + " " + r + ",0"
          + "Z";
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
	const Raindrops = d3DataToJSX(svg);

    return (

        <div>
        	<button onCLick = {} >click me</button>
        	{Raindrops}
        </div>
    )
  }
}





