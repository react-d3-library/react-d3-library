import d3 from 'd3';

const createPieChart = data => {

	const node = document.createElement('div');

  const radius = Math.min(data.width, data.height) / 2;

	const color = d3.scale.ordinal()
	    .range(data.colors);

	const arc = d3.svg.arc()
	    .outerRadius(radius - 10)
	    .innerRadius(0);

	const labelArc = d3.svg.arc()
	    .outerRadius(radius - 40)
	    .innerRadius(radius - 40);

	const pie = d3.layout.pie()
	    .sort(null)
	    .value(d => d.quantity);

	const svg = d3.select(node).append("svg")
	    .attr("width", data.width)
	    .attr("height", data.height)
	    .append("g")
	    .attr("transform", "translate(" + data.width / 2 + "," + data.height / 2 + ")");

	const g = svg.selectAll(".arc")
	  .data(pie(data.dataSet))
	  .enter().append("g")
	  .attr("class", data.arcClass);

	g.append("path")
	  .attr("d", arc)
	  .style("fill", d => color(d.data.label));

	g.append("text")
	  .attr("transform", d => "translate(" + labelArc.centroid(d) + ")")
	  .attr("dy", ".35em")
	  .text(d => d.data.label);

	const type = d => {
	  d.quantity = +d.quantity;
	  return d;
	}

	return node
}

export default createPieChart;