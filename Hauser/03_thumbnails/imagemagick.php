<?php
$image = new Imagick('images/back-to-the-blue-mountains.jpg');
$image->thumbnailImage(100, 0);
$image->writeImage('thumbs/thumb_back-to-the-blue-mountains.jpg');
?>
