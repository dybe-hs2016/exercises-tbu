var width = 960;//width of chart
var height = 500;//height of chart
var barWidth; //width of a bar (to be calculated later)

//linear scale to scale data values to pixels
var y = d3.scale.linear()
    .range([height, 0]);

//get chart object from DOM    
var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height);

//data to be used (still empty in the beginning)    
var data;

//get data
d3.json("./DYBE_Class.json", getData);

function getData(data)
{
  //
  y.domain([0, d3.max(data, function(d) { return d.Access; })]);

  //calculate width of a bar
  barWidth = width / data.length;

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", moveBar);

  bar.append("rect")
      .attr("y", function(d) { return y(d.Access); })
      .attr("height", function(d) { return height - y(d.Access); })
      .attr("width", barWidth - 1);

  bar.append("text")
      .attr("x", barWidth / 2)
      .attr("y", function(d) { return y(d.Access) + 3; })
      .attr("dy", ".75em")
      .text(function(d) { return d.Access; });
}

//calculate the bar position
function moveBar(d, i) { return "translate(" + i * barWidth + ",0)"; };
