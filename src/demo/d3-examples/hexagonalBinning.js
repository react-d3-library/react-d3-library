var d3 = require('d3');
console.log(d3);
var margin = {top: 40, right: 20, bottom: 20, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var randomX = d3.randomNormal(width / 2, 80),
    randomY = d3.randomNormal(height / 2, 80),
    points = d3.range(2000).map(function() { return [randomX(), randomY()]; });

var hexbin = d3_hexbin.hexbin()
    .extent([[-margin.left, -margin.top], [width + margin.right, height + margin.bottom]])
    .radius(20);

var bins = hexbin(points);

var color = d3.scaleMagma()
    .domain([d3.max(bins, function(d) { return d.length; }), 0]);

var x = d3.scaleIdentity()
    .domain([0, width]);

var y = d3.scaleIdentity()
    .domain([0, height]);

var xAxis = d3.axisTop(x);

var yAxis = d3.axisLeft(y);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "hexagonsHB")
  .selectAll("path")
    .data(bins)
  .enter().append("path")
    .attr("d", hexbin.hexagon())
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    .style("fill", function(d) { return color(d.length); });

svg.append("g")
    .attr("class", "axisHB axis--y")
    .call(yAxis);

svg.append("g")
    .attr("class", "axisHB axis--x")
    .call(xAxis);

module.exports = svg    