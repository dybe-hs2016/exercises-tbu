// stores the reference to the XMLHttpRequest object
var xmlHttp = createXmlHttpRequestObject();
// retrieves the XMLHttpRequest object
function createXmlHttpRequestObject()
{
    // will store the reference to the XMLHttpRequest object
    var xmlHttpNew;
    // if running Internet Explorer
    if (window.ActiveXObject)
    {
        try
        {
            xmlHttpNew = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e)
        {
            xmlHttpNew = false;
        }
    }
    // if running Mozilla or other browsers
    else
    {
        try
        {
            xmlHttpNew = new XMLHttpRequest();
        }
        catch (e)
        {
            xmlHttpNew = false;
        }
    }
    // return the created object or display an error message
    if (!xmlHttpNew)
        alert("Error creating the XMLHttpRequest object.");
    else
        return xmlHttpNew;
}

// make asynchronous HTTP request using the XMLHttpRequest object
function process(inName)
{
    // proceed only if the xmlHttp object isn't busy
    /*send http request*/
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0)
    {
        // execute the getaddress.php page from the server
        xmlHttp.open("GET", "getNumber.php?name=" + inName, true);
        // define the method to handle server responses
        /*wenn Antwort kommt, die fkt handleServerRespnse aufrufen*/
        xmlHttp.onreadystatechange = handleServerResponse;
        // make the server request
        xmlHttp.send(null);

    }
    else
    // if the connection is busy, try again after one second
        setTimeout('process()', 1000);
}
// executed automatically when a message is received from the server
function handleServerResponse()
{
    // move forward only if the transaction has completed
    if (xmlHttp.readyState == 4)
    {
        // status of 200 indicates the transaction completed successfully
        if (xmlHttp.status == 200)
        {
            // extract the XML retrieved from the server
            xmlResponse = xmlHttp.responseText;
            //print response
            document.getElementById("PhoneField").innerHTML = xmlHttp.responseText;
        }
        // a HTTP status different than 200 signals an error
        else
        {
            alert("There was a problem accessing the server: " +
                xmlHttp.statusText);
        }
    }
}

function enterRow()
{
    //Display an intermediate activity information
    document.getElementById("PhoneField").innerHTML = "Searching number of " + name + " ...";
    this.style.backgroundColor = "#a0a0a0";
    name = this.innerHTML;
    process(name);
}

function leaveRow()
{
    // this.innerHTML = 'Gone';
    this.style.backgroundColor = "#ffffff";
    //clear field
    document.getElementById("PhoneField").innerHTML = "no selection";
}

function initPage()
{
    /*variable, die alle elemente td sammelt und hält*/
    var tds = document.getElementsByTagName("td");


    for (var i = 0; i < tds.length; i++)
    {
        /*Initieren eines arrays von Elementen. bei Event onmousover in einer der reihen mousover, dann fkt enterRow aufrufen.*/
        tds[i].onmouseover = enterRow;
        tds[i].onmouseout = leaveRow;
    }
    //alert('loaded');
}
window.onload = initPage;