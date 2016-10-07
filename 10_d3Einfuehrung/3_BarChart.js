//the data set
var data = [1, 2, 3, 4, 5, 6];

//d3 basic select
var mychart=d3.select(".chart");
//create empty array of selection
var mydata=mychart.selectAll("somethingunfindable");
//connect to data
var mylinked=mydata.data(data);
//fill in data content (in an attribute called '_data_')
var mycontent=mylinked.enter();
//append a div element for each data set
var mynewdivs=mycontent.append("div");
//set the style element 'width' of all divs individually by calling a function instead of giving a fixed value
var mystyle=mynewdivs.style("width", datasetwidth);
//set the data set as a text of the divs individually
mystyle.text(datasetText);

//this function calculates the width of a single div
//it is called by the style operation
function datasetwidth (dataset) {
	return dataset * 10 + "px";
}

//this function calculates the text of a single div
//it is called by the text operation
function datasetText(dataset) {
	return dataset;
}
