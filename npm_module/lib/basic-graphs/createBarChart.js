const d3 = require('d3');

function createBarChart (data) {

	if (data.fill) {
		data.dataSet.forEach((el, i) => el.fill = data.fill[i]);
	}

	var div = document.createElement('div');

	var margin = data.margins,
	    width = data.width - margin.left - margin.right,
	    height = data.height - margin.top - margin.bottom;

	var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);

	var y = d3.scale.linear().range([height, 0]);

	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left")
	    .ticks(10);

	var svg = d3.select(div).append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", 
	          "translate(" + margin.left + "," + margin.top + ")");
	  
	x.domain(data.dataSet.map(function(d) { return d.label; }));
	y.domain([0, d3.max(data.dataSet, function(d) { return d.value; })]);

	svg.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis)
	  .selectAll("text")
	    .style("text-anchor", "end")
	    .attr("dx", "-.8em")
	    .attr("dy", "-.55em")
	    .attr("transform", "rotate(-90)" );

	svg.append("g")
	    .attr("class", "y axis")
	    .call(yAxis)
	  .append("text")
	    .attr("transform", "rotate(-90)")
	    .attr("y", 6)
	    .attr("dy", ".71em")
	    .style("text-anchor", "end")
	    .text(data.yAxisLabel);

	svg.selectAll("bar")
	    .data(data.dataSet)
	  .enter().append("rect")
	    .style("fill", d => d.fill || "steelblue")
	    .attr("x", d => x(d.label))
	    .attr("width", x.rangeBand())
	    .attr("y", d => y(d.value))
	    .attr("height", d => height - y(d.value))
	    .attr('fill', d => d.fill);

	return div;
}


module.exports = createBarChart;