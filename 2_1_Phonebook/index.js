// stores the reference to the XMLHttpRequest object -> Objekt wird später HTTP Anfrage an Server schicken.
// HTTP-Anfrage: enthält alles, was Browser an Server stellen kann. URL + Zusatzinformationen: z.B. POST oder GET (GET ist in URL sichtbar, POST ist in HTTP-Anfrage verpackt). Mit php kann man sich die POST Variable wieder anzeigen lassen.

// hier wird die FKT createXmlHttpRequestObject aufgerufen, um die Variable var xmlHttp zu erzeugen.
var xmlHttp = createXmlHttpRequestObject();

// retrieves the XMLHttpRequest object -> hier wird die Funktio definiert, mit der var xmlHttp erstellt wird.
function createXmlHttpRequestObject()
{
    // will store the reference to the XMLHttpRequest object
    var xmlHttpNew;
    // if running Internet Explorer
    if (window.ActiveXObject)
    {
        // try: vesuche, objket zu bekommen, wenn es nicht geht, landet man in catch. xmlHttp wird mit false befüllt.
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
        // return: in FKT neu erzeugte HTTP Objekt wird aus Funktion ausgegeben und von var xmlHttp (oben) aufgefangen.
        return xmlHttpNew;
}

// make asynchronous HTTP request using the XMLHttpRequest object
// Funktionsdeklaration wird wahrgenommen, aber FKT wird erst bei Aktion aufgerufen.
function process(inName)
{
    // proceed only if the xmlHttp object isn't busy
    /*send http request: request now runns at server, js/browser is not bussy until data is returned by Server*/
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0)
    {
        // execute the getaddress.php page from the server
        // baut SQL Abfraga an Server zusammen
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
// Wenn Anfrage aus Process zurückgegben wurde.
function handleServerResponse()
{
    // move forward only if the transaction has completed
    // HTTP Statusmeldungen 4 / 20 / 404 / ...
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
    // 
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


// DOM manipulation
function initPage()
{
    // variable, die alle elemente td sammelt und hält
    //document ist Objekt, das von JS zur verfügung gestellt wird. Ist gesamter Tagbaum aus DOM und holt alle <td> tags in var tds. Auch als Array-Struktur.
    var tds = document.getElementsByTagName("td");

    // 5 Elemente, d.h. letzer index ist 4 (< tds.length)
    for (var i = 0; i < tds.length; i++)
    {
        /*Initieren eines arrays von Elementen. bei Event onmousover in einer der reihen mousover, dann fkt enterRow aufrufen.*/
        // enterRow od. leaveRow sind oben definierte FKT, die erst aktiv werden, wenn ihitPage FKT die gesamte Tabelle erstellt hat.
        tds[i].onmouseover = enterRow;
        tds[i].onmouseout = leaveRow;
    }
    //alert('loaded');
}

// wenn gesamtes Fenster geladen ist, solll die FKT initPage aufgerufen werden.
window.onload = initPage;