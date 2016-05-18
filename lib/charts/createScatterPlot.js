const d3 = require('d3');

function createPieChart (data) {

	var div = document.createElement('div');

	var width = data.width - data.margin.left - data.margin.right;
	var height = data.height - data.margin.top - data.margin.bottom;

	var x = d3.scale.linear().range([0, width]);
	var y = d3.scale.linear().range([height, 0]);

	var color = d3.scale.category10();

	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left");

	var svg = d3.select(div).append("svg")
	    .attr("width", width + data.margin.left + data.margin.right)
	    .attr("height", height + data.margin.top + data.margin.bottom)
	    .append("g")
	    .attr("transform", "translate(" + data.margin.left + "," + data.margin.top + ")");

    data.dataSet.forEach(function(d) {
        d.y_value = +d.y_value;
        d.x_value = +d.x_value;
    });

    x.domain(d3.extent(data.dataSet, function(d) { return d.x_value; })).nice();
    y.domain(d3.extent(data.dataSet, function(d) { return d.y_value; })).nice();

    svg.append("g")
        .attr("class", data.x_axis_class)
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("class", data.label_class)
        .attr("x", width)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text(data.x_display_name);

    svg.append("g")
        .attr("class", data.y_axis_class)
        .call(yAxis)
        .append("text")
        .attr("class", data.label_class)
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(data.y_display_name)

    svg.selectAll(".dot")
        .data(data.dataSet)
        .enter().append("circle")
        .attr("class", data.dot_class)
        .attr("r", 3.5)
        .attr("cx", function(d) { return x(d.x_value); })
        .attr("cy", function(d) { return y(d.y_value); })
        .style("fill", function(d) { return color(d.type); });

    var legend = svg.selectAll(".legend")
        .data(color.domain())
        .enter().append("g")
        .attr("class", data.legend_class)
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) { return d; });

    return div;    
}

module.exports = createPieChart;	