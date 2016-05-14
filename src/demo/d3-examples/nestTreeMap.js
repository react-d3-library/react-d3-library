var d3 = require('d3');

var width = 960,
    height = 1060;

var format = d3.formatEnGb.format("$,d");

var nest = d3.nest()
    .key(function(d) { return d.Supplier_name; })
    .key(function(d) { return d.Destination; })
    .key(function(d) { return d.Ticket_class_description; })
    .rollup(function(d) { return d3.sum(d, function(d) { return d.Paid_fare; }); });

var treemap = d3.treemap()
    .size([width, height])
    .padding(1)
    .round(true);

d3.csv("Home_Office_Air_Travel_Data_2011.csv", type, function(error, data) {
  if (error) throw error;

  var d3root = d3.hierarchy({values: nest.entries(data)}, function(d) { return d.values; })
      .sum(function(d) { return d.values; })
      .sort(function(a, b) { return b.value - a.value; });

  treemap(d3root);

  var node = d3.select(root)
    .selectAll(".node")
    .data(d3root.leaves())
    .enter().append("div")
      .attr("class", "nodeNTM ")
      .style("left", function(d) { return d.x0 + "px"; })
      .style("top", function(d) { return d.y0 + "px"; })
      .style("width", function(d) { return d.x1 - d.x0 + "px"; })
      .style("height", function(d) { return d.y1 - d.y0 + "px"; });

  node.append("div")
      .attr("class", "node-labelNTM ")
      .text(function(d) { return d.parent.parent.data.key + " to " + d.parent.data.key + "\n" + d.data.key; });

  node.append("div")
      .attr("class", "node-valueNTM ")
      .text(function(d) { return format(d.value); });
});

function type(d) {
  d.Paid_fare = +d.Paid_fare;
  return d;
}

module.exports = node;