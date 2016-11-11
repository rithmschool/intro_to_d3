var width = 500;
var height = 500;
var svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);

var padding = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 30
};

var tooltip = d3.select("body")
                .append("div")
                .attr("class", "tooltip")
                .style("opacity",0)
                .style("position","absolute");

var xMin = d3.min(movies, function(d) {
  return d.daysOpen;
});

var xMax = d3.max(movies, function(d) {
  return d.daysOpen;
});

var yMin = d3.min(movies, function(d) {
  return d.total;
});

var yMax = d3.max(movies, function(d) {
  return d.total;
});

var xScale = d3.scaleLinear()
               .domain([xMin, xMax])
               .range([padding.left,width - padding.right]);

var yScale = d3.scaleLinear()
               .domain([yMin, yMax])
               .range([height - padding.top,padding.bottom]);

var colorScale = d3.scaleLinear()
                   .domain([0,1])
                   .range(['red', 'green']);

// add circles
svg.selectAll("circle")
  .data(movies)
  .enter()
  .append('circle')
  .attr('cx', function(d) {
    return xScale(d.daysOpen);
  })
  .attr('cy', function(d) {
    return yScale(d.total);
  })
  .attr('r', function(d) {
    return 5 * d.total / d.openingTotal;
  })
  .attr('fill', function(d) {
    return colorScale(d.freshness);
  })
  .attr('stroke', 'black')
  .on("mouseenter", function(d) {
    tooltip.text(d.title)
           .style("opacity", 1)
           .style("left", d3.event.pageX + "px")
           .style("top", d3.event.pageY + "px");
  })
  .on("mouseout", function() {
    tooltip.style("opacity", 0);
  });

svg.append('g')
   .attr("class","x-axis")
   .attr("transform", "translate(0," + (height - padding.top) + ")")
   .call(d3.axisBottom(xScale));

svg.append('g')
   .attr("transform", "translate(" + padding.left + ",0)")
   .call(d3.axisLeft(yScale));

d3.select("select").on("change", function() {
  var scaleType;
  newVal = d3.select("select").property("value");
  xMin = d3.min(movies, function(d) {
    return d[newVal];
  });
  xMax = d3.max(movies, function(d) {
    return d[newVal];
  });
  if (newVal === "release") {
    scaleType = d3.scaleTime;
  } else {
    scaleType = d3.scaleLinear;
  }
  xScale = scaleType().domain([xMin,xMax])
                    .range([padding.left,width - padding.right]);
 
  var t = d3.transition()
                     .duration(1000)
                     .ease(d3.easeBounceOut);

  d3.selectAll('circle')
    .transition(t)
    .attr('cx', function(d) {
      return xScale(d[newVal]);
    });
  
  d3.selectAll('.x-axis')
    .transition(t)
    .call(d3.axisBottom(xScale));

});