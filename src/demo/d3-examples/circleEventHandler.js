var div = document.createElement("div");
var svg = d3.select(div).append("svg")
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
  .attr("transform", function(d) { return "translate("+d*4+",200)"; })
  .attr("r", function(d) { return d*2; })
  .attr("fill", function(d) { return "blue"; })
  .on("click", function(d){ console.log( arguments ) })

module.exports = div
