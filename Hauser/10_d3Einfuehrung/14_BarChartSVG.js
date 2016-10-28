//Size of the space occupied by the chart
var totalWidth = 1000;
var totalHeight = 500;
//Margin around the chart itself
//var chartMargin = {top: 20, left: 20, bottom: 30, right: 30};
var chartMargin = {top: 1, left: 1, bottom: 1, right: 1};
//Margin around bars
var barMargin = {top: 5, left: 3, bottom: 5, right: 3};
//calculate width of chart
var chartWidth = totalWidth - chartMargin.left - chartMargin.right;
//calculate height of chart
var chartHeight = totalHeight - chartMargin.top - chartMargin.bottom;

//select chart
var chart = d3.select(".chart")
	.attr("width", chartWidth)
	.attr("height", chartHeight)
	.append("g")
	.attr("transform", "translate(" + chartMargin.left + "," +  chartMargin.top + ")");

//show chart area	
chart.append("rect")
	.attr("height", chartHeight)
	.attr("width", chartWidth)
	.attr("x", chartMargin.left)
	.attr("y", chartMargin.right)
	.attr("fill","black");
    
var data;

d3.json("./DYBE_Class.json", function (data) {

	var x = d3.scale.ordinal()
		.domain(data.map(function (d) {
				return d.surname + " " + d.forename;
			}))
		.rangeRoundBands([0, chartWidth], 5);
	var y = d3.scale.linear()
		.domain([0, d3.max(data.map(function (d) {
					return parseFloat(d.Access);
				}))])
		.range([0, chartHeight-barMargin.top - barMargin.bottom]);

	//calculate width of a single bar
	var barWidth = (chartWidth - chartMargin.left - chartMargin.right) / data.length;

	//calculate bottom coordinate of bar
	function barBottom(data)
	{
		return totalHeight - chartMargin.bottom;
	}
	
	//calculate top coordinate of bar
	function barTop(data)
	{
		return totalHeight - chartMargin.bottom - y(data.Access);
	}
	
	//calculate position of a single bar
	function moveBar(data, index)
	{
		return "translate(" + (index * barWidth + barMargin.left) + "," + -barMargin.bottom +")";
	}

	//get the bars
	var bar = chart.selectAll("g")
		.data(data)
		.enter().append("g")
		.attr("transform", moveBar);

	//draw block
	bar.append("rect")
	.attr("y", function (d) {return barTop(d);})
	.attr("height", function (d) {return y(d.Access);})
	.attr("width", barWidth - barMargin.left - barMargin.right)
	//determine color
	.attr("fill","steelblue");

	//draw text (surname)
	bar.append("text")
	.attr("x", (barWidth - barMargin.left) / 2)
	.attr("y", function (d) {return barBottom(d);})
	//adjust vertical position
	.attr("dy", "-3em")
	.text(function (d) {return d.surname})
	//draw text (forename)
	.append('svg:tspan')
	.attr('x', (barWidth - barMargin.left)/ 2)
	.attr('dy', "1em")
	.text(function (d) {
		return d.forename;
	})
	//draw text (access time)
	.append('svg:tspan')
	.attr('x', (barWidth - barMargin.left) / 2)
	.attr('dy', "1em")
	.text(function (d) {
		return d.Access;
	})

});
