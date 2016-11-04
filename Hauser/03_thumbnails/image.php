 <!DOCTYPE html>
<html>
	<head>
	<title>High Resolution</title>
	</head>

	<body>

		<?php
		
			/* display content of array $_GET */
				/*var_dump($_GET);*/

			/* display value at key "highRes" of array $_GET */
				/*echo ($_GET["highRes"]);*/

			/* display image, using the $_GET value at key "high res */
				/*echo '<img src="'.$_GET["highRes"].'" alt="couldnt load high resolution image">';*/

			/* display image as link to the page thumbnails.php */
				echo '<a href="thumbnails.php"> <img src="'.$_GET["highRes"].'" alt="couldnt load high resolution image"> </a>';

		?>
	</body>

</html>  
