var data; //the datasets
var x; //a linear scale
var width = 420; //chart width
var barHeight = 20; //bar height
var x; //the linear scale

//read the data from a file and call the chart display function
d3.json("./11_BarChart.json", showchart);

//this function sets up the complete chart
function showchart(data)
{
	//create the linear scale
	x = d3.scale.linear()
		.domain([0, d3.max(data)])
		.range([0, width]);

	//get chart	tag (class chart) and set width and height
	var chart = d3.select(".chart")
		.attr("width", width)
		.attr("height", barHeight * data.length);

	var bar = chart.selectAll("g") //create empty array of arrays (for data)
		.data(data) //connect to data
		.enter() //enter data
		.append("g") //create group tags for each dataset
		.attr("transform", moveBar); //place group at appropriate location

	bar.append("rect") //create bar rectangle
		.attr("width", x) //set bar width
		.attr("height", barHeight - 1); //set bar height

	bar.append("text") //cretae text in bar
		.attr("x", moveText) //place text horizontally
		.attr("y", barHeight / 2) //place text vertically
		.attr("dy", ".35em") //lift text slightly
		.text(getText); // write text
}

//this function claculates the position for a single bar
function moveBar(data, index)
{
	return "translate(0," + index * barHeight + ")";
}

//this function claculates the text position for the text in a single bar
function moveText(data)
{
	return x(data) - 3;
}

//this function retreives the text of a single dataset
function getText(data)
{
	return data;
}