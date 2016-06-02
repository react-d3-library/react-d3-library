import d3 from 'd3';

const createBarChart = data => {

	// if user has defined colors for bars, designate fill colors
	if (data.fill) {
		data.dataSet.forEach((el, i) => el.fill = data.fill[i]);
	}

	// create html element for d3 to work on
	const node = document.createElement('div');

	// establish margins based on user input
	const margin = data.margins,
	    width = data.width - margin.left - margin.right,
	    height = data.height - margin.top - margin.bottom;

	// ordinal scale for x-axis since not a numerical range
	const x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);

	// linear scale for y-axis as it will entail numerical values
	const y = d3.scale.linear().range([height, 0]);

	// scales x-axis based on user's defined width
	const xAxis = d3.svg.axis()
	    .scale(x)
	    // applies labels below x-axis
	    .orient("bottom");

	// scales y-axis based on user's defined height
	const yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left")
	    // apply tick intervals based on user input
	    .ticks(data.ticks);

	// select created html element and append svg
	// apply attributes to svg and append g elements
	const svg = d3.select(node).append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", 
	          "translate(" + margin.left + "," + margin.top + ")");
	
	// scale x-axis based on amount of labels provided by user
	x.domain(data.dataSet.map(d => d.label));

	// scale y-axis based on range of values provided by user
	y.domain([0, d3.max(data.dataSet, d => d.value)]);

	// append g elements responsible for x-axis label properties
	svg.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis)
	  .selectAll("text")
	    .style("text-anchor", "end")
	    .attr("dx", "-.8em")
	    .attr("dy", "-.55em")
	    .attr("transform", "rotate(-90)" );

	// append g elements responsible for y-axis tick and label properties
	svg.append("g")
	    .attr("class", "y axis")
	    .call(yAxis)
	  .append("text")
	    .attr("transform", "rotate(-90)")
	    .attr("y", 6)
	    .attr("dy", ".71em")
	    .style("text-anchor", "end")
	    .text(data.yAxisLabel);

	// bind user data to rectangles that will be appended to svg
	svg.selectAll("bar")
	    .data(data.dataSet)
	  .enter().append("rect")
	  	// if user defined fill colors, they will be assigned here
	    .style("fill", d => d.fill || "steelblue")
	    .attr("x", d => x(d.label))
	    .attr("width", x.rangeBand())
	    .attr("y", d => y(d.value))
	    .attr("height", d => height - y(d.value))
	    .attr('fill', d => d.fill);

	// return built up html tree to be compiled to react elements
	return node;
}

export default createBarChart;