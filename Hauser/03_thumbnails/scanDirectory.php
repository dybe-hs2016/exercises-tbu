<?php
$entries = scandir("images");
foreach($entries as $entry)
{
	echo $entry . "<br>";
}
?>