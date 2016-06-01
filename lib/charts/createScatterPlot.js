import d3 from 'd3';

const createScatterPlot = data => {

    const node = document.createElement('div');

    const width = data.width - data.margin.left - data.margin.right;
    const height = data.height - data.margin.top - data.margin.bottom;

    const x = d3.scale.linear().range([0, width]);
    const y = d3.scale.linear().range([height, 0]);

    const color = d3.scale.category10();

    const xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    const yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    const svg = d3.select(node).append("svg")
        .attr("width", width + data.margin.left + data.margin.right)
        .attr("height", height + data.margin.top + data.margin.bottom)
        .append("g")
        .attr("transform", "translate(" + data.margin.left + "," + data.margin.top + ")");

    data.dataSet.forEach(d => {
        d.y_value = +d.y_value;
        d.x_value = +d.x_value;
    });

    x.domain(d3.extent(data.dataSet, d => d.x_value)).nice();
    y.domain(d3.extent(data.dataSet, d => d.y_value)).nice();

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
        .attr("cx", d => x(d.x_value))
        .attr("cy", d => y(d.y_value))
        .style("fill", d => color(d.type));

    const legend = svg.selectAll(".legend")
        .data(color.domain())
        .enter().append("g")
        .attr("class", data.legend_class)
        .attr("transform", (d, i) => "translate(0," + i * 20 + ")");

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
        .text(d => d);

    return node;    
}

export default createScatterPlot;   