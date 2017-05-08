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
		<main class="PurchaseOverlay">
			<nav class="PurchaseOverlay__nav">
					X closing <!-- TODO -->
			</nav>
			<section class="section">
				<h3 .text-center>Purchasing isn't supported on the web yet.</h3>
				<p .text-center>
					Purchase this listing in the OpenBazzar app. It's available for: Windows, Mac &amp; Linux. Mobile coming soon.
				</p>
				<a class="button .aligncenter" href="https://openbazaar.org/download.html" target="_blank">Download OpenBazaar</a>
				<hr>
				<p>Already have the OpenBazaar app?</p>
				<a class="button" href="ob://@skishop/store/full-ski-set">Open listing in OpenBazaar</a>
				Open this listing in OpenBazaar
				<a class="button" href="" target="_blank" >Copy URL</a>
				Listing URL: ob://@skishop/store/full-ski-set
			</section>
		</main>
	</div>

	<script src="./dist/scripts/site.min.js"></script>

</body>

</html>