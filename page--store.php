<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">

	<title>OpenBazaar Browser</title>

	<link rel="stylesheet" href="./dist/styles/site.min.css">

	<!--[if lt IE 9]>
		<script src="./dist/scripts/ie-only.js"></script>
	<![endif]-->

</head>

<body>
	<div class="Page">
		<?php include 'inc--page-header.php';?>
		<div class="Store page--store">
			<?php include 'inc--page--store__nav.php';?>
			<div class="TabContainer">
				<?php include 'tab--store.php';?> <!-- load first -->
				<?php include 'tab--home.php';?>
				<?php include 'tab--following.php';?>
				<?php include 'tab--followers.php';?>
			</div>
		</div>
	</div>

	<script src="./dist/scripts/site.min.js"></script>

</body>

</html>