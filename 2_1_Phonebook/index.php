<HTML>
	<HEAD>

	<!-- 1. Teil PHP Billig, gienge auch im Klartext -->
		<?php
echo "
		<TITLE>AJAX: Nummern zu Namen finden</TITLE>";
?>
	</HEAD>


	<BODY>
		<script type="text/javascript" src="index.js"></script>
		<table border="1">
			<tr bgcolor="#e0e0e0">
				<th>Namenliste</th>



				<!--  2. Teil PHP -->
				<?php
// file_get_contents (""); holt sich JSON Inhlat von phonebookData.json und speichert ihn als assoziativen Array in phonebookText.
//read JSON-structure
$phonebookText=file_get_contents ("phonebookData.json");

// josn_decode(""); Analysiert Struktur des JSON und generiert ein Datenobjekt daraus. Es konvertiert das JSON zu einem php Variablen (hier als assoziatives Array: Bennenung des Inhalts:  [Key] => Inhalt = Value : ... ).
//Variable $phonebookText: array(8) { [0]=> array(2) { ["Name"]=> string(12) "Blatter Sepp" ["Number"]=> string(2) "49" }...}
//var_dump($phonebookText); //debug-Ausgabe
$phonebook=json_decode($phonebookText,true);
// var_dump(); gibt code in Broser aus.
var_dump($phonebook); echo"<br>"; echo"<br>"; //debug-Ausgabe

//HA: fill table
// Schleife läuft durch Array und schreibt jedes Element in $item und $item in 'name' in die Tabelle
foreach($phonebook as $item)
{
//	var_dump($item); echo "<br>"; //debug-Ausgabe
    
    $name = $item['Name'];
//	var_dump($name); //debug-Ausgabe
	
// /t/t : tabulator, damit quelltext besser aussieht.
	echo "\t\t
				<tr>
					<td>$name</td>
				</tr>\n";
}
?>
			</table>
			<p id="PhoneField"></p>
		</BODY>
	</HTML>