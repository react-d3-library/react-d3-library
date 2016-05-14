var d3 = require('d3');
var div = document.createElement('div');

(function() {
  var radians = Math.PI / 180;

  d3.scale.cubehelix = function() {
    return d3.scale.linear()
        .range([d3.hsl(300, .5, 0), d3.hsl(-240, .5, 1)])
        .interpolate(d3.interpolateCubehelix);
  };

  d3.interpolateCubehelix = d3_interpolateCubehelix(1);
  d3.interpolateCubehelix.gamma = d3_interpolateCubehelix;

  function d3_interpolateCubehelix(γ) {
    return function(a, b) {
      a = d3.hsl(a);
      b = d3.hsl(b);

      var ah = (a.h + 120) * radians,
          bh = (b.h + 120) * radians - ah,
          as = a.s,
          bs = b.s - as,
          al = a.l,
          bl = b.l - al;

      if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
      if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;

      return function(t) {
        var h = ah + bh * t,
            l = Math.pow(al + bl * t, γ),
            a = (as + bs * t) * l * (1 - l);
        return "#"
            + hex(l + a * (-0.14861 * Math.cos(h) + 1.78277 * Math.sin(h)))
            + hex(l + a * (-0.29227 * Math.cos(h) - 0.90649 * Math.sin(h)))
            + hex(l + a * (+1.97294 * Math.cos(h)));
      };
    };
  }

  function hex(v) {
    var s = (v = v <= 0 ? 0 : v >= 1 ? 255 : v * 255 | 0).toString(16);
    return v < 0x10 ? "0" + s : s;
  }
})();

var n = 100,
    array = d3.shuffle(d3.range(n)),
    arrays = mergesort(array.slice()),
    elements = d3.range(n).map(function(i) { return {value: i, indexes: []}; });

var color = d3.scale.cubehelix()
    .domain([0, n / 2, n - 1])
    .range([d3.hsl(-40, 1, .4), d3.hsl(60, 1, 1), d3.hsl(160, 1, .4)]);

arrays.forEach(function(array, t) {
  array.forEach(function(value, i) {
    elements[value].indexes.push({time: t, index: i});
  });
});

var margin = {top: 20, right: 20, bottom: 20, left: 20},
    strokeWidth = 6,
    width = 960 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .domain(d3.range(n))
    .rangePoints([0, width]);

var y = d3.scale.ordinal()
    .domain(d3.range(arrays.length))
    .rangePoints([0, height]);

var line = d3.svg.line()
    .interpolate(interpolateLine)
    .x(function(d) { return x(d.index); })
    .y(function(d) { return y(d.time); });

var svg = d3.select(div).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "lineMS")
  .selectAll("path")
    .data(elements)
  .enter().append("path")
    .style("stroke", function(d) { return color(d.value); })
    .attr("d", function(d) { return line(d.indexes); })
  .select(function() { return this.parentNode.insertBefore(this.cloneNode(false), this); })
    .attr("class", "line-haloMS")
    .style("stroke", null);

function interpolateLine(points) {
  var p0 = points[0],
      x0 = p0[0],
      y0 = p0[1],
      path = [p0];
  for (var i = 1, n = points.length, p1, x1, y1; i < n; ++i) {
    p1 = points[i];
    x1 = p1[0];
    y1 = p1[1];
    path.push("V", (y0 * 2 + y1) / 3, "L", x1, ",", (y0 + y1 * 2) / 3, "V", y1);
    x0 = x1;
    y0 = y1;
  }
  return path.join("");
}

function mergesort(array) {
  var arrays = [array.slice()],
      n = array.length,
      array0 = array,
      array1 = new Array(n);

  for (var m = 1; m < n; m <<= 1) {
    for (var i = 0; i < n; i += (m << 1)) {
      merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
    }
    arrays.push(array1.slice());
    array = array0, array0 = array1, array1 = array;
  }

  function merge(left, right, end) {
    for (var i0 = left, i1 = right, j = left; j < end; ++j) {
      array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <= array0[i1]) ? i0++ : i1++];
    }
  }

  return arrays;
}

d3.select(self.frameElement).style("height", height + margin.top + margin.bottom + "px");

module.exports = div;