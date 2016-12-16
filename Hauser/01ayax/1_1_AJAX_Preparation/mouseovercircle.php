<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>SVG</title>
</head>
<body>
<h1>Kreis</h1>
<svg xmlns="http://www.w3.org/2000/svg" onClick="alert('called');">
  <circle
  	onmouseover="evt.target.setAttribute('opacity', '0.5');"
  	onmouseout="evt.target.setAttribute('opacity', '1');"
  	r="50" cx="70" cy="70"  fill="#880088" />
</svg>

</body>
</html>