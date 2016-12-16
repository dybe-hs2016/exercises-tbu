<?php
//get name to search for corresponding number
$nameIn=$_GET['name'];
//var_dump($nameIn); //debug-Ausgabe
//read JSON structure
$phonebookText=file_get_contents ("phonebookData.json");
//var_dump($phonebookText); //debug-Ausgabe
$phonebook=json_decode($phonebookText,true);
//var_dump($phonebook); //debug-Ausgabe
//iterate through structure
foreach($phonebook as $item)
{
	//compare names
    if ($nameIn == $item['Name'])
	{//match -> return corresponding number
		$number=$item['Number'];
		echo "$number";
	}
}
?>