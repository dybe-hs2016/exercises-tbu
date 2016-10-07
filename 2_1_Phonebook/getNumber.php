<?php
// SERVERSEITIGE PHP ABFRAGE, DIE AUS DER DATENBANK JSON HERAUSHOLT
//get name to search for corresponding number
$nameIn=$_GET['name'];
//var_dump($nameIn); //debug-Ausgabe
//read JSON structure
$phonebookText=file_get_contents ("phonebookData.json");
//var_dump($phonebookText); //debug-Ausgabe
$phonebook=json_decode($phonebookText,true);
//var_dump($phonebook); //debug-Ausgabe
//HA: iterate through structure
// Iteration durch JSON Array '$phonebook'
foreach($phonebook as $item)
{
	//HA: compare names
	// Zugriff auf JSON 'phonebookData.json' Array über Index. Hier 'Name' als Key/Index, weil assoziatives Array.
    if ($nameIn == $item['Name'])
	{//match -> return corresponding number
		$number=$item['Number'];
		echo "$number";
	}
}
?>