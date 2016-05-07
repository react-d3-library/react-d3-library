import React, {Component} from 'react';
var d3 = require('d3');
var $ = require('react-query');


export default class BarChart extends Component {

	componentDidMount() {
		var dataset = [ 5, 10, 15, 20, 25 ];

  	var w = 500;
  	var h = 250;
  	var barPadding = 1;

  	var test = d3.select(this);
  	console.log(test);

	d3.select(BarChart).append('svg')
			.attr('width', w)
			.attr('height', h)
			.selectAll('rect')
	    .data(dataset)
	    .enter()
	    .append("rect")
	    .attr('x', function(d, i) {
	    	return i * (w / dataset.length);
	    })
	    .attr('y', function(d) {
	    	return h - (d * 10);
	    })
	    .attr('width', w / dataset.length - barPadding)
	    .attr('height', function(d) {
	    	return d * 10;
	    });      
	}

  render() {

    return (
      <div id='BarChart'>
      </div>
    )
  }
}

