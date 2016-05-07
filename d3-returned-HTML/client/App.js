import React, { Component } from 'react';
var d3 = require('d3');
var HTMLtoJSX = require('htmltojsx');
var converter = new HTMLtoJSX({
  createClass: true,
  outputClassName: 'AwesomeComponent'
});


var getStyles = styleObject => {
  		var styles = {}
  		for(var key in styleObject) {
  			if(styleObject[key]) styles[key] = styleObject[key];
  		}
  		return styles;
}

export default class App extends Component {

 	

  render() {
  	var dataset = [ 5, 10, 15, 20, 25 ];
	var barChart = d3.select('body').selectAll("BarChart")
		    .data(dataset)
		    .enter()
		    .append("div")
		    .attr("class", "bar")
		    .style("height", function(d) {
			    var barHeight = d * 5;  //Scale up by factor of 5
			    return barHeight + "px";
				});
	var data = barChart[0].map(obj => {
		var output = {};
		output.tag = obj.localName;
		output.className = obj.className;
		output.style = getStyles(obj.style);
		return output;
	})        
  	
  	
	console.log(barChart[0][0].style)
    console.log(data)

    return (

            <div></div>

    )
  }
}





