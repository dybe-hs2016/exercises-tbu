<!DOCTYPE html>
	<html lang="en">
		<head>
			<!-- set page properties -->
			<!-- MUST COME FIRST IN HEAD -->
				<!-- set the correct CHARSET -->
				<meta charset="utf-8">

				<!-- ensure compability with IE -->
				<meta http-equiv="X-UA-Compatible" content="IE=edge">

				<!-- set VIEWPOINT to scale content to the device size and set INITIAL ZOOM level to 1  -->		
				<meta name="viewport" content="width=device-width, initial-scale=1">

			<!-- embed custom fonts -->

				<!-- google fonts -->
				<link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700|Source+Sans+Pro:300" rel="stylesheet">

			<!-- embed CSS [choose local or MaxCND] -->

				<!-- MaxCND: Latest compiled and minified Bootstrap stylesheet -->
				<!-- W3C says, that MaxCND can improve page load performance -->
				<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->

				<!-- Local: Current local Bootstrap stylesheet-->
				<link rel="stylesheet" href="css/bootstrap.min.css">

				<!-- Local: Our own stylesheets [must be extended] -->
				<link rel="stylesheet" href="css/generic.styles.css">

			<title> Forms Proto Page </title>		
		</head>

		<body>
			<div class="container-fluid">

				<div class="row">
					<div class="col-sm-12">
						<h1>Forms Proto Test Page</h1>
						<h2>Database Structure</h2>
					</div>
				</div>

				<div class="row">

					<!-- form search -->
					<div class="col-sm-3">

						<h1>search</h1>
						
					</div>

					<!-- form insert -->
					<div class="col-sm-3">

						<h1>insert</h1>
						
					</div>

					<!-- form update -->
					<div class="col-sm-3">

						<h1>update</h1>
						
					</div>

					<!-- form delete -->
					<div class="col-sm-3">

						<h1>delete</h1>
						
					</div>
					
				</div>
			</div>



			<!-- INCLUDE generic elements : Set php variables for page sensitive content!!! -->
				<!-- <?php include("scripts.html") ?> -->
			<!-- load Bootstrap and JQuey [choose local or MaxCND] -->
				<!-- Bootstrap suggests, to load all scripts at the end of the body tag, to improve page load performance -->

				<!-- W3C says, that MaxCND can improve page load performance -->

				<!-- MaxCND: Latest compiled JQuery JS library -->
				<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->

				<!-- MaxCND: Latest and minified Bootstrap JS library -->
				<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->

				<!-- Local: Current local JQuery JS library -->
				<script src="js/jquery.min.js"></script>

				<!-- Local: Current local Bootstrap JS library -->
				<script src="js/bootstrap.min.js"></script>

				<!-- Local: Our own JS scripts [must be extended] -->
				<script src="js/generic.script.js"></script>

		</body>
	</html>
