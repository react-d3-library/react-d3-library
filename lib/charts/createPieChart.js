const d3 = require('d3');

function createPieChart (data) {

	var div = document.createElement('div');

  var radius = Math.min(data.width, data.height) / 2;

	var color = d3.scale.ordinal()
	    .range(data.colors);

	var arc = d3.svg.arc()
	    .outerRadius(radius - 10)
	    .innerRadius(0);

	var labelArc = d3.svg.arc()
	    .outerRadius(radius - 40)
	    .innerRadius(radius - 40);

	var pie = d3.layout.pie()
	    .sort(null)
	    .value(function(d) { return d.quantity; });

	var svg = d3.select(div).append("svg")
	    .attr("width", data.width)
	    .attr("height", data.height)
	    .append("g")
	    .attr("transform", "translate(" + data.width / 2 + "," + data.height / 2 + ")");

	var g = svg.selectAll(".arc")
	  .data(pie(data.dataSet))
	  .enter().append("g")
	  .attr("class", data.arcClass);

	g.append("path")
	  .attr("d", arc)
	  .style("fill", function(d) { return color(d.data.label); });

	g.append("text")
	  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
	  .attr("dy", ".35em")
	  .text(function(d) { return d.data.label; });

	function type(d) {
	  d.quantity = +d.quantity;
	  return d;
	}

	return div
}



module.exports = createPieChart;