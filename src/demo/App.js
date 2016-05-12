import React, { Component } from 'react';
var d3 = require('d3');
var d3DataToJSX = require('./../react-d3/d3DataToJSX');

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     t: 0
  //   }

  //   this.update = this.update.bind(this);
  // }

  // componentDidMount() {
  //   d3.timer(this.update);
  // }

  // update(t) {
  //   this.setState({t});
  // }

  render() {
          // {d3DataToJSX(node)}
    var svg = d3.select("body").append("svg")
      .attr({
        width: 500,
        height: 500
      })
    .append("g")
      .attr("transform", "translate(0,0)");

    var node = svg.selectAll(".node")
      .data([50]);
    node.enter().append("circle")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(200,200)"; })
      .attr("r", function(d) { return 50; })
      .attr("fill", function(d) { return "blue"; })
      .on("click", function(){d3.select(this).style("fill", "green");})
      .on("hover", function(){d3.select(this).style("fill", "green");})
    return (
        <div>
          {d3DataToJSX(node)}
        </div>
    )
  }
}





