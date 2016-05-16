//d3 v3
var d3 = require('d3');
var div = document.createElement('div');

var mouse = [480, 250],
    count = 0;

var svg = d3.select(div).append("svg")
    .attr("width", 960)
    .attr("height", 500);

var g = svg.selectAll("g")
    .data(d3.range(25))
  .enter().append("g")
    .attr("transform", "translate(" + mouse + ")")

g.append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -12.5)
    .attr("y", -12.5)
    .attr("width", 25)
    .attr("height", 25)
    .attr("transform", function(d, i) { return "scale(" + (1 - d / 25) * 20 + ")"; })
    .style("fill", d3.scale.category20c());

g.datum(function(d) {
  return {center: mouse.slice(), angle: 0};
});
//console.log(svg[0][0].childNodes);
svg.on('mousemove', function() {
  var nodes = e.currentTarget.childNodes;
  for (var key in nodes) {
    if (!isNaN(key)) {
    // console.log(nodes[key].children[0]);
    //  nodes[key].children[0].setAttribute('transfrom', 'translate(' + e.pageX + ', ' + e.pageY + ')rotate(35)');
      nodes[key].children.setAttribute('transfrom', 'translate(' + e.pageX + ', ' + e.pageY + ')rotate(35)');

      // console.log(nodes[0].children[0].transform);
      // console.log(e.pageX, e.pageY);
      // console.log(this.onMouseMove);
    }
  }
  //node.setAttribute('transfrom', 'translate(' + e.pageX + ', ' + e.pageY + ')rotate(35)')
});

//target all children of svg and change transform on them
//keep track of timer in background
//svg.on('mousemove', function() {e.currentTarget.setAttribute('transform', 'translate(' + e.pageX + ', ' + e.pageY + ')rotate(35)')});

d3.timer(function() {
  count++;
  g.attr("transform", function(d, i) {
    d.center[0] += (mouse[0] - d.center[0]) / (i + 5);
    d.center[1] += (mouse[1] - d.center[1]) / (i + 5);
    d.angle += Math.sin((count + i) / 10) * 7;
    return "translate(" + d.center + ")rotate(" + d.angle + ")";
  });
});


module.exports = div;