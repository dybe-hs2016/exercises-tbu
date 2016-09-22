<HTML>
	<HEAD>
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
				<?php
//read JSON-structure
$phonebookText=file_get_contents ("phonebookData.json");
//var_dump($phonebookText); //debug-Ausgabe
$phonebook=json_decode($phonebookText,true);
//var_dump($phonebook); //debug-Ausgabe
//fill table
foreach($phonebook as $item)
{
//	var_dump($item); //debug-Ausgabe
    $name = $item['Name'];
//	var_dump($name); //debug-Ausgabe
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