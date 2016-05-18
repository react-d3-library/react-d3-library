// Build data for a classic bar chart
var data = {}

// Labels are displayed in component, quantities are calculated to define height of each bar
data.dataSet = [
    {label: "Jan. '13'", value: 53},
    {label: "Feb. '13'", value: 165},
    {label: "Mar. '13'", value: 269},
    {label: "Apr. '13'", value: 344},
    {label: "May  '13'", value: 376},
    {label: "Jun. '13'", value: 410},
    {label: "Jul. '13'", value: 421},
    {label: "Aug. '13'", value: 405},
    {label: "Sep. '13'", value: 376},
    {label: "Oct. '13'", value: 359},
    {label: "Nov. '13'", value: 392},
    {label: "Dec. '13'", value: 433},
    {label: "Jan. '14'", value: 455},
    {label: "Feb. '14'", value: 478}
];

//Set margins for bar graph within svg element
data.margins = {top: 20, right: 20, bottom: 70, left: 40};

//Define label of y-axis
data.yAxisLabel = 'My Money!';

// Colors are optional for each bar
// If colors are not given, bars will default to 'steelblue'
data.fill = ["blue", "orange", "purple", 'green', 'red', "yellow", 'lemonChiffon'];

//Define the width of the svg element on the page
data.width = 960;

//Define the height of the bar chart
data.height = 700;

//Define a class for the svg element for styling
data.barClass = 'bar';

/* EXAMPLE CSS

.bar text {
  font: 14px sans-serif;
  text-anchor: middle;
}

*/

module.exports = data;