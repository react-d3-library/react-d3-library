import d3 from 'd3';

const createAreaChart = data => {

	const node = document.createElement('div');

	const margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = data.width  - margin.left - margin.right,
    height = data.height - margin.top - margin.bottom;

	const x = d3.scale.linear()
	    .range([0, width]);

	const y = d3.scale.linear()
	    .range([height, 0]);

	const xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");

	const yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left");

	const area = d3.svg.area()
	    .x(d => x(d.xValue))
	    .y0(height)
	    .y1(d => y(d.yValue));

	const svg = d3.select(node).append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	data.dataSet.forEach(d => {
		d.xValue = +d.xValue;
		d.yValue = +d.yValue;
	});

	x.domain(d3.extent(data.dataSet, d => d.xValue));
	y.domain([0, d3.max(data.dataSet, d => d.yValue)]);

	svg.append("path")
	  .datum(data.dataSet)
	  .attr("class", data.area_class)
	  .attr("d", area);

	svg.append("g")
	  .attr("class", "x " + data.axisLine_class)
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis)
	  .append("text")
	  .attr("y", 20)
	  .attr("dy", ".71em")
	  .style("text-anchor", "middle")
	  .text(data.x_display_name);

	svg.append("g")
	  .attr("class", "y " + data.axisLine_class)
	  .call(yAxis)
	  .append("text")
	  .attr("transform", "rotate(-90)")
	  .attr("y", 6)
	  .attr("dy", ".71em")
	  .style("text-anchor", "end")
	  .text(data.y_display_name);

	return node;
}

export default createAreaChart;