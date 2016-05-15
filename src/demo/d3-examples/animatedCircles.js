const d3 = require('d3');

(function() {
  d3.layout.grid = function() {
    var mode = "equal",
        layout = _distributeEqually,
        x = d3.scale.ordinal(),
        y = d3.scale.ordinal(),
        size = [1, 1],
        actualSize = [0, 0],
        nodeSize = false,
        bands = false,
        padding = [0, 0],
        cols, rows;

    function grid(nodes) {
      return layout(nodes);
    }

    function _distributeEqually(nodes) {
      var i = -1,
          n = nodes.length,
          _cols = cols ? cols : 0,
          _rows = rows ? rows : 0,
          col, row;

      if (_rows && !_cols) {
        _cols = Math.ceil(n / _rows)
      } else {
        _cols || (_cols = Math.ceil(Math.sqrt(n)));
        _rows || (_rows = Math.ceil(n / _cols));
      }

      if (nodeSize) {
        x.domain(d3.range(_cols)).range(d3.range(0, (size[0] + padding[0]) * _cols, size[0] + padding[0]));
        y.domain(d3.range(_rows)).range(d3.range(0, (size[1] + padding[1]) * _rows, size[1] + padding[1]));
        actualSize[0] = bands ? x(_cols - 1) + size[0] : x(_cols - 1);
        actualSize[1] = bands ? y(_rows - 1) + size[1] : y(_rows - 1);
      } else if (bands) {
        x.domain(d3.range(_cols)).rangeBands([0, size[0]], padding[0], 0);
        y.domain(d3.range(_rows)).rangeBands([0, size[1]], padding[1], 0);
        actualSize[0] = x.rangeBand();
        actualSize[1] = y.rangeBand();
      } else {
        x.domain(d3.range(_cols)).rangePoints([0, size[0]]);
        y.domain(d3.range(_rows)).rangePoints([0, size[1]]);
        actualSize[0] = x(1);
        actualSize[1] = y(1);
      }

      while (++i < n) {
        col = i % _cols;
        row = Math.floor(i / _cols);

        nodes[i].x = x(col);
        nodes[i].y = y(row);
      }

      return nodes;
    }

    grid.size = function(value) {
      if (!arguments.length) return nodeSize ? actualSize : size;
      actualSize = [0, 0];
      nodeSize = (size = value) == null;
      return grid;
    }

    grid.nodeSize = function(value) {
      if (!arguments.length) return nodeSize ? size : actualSize;
      actualSize = [0, 0];
      nodeSize = (size = value) != null;
      return grid;
    }

    grid.rows = function(value) {
      if (!arguments.length) return rows;
      rows = value;
      return grid;
    }

    grid.cols = function(value) {
      if (!arguments.length) return cols;
      cols = value;
      return grid;
    }

    grid.bands = function() {
      bands = true;
      return grid;
    }

    grid.points = function() {
      bands = false;
      return grid;
    }

    grid.padding = function(value) {
      if (!arguments.length) return padding;
      padding = value;
      return grid;
    }

    return grid;
  };
})();


var width = 960,
    height = 960,
    TAU = Math.PI * 2;

var grid = d3.layout.grid()
  .size([width, height]);

var color = d3.scale.linear()
  .interpolate(d3.interpolateHcl)
  .domain([0, 100])
  .range(["#F66A96", "#3E6E9C"]);

var data = d3.range(25).map(function(d) {
  return {
    id: d,
    size: 1 + Math.floor(Math.random() * 5),
    r: Math.random() * 50,
    color: Math.floor(Math.random() * 100),
    f: (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 10000 + 1000)
  };
});

var svg = d3.select(root).append("svg")
  .attr({
    width: width,
    height: height
  })
.append("g")
  .attr("transform", "translate(0,0)");

var node = svg.selectAll(".node")
  .data(grid(data), function(d) { return d.id; });
node.enter().append("circle")
  .attr("class", "node")
  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
  .attr("r", function(d) { return d.size; })
  .attr("fill", function(d) { return color(d.color); });

// function update(t) {
//   node.attr("transform", function(d) {
//     var alpha = TAU / d.f * (t % d.f);
//     return "translate(" + (d.x + Math.cos(alpha) * d.r) + "," + (d.y + Math.sin(alpha) * d.r) + ")";
//   });
// }

// d3.timer(update);
d3.select(self.frameElement).style("height", height + "px");


module.exports = node;
