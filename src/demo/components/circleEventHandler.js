import React, { Component } from 'react';
import d3 from 'd3';
var d3DataToJSX = require('./../../react-d3/d3DataToJSX');
var D3Component = require('./d3Component');


module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
     var svg = d3.select("body").append("svg")
    .attr({
      width: 500,
      height: 500
    })
  .append("g")
    .attr("transform", "translate(0,0)");

  var node = svg.selectAll(".node")
    .data([10]);
  node.enter().append("circle")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(200,200)"; })
    .attr("r", function(d) { return 50; })
    .attr("fill", function(d) { return "blue"; })
    .on("click", function(){ e.currentTarget.style.fill = 'red'})
    this.setState({d3: node});
    console.log(node);
  },


  render: function() {
    return (
      <div>
        <D3Component data={this.state.d3} />
      </div>
    )
  }
});
