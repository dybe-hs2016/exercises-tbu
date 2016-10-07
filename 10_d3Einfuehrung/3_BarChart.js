//HA: the data set
var data = [1, 2, 3, 4, 5, 6];

//HA: d3 basic select
var mychart=d3.select(".chart");

// leeres Array mit unauffindbarem Tag erzeugen.
//HA: create empty array of selection
var mydata=mychart.selectAll("somethingunfindable");

// Daten in den bisher leeren Array selectAll einfüllen.
//HA: connect to data
var mylinked=mydata.data(data);

// Leere Elemente
//HA: fill in data content (in an attribute called '_data_')
var mycontent=mylinked.enter();

// Für jedes Element des Arrays ein leeres DIV kreieren und im OBJ mynewdivs speichern.
//HA: append a div element for each data set
var mynewdivs=mycontent.append("div");

// Für jedes der neuen DIVs einen eigenen Style mit dem Schlüssel 'width' kreieren.
//HA: set the style element 'width' of all divs individually by calling a function instead of giving a fixed value
var mystyle=mynewdivs.style("width", datasetwidth);
//HA: set the data set as a text of the divs individually
mystyle.text(datasetText);


// Wenn 'datasetwidth' erreicht wird, wird die FKT aufgerufen. Ihr werden mit dataset die Daten übergeben.
// Die FKT giebt eine String aus, der den Nennwert des Datenelements * 10 px ["30px"] ausgibt.
//HA: this function calculates the width of a single div
//HA: it is called by the style operation
function datasetwidth (dataset) {
	return dataset * 10 + "px";
}

//HA: this function calculates the text of a single div
//HA: it is called by the text operation
function datasetText(dataset) {
	return dataset;
}
