 <!DOCTYPE html>
<html>
<head>
<title>img thumbs</title>
</head>

<body>

	<!-- using getFileContent.php as source -->

	<?php

		/* <img src="url" alt="some_text"> */ 

			$key= 0;
			$url="";

		/* get image names from image_list.json and write them into array $page*/
			/*file_get_contenst(file.end) -> erzeugt einen String*/
			/*$page = file_get_contents("image_list.json");*/

		/* get image names form image_list.txt and write them into the array $page */
			/* file(file.end); -> erzeugt ein Array */
			$page = file("image_list.txt");

		/* display array $page */
			/*var_dump($page);*/

		foreach ($page as $key => $url) {
			
			/* display value of $url */
				/*echo $url."</br>";*/

			/* display image at key n */
				echo
					'<img src="thumbs/thumb_'.trim($url).'" alt="couldnt load image '.trim($url).'"> <br> ';

			/* button to see the high resolutin image in new page image.php */	
				echo
					'<form action="image.php" method="get">
						<input type="hidden" name="highRes" value="images/'.trim($url).'">
						<input type="submit" value="High Resolution">
					</form>';
		};
	?>
	
</body>

</html> 

