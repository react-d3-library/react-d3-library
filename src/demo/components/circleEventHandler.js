import React, { Component } from 'react';
import d3 from 'd3';
const d3DataToJSX = require('./../../react-d3/d3DataToJSX');
const D3StateContainer = require('./d3Components/d3StateContainer');


module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    var div = document.createElement("div");

     var svg = d3.select(div).append("svg")
    .attr({
      width: 500,
      height: 500
    })
  .append("g")
    .attr("transform", "translate(0,0)");

  var node = svg.selectAll(".node")
    .data([50,50,50,50,50,50,50,50]);
  node.enter().append("circle")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(200,200)"; })
    .attr("r", function(d) { return d; })
    .attr("fill", function(d) { return "blue"; })
    .on("click", function(){ e.currentTarget.style.fill = 'red'; })
    console.log(svg);
    this.setState({d3: svg});
  },

  render: function() {
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});
