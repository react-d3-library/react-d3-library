const createLineChart = require('./../basic-graphs/createLineChart');

var data = {};

// Set margins for bar graph within svg element
data.margins = {top: 20, right: 20, bottom: 30, left: 50};

// Define label of y-axis
data.YAxisLabel = 'My Money After Graduating Codesmith!';

// Define the width of the svg element on the page
data.width = 960;

// Define the height of the bar chart
data.height = 500;

// Define if x-axis ticks appear above or below axis
// "top" or "bottom"
data.orientXTicks = 'bottom';

// Define if y-axis ticks appear to left or right of axis
// "left" or "right"
data.orientYTicks = 'left';

// If importing in tsv file, indicate filename as string
// If no tsv file, leave as blank string
// ** tsv file should be served as a static file **
data.tsvFileName = 'lineChart.tsv';

// If importing in csv file, indicate filename as string
// If no csv file, leave as blank string
// ** csv file should be served as a static file **
data.csvFileName = '';

// For manual data, times should be in date format
// Values will be the height for each instance in the line
data.dataset = [
	{ time: '24-Apr-07', value:	93.24 },
	{ time: '25-Apr-07', value:	95.35 },
	{ time: '26-Apr-07', value:	98.84 },
	{ time: '27-Apr-07', value:	99.92 },
	{ time: '30-Apr-07', value:	99.80 },
	{ time: '1-May-07', value:99.47 },
 	{ time: '2-May-07', value:100.39 }, 
	{ time: '3-May-07', value:100.40 }, 
	{ time: '4-May-07', value:100.81 }, 
	{ time: '7-May-07', value:103.92 }, 
	{ time: '8-May-07', value:105.06 }, 
	{ time: '9-May-07', value:106.88 }, 
	{ time: '10-May-07', value:	107.34 },
	{ time: '11-May-07', value:	108.74 },
	{ time: '14-May-07', value:	109.36 },
	{ time: '15-May-07', value:	107.52 },
	{ time: '16-May-07', value:	107.34 },
	{ time: '17-May-07', value:	109.44 },
	{ time: '18-May-07', value:	110.02 },
	{ time: '21-May-07', value:	111.98 },
	{ time: '22-May-07', value:	113.54 },
	{ time: '23-May-07', value:	112.89 },
	{ time: '24-May-07', value:	110.69 },
	{ time: '25-May-07', value:	113.62 },
	{ time: '29-May-07', value:	114.35 },
	{ time: '30-May-07', value:	118.77 },
	{ time: '31-May-07', value:	121.19 }
];

// Set CSS class for x-axis
// Multiple classes separated by a space
data.XAxisClasses = 'lineChartX lineChartAxis';

// Set CSS class for y-axis
// Multiple classes separated by a space
data.YAxisClasses = 'lineChartY lineChartAxis';

// Set CSS class for line
data.lineClass = 'lineChart';

/* Example CSS

.lineChartAxis path,
.lineChartAxis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.lineChartX.axis path {
  display: none;
}

.lineChart {
  fill: none;
  stroke: steelblue;
  stroke-width: 1.5px;
}

*/

module.exports = createLineChart(data);