//Size of the space occupied by the diagram
var totalWidth = 1000;
var totalHeight = 500;
//Margins for axis
var axisMargin = {top: 2, left: 30, bottom: 20, right: 0};
//Margin around the graph
var graphMargin = {top: 10, left: 10, bottom: 10, right: 40};
//Margin around bars
var barMargin = {top: 5, left: 3, bottom: 5, right: 3};
//calculate width of container
var diagramWidth = totalWidth - axisMargin.left - axisMargin.right;
//calculate height of container
var diagramHeight = totalHeight - axisMargin.top - axisMargin.bottom;
//calculate width of graph
var graphWidth = diagramWidth - graphMargin.left - graphMargin.right;
//calculate height of graph
var graphHeight = diagramHeight - graphMargin.top - graphMargin.bottom;
//select graph
var chart = d3.select(".chart")
	.attr("width", totalWidth)
	.attr("height", totalHeight)
	.attr("fill","red");
var	chartMoved=chart
	//position container
	.append("g");
	chartMoved
	.attr("transform", "translate(" + axisMargin.left + "," +  axisMargin.top + ")")
	chartMoved
	//show graph area with axis	
	.append("rect")
	.attr("width", diagramWidth)
	.attr("height", diagramHeight)
	.attr("fill","darkgrey");
var graph = chartMoved
	//show graph area without axis
	.append("g")
	.attr("id","graph")
	.attr("transform", "translate(" + graphMargin.left + "," +  graphMargin.top + ")");
	graph
	.append("rect")
	.attr("width", graphWidth)
	.attr("height", graphHeight)
	.attr("fill","black");
    
var data;

d3.json("./DYBE_Class.json", function (data) {

	var x = d3.scale.ordinal()
		.domain(data.map(function (d) {
				return d.surname + " " + d.forename;
			}))
		.rangeRoundBands([0, graphWidth]);
	var y = d3.scale.linear()
		.domain([0, d3.max(data.map(function (d) {
					return parseFloat(d.Access);
				}))])
		.range([graphHeight - barMargin.top - barMargin.bottom,0]);
	//axis objects
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");
	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left");


	//calculate width of a single bar
	var barWidth = graphWidth / data.length;

	//calculate top coordinate of bar
	function barTop(data)
	{
		return y(data.Access)+ barMargin.top;
	}
	
	//calculate bottom coordinate of bar
	function barBottom(data)
	{
		return graphHeight;
	}
	
	//calculate position of a single bar
	function moveBar(data, index)
	{
		return "translate(" + (index * barWidth + barMargin.left) + ",0)";
	}

	//get the bars
	var bars = graph.selectAll("g")
		.data(data);
		bars=bars
		.enter().append("g");
		bars=bars
		.attr("transform", moveBar);

	chartMoved.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(" + graphMargin.left+ "," + (diagramHeight) + ")")
		.call(xAxis);    

	chartMoved.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(0," + (barMargin.bottom + graphMargin.top) +")")
		.call(yAxis);    

	//draw block
	bars.append("rect")
	.attr("y", function (d) {return barTop(d);})
	.attr("height", 0)
	.attr("width", barWidth - barMargin.left - barMargin.right)
	//determine color
	.attr("fill","steelblue")
	//set class
	.attr("class","bar");

	//draw text (Access time)
	bars.append("text")
	.attr("x", (barWidth - barMargin.left) / 2)
	.attr("y", function (d) {return barBottom(d);})
	//adjust vertical position
	.attr("dy", "-1em")
	.text(function (d) {
		return d.Access;
	})
	//animate
var animations=d3.selectAll(".bar");
	animations
	.transition()
	.duration(2500)
	.attr("height",function (d) {return graphHeight - barMargin.top - barMargin.bottom - y(d.Access);});
});
