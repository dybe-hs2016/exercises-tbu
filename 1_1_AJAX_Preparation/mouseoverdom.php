<html>
    <head>
<title>Test Something</title>
<link rel="stylesheet" type="text/css" href="thestyle.css">
<script type="text/javascript">
<!--
function enterbgcolor()
{
//	this.innerHTML = 'Called';
	this.style.backgroundColor = "#808080";
};
function leavebgcolor()
{
//	this.innerHTML = 'Gone';
	this.style.backgroundColor = "#ffffff";
};
function clicked()
{
//	this.innerHTML = 'Gone';
	this.style.backgroundColor = "#ff0000";
};
function attachFunctions()
{
	var lis=document.getElementsByTagName("li");

	for (var i=0;i<lis.length;i++)
	{
		lis[i].onmouseover = enterbgcolor;
		lis[i].onmouseout = leavebgcolor;
		lis[i].onclick = clicked;
	}
	alert('loaded');
};
window.onload=attachFunctions;
//-->
</script>
</head>
<body>
	<ul>
		<li id="1">First Element</li>
		<li>Second Element</li>
		<li>Third Element</li>
	</ul>
</body>
</html>
