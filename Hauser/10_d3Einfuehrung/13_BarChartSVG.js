//This version is commented sparesly to leave with some work to undestand the code.
//Most of the code is identical anyway.
//There were subtle regroupings of code to clean it up in places.
//At other places, anonymous functions were left in place.
var width = 960,
height = 500;

var chart = d3.select(".chart")
	.attr("width", width)
	.attr("height", height);

var data;


d3.json("./DYBE_Class.json", getData);

function getData(data)
{
	//nested function, only available inside function getData
	//get a complete name from a dataset
	function getName(data)
	{
	  return data.surname + " " + data.forename;
	}
	
	//nested function, get the access time for a dataset
	function getAccessTime(data)
	{
		return data.Access;
	}
	
	function moveBar(data, index)
	{
		return "translate(" + index * barWidth + ",0)";
	}

	//ordinal scala, maps the range of incoming indices to an outcoming name
	var x = d3.scale.ordinal()
		.domain(data.map(getName))
		.rangeRoundBands([0, width], 5);
		
	//the well-known linear scale
	var y = d3.scale.linear()
		.domain([0, d3.max(data, getAccessTime)])
		.range([height, 0]);

	//here we calculate the width of a single bar
	var barWidth = width / data.length;

	//get a new, empty array of arrays
	var bar = chart.selectAll("g")
		//connect to data
		.data(data)
		//fill data in
		.enter()
		//create a group element for each bar
		.append("g")
		//position bar
		.attr("transform", moveBar);

	bar.append("rect")
	.attr("y", function (data) {
		return y(data.Access);
	})
	.attr("height", function (d) {
		return height - y(d.Access);
	})
	.attr("width", barWidth - 1);

	//fill in the various text elements and position them
	bar.append("text")
	.attr("x", barWidth / 2)
	.attr("y", function (data) {
		return y(data.Access) + 3;
	})
	.attr("dy", ".75em")
	.text(function (data) {
		return data.surname
	})
	.append('svg:tspan')
	.attr('x', barWidth / 2)
	.attr('dy', "1em")
	.text(function (data) {
		return data.forename;
	})
	.append('svg:tspan')
	.attr('x', barWidth / 2)
	.attr('dy', "1em")
	.text(function (data) {
		return data.Access;
	})
}
