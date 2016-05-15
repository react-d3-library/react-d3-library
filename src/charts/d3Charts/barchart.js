var d3 = require('d3');
var div = document.createElement('div');

// var dataset = {
//   svgHeight: 100,
//   svgWidth: 500,
//   dataset: [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ],
//   barHeightFactor: 4,
//   barPadding: 1,
//   fill: 'rgb(73, 26, 5)'
// }

//Create SVG element
// var xScale = d3.scale.linear()
//    .domain([0, d3.max(dataset, d => d[0])])
//    .range([dataset.barPadding, dataset.svgWidth - dataset.barPadding * 2]);

// var xAxis = d3.svg.axis()
//     .scale(xScale)
//     .orient("bottom");

// var svg = d3.select(div)
//   .append("svg")
//     .attr("width", dataset.svgWidth)
//     .attr("height", dataset.svgHeight);

// svg.selectAll("rect")
//     .data(dataset.dataset)
//     .enter()
//   .append("rect")
//     .attr("x", (d, i) => i * (dataset.svgWidth / dataset.dataset.length))
//     .attr("y", d => dataset.svgHeight - (d * dataset.barHeightFactor))
//     .attr("width", dataset.svgWidth / dataset.dataset.length - dataset.barPadding)
//     .attr("height", d => d * dataset.barHeightFactor)
//     .attr("fill", dataset.fill);

// svg.append("g")
//     .call(xAxis);
var data = {};

data.margin = {top: 20, right: 20, bottom: 70, left: 40};
data.width = 600;
data.height = 300;


var margin = data.margin,
    width = data.width - margin.left - margin.right,
    height = data.height - margin.top - margin.bottom;

var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.5);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

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

var data = [
    {date: "Jan. '13'", value: 53},
    {date: "Feb. '13'", value: 165},
    {date: "Mar. '13'", value: 269},
    {date: "Apr. '13'", value: 344},
    {date: "May  '13'", value: 376},
    {date: "Jun. '13'", value: 410},
    {date: "Jul. '13'", value: 421},
    {date: "Aug. '13'", value: 405},
    {date: "Sep. '13'", value: 376},
    {date: "Oct. '13'", value: 359},
    {date: "Nov. '13'", value: 392},
    {date: "Dec. '13'", value: 433},
    {date: "Jan. '14'", value: 455},
    {date: "Feb. '14'", value: 478}
];

// d3.csv("bar-data.csv", function(error, data) {

//     data.forEach(function(d) {
//         d.date = d.date;
//         d.value = +d.value;
//     });
//     console.log(data);
  
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

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
      .text("Value ($)");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "steelblue")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });
// });

module.exports = div;