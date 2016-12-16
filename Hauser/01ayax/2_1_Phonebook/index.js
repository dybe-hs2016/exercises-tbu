// stores the reference to the XMLHttpRequest object -> Objekt wird später HTTP Anfrage an Server schicken.
// HTTP-Anfrage: enthält alles, was Browser an Server stellen kann. URL + Zusatzinformationen: z.B. POST oder GET (GET ist in URL sichtbar, POST ist in HTTP-Anfrage verpackt). Mit php kann man sich die POST Variable wieder anzeigen lassen.

// hier wird die FKT 'createXmlHttpRequestObject' aufgerufen/ausgeführt, um die VAR 'xmlHttp' zu erzeugen.
var xmlHttp = createXmlHttpRequestObject();

// retrieves the XMLHttpRequest object
// hier wird die FKT 'createXmlHttpRequestObject' definiert.
//Die FKT 'createXmlHttpRequestObject' sollte immer als STANDARD eingebaut werden! Mit der FKT wird ein HTTP Objekt genereiert, mit dem man, egal ob Internet Explorer oder Firefox, umgehen kann.
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
            /*gibt */
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
    // Objekt HTTP Objekt 'xmlHttp' hat bestimmt states. Wenn 'xmlHttp' nicht beschäftigt ist, wird die GET Abfrage an den Server geschickt.
    // readyState : ist HTTP OBJ beschäftigt?
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0)
    {
        // execute the getaddress.php page from the server
        // konstruiert und eröffnet SQL Abfraga an Server
        // in Klammern ist URL, die abgeschickt wird. Hier definiert er, welchen Namen er mmöchte.
        xmlHttp.open("GET", "getNumber.php?name=" + inName, true);
        // define the method to handle server responses
        /*wenn Antwort kommt, die fkt handleServerRespnse aufrufen*/
        // wenn sich am Zustand des 'xmlHttp' etwas ändert, wird das JS zu 'handleServerResponse' zurückgerufen.
        xmlHttp.onreadystatechange = handleServerResponse;
        // make the server request
        xmlHttp.send(null);

    }
    else
    // if the connection is busy, try again after one second
        setTimeout('process()', 1000);
}
// executed automatically when a message is received from the server
// Wenn sich state vonn 'xmlHttp' geändert hat, wierd diese FKT ausgerührt. An diesem Punkt ist aber nicht klar, ob die Anfrage aus 'process' bereits korrekt an Client zurück gesendet wurde. Das ist nur der Fall, wenn 'readyState' == 4.

function handleServerResponse()
{
    //HA: move forward only if the transaction has completed
    // HTTP readyState meldungen 4 / 20 / 404 / ... des HTTP OBJ
    if (xmlHttp.readyState == 4)
    {
        //HA: status of 200 indicates the transaction completed successfully
        // status : hat HTTP-Transphär geklapt? 
        if (xmlHttp.status == 200)
        {
            //HA: extract the XML retrieved from the server
            xmlResponse = xmlHttp.responseText;

            //HA: print response

            // document.getElemetByID():HTML Element mit di="PhoneField" anfordert. Es wird als komplettes DOM Element zurückgegeben.
            //.innerHTML manipuliert den Text innerhalb des HTML Tags.
            // xmlHttp.responseText; enthält den Wert, der mit der FKT 'process' aus dem HTTP Request 'createXmlHttpRequestObject' geholt wurde.
            // documetn => OBJ DOM
            // .xx => Eigenschaft / Fähigkeit

            // chaining:
            // document.getElementById("PhoneField").innerHTML = responseText;

            // OR

            phoneField = document.getElementById("PhoneField");
            phoneField.innerHTML = responseText;
        }
        //HA: a HTTP status different than 200 signals an error
        else
        {
            alert("There was a problem accessing the server: " +
                xmlHttp.statusText);
            // z.B. Error 404
        }
    }
}

function enterRow()
{
    //HA: Display an intermediate activity information
    // 
    document.getElementById("PhoneField").innerHTML = "Searching number of " + name + " ...";
    this.style.backgroundColor = "#a0a0a0";
    // VAR 'name' erhält 'innerHTML' (alles was innerhalb des html tags steht. Hier den Namen innerhalb <td>.)
    name = this.innerHTML;
    // ruft mit VAR name die FKT 'process' auf.
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

// FKT initPage wird erst aufgerufen, wenn gesamtes Site komplett aufgebaut ist. JS läuft immer: asynchronu zu kommunikatoin zwischen Client und Server. JS ist in index.html ganz am anfang eingbunden und würde dort geladen werde. Dadurch kann es sein, dass noch nicht alle Elemente geladun wurden: initPage holt sich alle <td> elemente, die zu diesem Zeitpunkt auf index.php wahrscheinlich noch gar nicht geladne wurden.
window.onload = initPage;