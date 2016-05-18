// Build data for a classic pie chart
var data = {}

// Labels are displayed in component, quantities are calculated to define size of each slice
data.dataSet = [
	 { label : 'dogs', quantity: 140},
	 { label : 'cats', quantity: 91},
	 { label : 'hamsters', quantity: 88},
	 { label : 'parrots', quantity: 74},
	 { label : 'rabbits', quantity: 63},
	 { label : 'iguanas', quantity: 50},
	 { label : 'dragons', quantity: 65}
]

// Colors for each slice
data.colors = ["blue", "orange", "purple", 'green', 'red', "yellow", 'lemonChiffon'];

//Define the width of the svg element on the page
data.width = 960;

//Define the actual height(diameter) of the pie chart, this should not be larger than the width
data.height = 700;

//Define a class for the svg element for styling
data.arcClass = 'arc';

/* EXAMPLE CSS

.arc text {
  font: 14px sans-serif;
  text-anchor: middle;
}
.arc path {
  stroke: #fff;
}

*/

module.exports = data;
