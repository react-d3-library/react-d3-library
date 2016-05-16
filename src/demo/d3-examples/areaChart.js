const createAreaChart = require('./../basic-graphs/createAreaChart');

// Build data for a class pie chart
var data = {};

// Define the width and height of the chart
data.width = 960;
data.height = 500;

// Display names to run along x and y axis
data.x_display_name = 'X VALUE';
data.y_display_name = 'Y VALUE';

// CSS class names for styling
data.area_class = 'area';
data.axisLine_class = 'axisLine';

/* 

Example Styling:

.axisLine path,
.axisLine line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.area {
  fill: forestgreen;
}

*/

// Create collection of x and y data, x values must be sorted
data.dataSet = [

	{xValue : 1, yValue: 40},
	{xValue : 2, yValue: 63},
	{xValue : 3, yValue: 52},
	{xValue : 4, yValue: 59},
	{xValue : 5, yValue: 79},
	{xValue : 6, yValue: 76},
	{xValue : 7, yValue: 68},
	{xValue : 8, yValue: 86},
	{xValue : 9, yValue: 94},
	{xValue : 10, yValue: 100},
	{xValue : 11, yValue: 92},
	{xValue : 12, yValue: 111},
	{xValue : 13, yValue: 97},
	{xValue : 14, yValue: 120}

] 

module.exports = createAreaChart(data);