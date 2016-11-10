var width = 500;
var height = 500;
var svg = d3.select("svg");
svg.attr('width', width).attr('height', height);

var timeMin = d3.min(movies, function(d) {
  return d.release;
});

var timeMax = d3.max(movies, function(d) {
  return d.release;
});

var totalMin = d3.min(movies, function(d) {
  return d.total;
});

var totalMax = d3.max(movies, function(d) {
  return d.total;
});

var xScale = d3.scaleTime()
               .domain([timeMin, timeMax])
               .range([0,width]);

var yScale = d3.scaleLinear()
               .domain([totalMin, totalMax])
               .range([height,0]);

var colorScale = d3.scaleLinear()
                   .domain([0,1])
                   .range(['red', 'green']);

// add circles
svg.selectAll("circle")
  .data(movies)
  .enter()
  .append('circle')
  .attr('cx', function(d) {
    return xScale(d.release);
  })
  .attr('cy', function(d) {
    return yScale(d.total);
  })
  .attr('r', function(d) {
    return 5 * d.total / d.openingTotal;
  })
  .attr('fill', function(d) {
    return colorScale(d.freshness);
  });

// add text
svg.selectAll('text')
  .data(movies)
  .enter()
  .append('text')
  .text(function(d) {
    return d.title;
  })
  .attr('x', function(d) {
    return xScale(d.release);
  })
  .attr('y', function(d) {
    return yScale(d.total);
  });
