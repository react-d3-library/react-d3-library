import d3 from 'd3';

const createLineChart = data => {

  const node = document.createElement('div');

  const margin = data.margins,
      width = data.width - margin.left - margin.right,
      height = data.height - margin.top - margin.bottom;

  const formatDate = d3.time.format("%d-%b-%y");

  const x = d3.time.scale()
      .range([0, width]);

  const y = d3.scale.linear()
      .range([height, 0]);

  const xAxis = d3.svg.axis()
      .scale(x)
      .orient(data.orientXTicks);

  const yAxis = d3.svg.axis()
      .scale(y)
      .orient(data.orientYTicks);

  const line = d3.svg.line()
      .x(d => x(d.time))
      .y(d => y(d.value));

  const svg = d3.select(node).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  data.dataset.map(el => {
    if (typeof el.time === 'string') {
      el.time = formatDate.parse(el.time);
      el.value = +el.value;
    }
  });

  const lineChartParse = data => {
    data.time = formatDate.parse(data.time);
    data.value = +data.value;
    return data;
  }

  const setLineChartData = (error, dataset) => {
    if (error) throw error;

    x.domain(d3.extent(dataset, d => d.time));
    y.domain(d3.extent(dataset, d => d.value));

    svg.append("g")
        .attr("class", data.XAxisClasses)
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", data.YAxisClasses)
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(data.YAxisLabel);

    svg.append("path")
        .datum(dataset)
        .attr("class", data.lineClass)
        .attr("d", line);

    return node;
  }

  return data.tsvFileName !== ''
      ? d3.tsv(data.tsvFileName, lineChartParse, setLineChartData)
      : data.csvFileName !== ''
          ? d3.csv(data.csvFileName, lineChartParse, setLineChartData)
          : setLineChartData(false, data.dataset, data);

}

export default createLineChart;