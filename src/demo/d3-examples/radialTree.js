var d3 = require('d3');
var flare = require('./flare');
var div = document.createElement('div');

var diameter = 960;

var tree = d3.layout.tree()
    .size([360, diameter / 2 - 120])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var svg = d3.select(div).append("svg")
    .attr("width", diameter)
    .attr("height", diameter - 150)
    .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

var nodes = tree.nodes(flare),
    links = tree.links(nodes);

var link = svg.selectAll(".link")
    .data(links)
    .enter().append("path")
    .attr("class", "linkRT")
    .attr("d", diagonal);

var node = svg.selectAll(".node")
    .data(nodes)
    .enter().append("g")
    .attr("class", "nodeRT")
    .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

node.append("circle")
    .attr("r", 4.5);

node.append("text")
    .attr("dy", ".31em")
    .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
    .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
    .text(function(d) { return d.name; });


d3.select(self.frameElement).style("height", diameter - 150 + "px");

module.exports = div