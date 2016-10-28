<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>SVG</title>
</head>
<body>
<h1>Kreis</h1>
<!-- Ereignis gesteuerte Programmierung: Code hat weder Anfang noch Ende, er wird Ereignisbasiert aufgerufen. D.h. onClick ist Trigger, der "allert('called')" aufruft. Im ggs. dazu : Polling: linerares Script fragt andauernd Status ab. Bei js wird jedoch ein Code-Schnipsel bei einem bestimmten Ereignis aufgerufen, ohne dass das Programm immer  -->
<svg xmlns="http://www.w3.org/2000/svg" onClick="alert('called');">
	<!-- 	evt(evetn): eigentliches Ereignis

  		target: target auf dem das Ereignis ausgelöst wurde (hier der Kreis) hinter dem Target findet man im DOM den Kreis. Target ist in deisem Fall reziprok zu dem Tag, in dem es Steht. Kann aber auch ein anderes sein.

  		stAttribute: setzt Attribut in DOM auf den gegebenen Wert. die HTML Datei wird rein lokal verändert. D.h. die Webpage ist dynamisch, da sie ihren eigenen Inhalt lokal verändern.

  		-->
  <circle
  	onmouseover="evt.target.setAttribute('opacity', '0.5');"
  	onmouseout="evt.target.setAttribute('opacity', '1');"
  	r="50" cx="70" cy="70"  fill="#880088" />
</svg>

</body>
</html>
