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

	{xValue : 1, yValue: 40}, {xValue : 2, yValue: 63}, {xValue : 3, yValue: 52}, {xValue : 4, yValue: 59}, 
	{xValue : 5, yValue: 79}, {xValue : 6, yValue: 76}, {xValue : 7, yValue: 68}, {xValue : 8, yValue: 86}, 
	{xValue : 9, yValue: 94}, {xValue : 10, yValue: 100}, {xValue : 11, yValue: 92}, {xValue : 12, yValue: 111}, 
	{xValue : 13, yValue: 97}, {xValue : 14, yValue: 120}, {xValue : 15, yValue: 95}, {xValue : 16, yValue: 83},
	{xValue : 17, yValue: 78}, {xValue : 18, yValue: 105}, {xValue : 19, yValue: 92}, {xValue : 20, yValue: 72},
	{xValue : 21, yValue: 79}, {xValue : 22, yValue: 83}, {xValue : 23, yValue: 99}, {xValue : 24, yValue: 92},
	{xValue : 25, yValue: 85}, {xValue : 26, yValue: 87}, {xValue : 27, yValue: 93}, {xValue : 28, yValue: 96},
	{xValue : 29, yValue: 89}, {xValue : 30, yValue: 95}, {xValue : 31, yValue: 84}, {xValue : 32, yValue: 100},
	{xValue : 33, yValue: 90}, {xValue : 34, yValue: 102}, {xValue : 35, yValue: 101}, {xValue : 36, yValue: 109},
	{xValue : 37, yValue: 118}, {xValue : 38, yValue: 110}, {xValue : 39, yValue: 120}, {xValue : 40, yValue: 111},
	{xValue : 41, yValue: 99}, {xValue : 42, yValue: 116}, {xValue : 43, yValue: 106}, {xValue : 44, yValue: 105},
	{xValue : 45, yValue: 125}, {xValue : 46, yValue: 127}, {xValue : 47, yValue: 117}, {xValue : 48, yValue: 140}

] 

module.exports = data;