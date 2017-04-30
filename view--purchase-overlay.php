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
		<header class="Header">
			<div class="Header__left">
				<img class="Header__logo" src=""> <!-- TODO: Check BEM compliance of this class name and the class names of its descendants -->
				<div class="Header__left__branding">
					<div class="Header__branding__top">
						OpenBazaar
					</div>
					<div class="Header__branding__bottom">
						<div class="StoreNav__info__name">
							<img src=""> <!-- small bitcoin image -->
							<img src=""> <!-- small Earth image -->
							<img src=""> <!-- small peace image -->
						</div>
						<div class="StoreNav__info__ratings">
							<img src=""> <!-- small star image -->
							4.2
							(<a href="">192</a>) <!-- link to ratings and reviews -->
						</div>
					</div>
				</div>
				<div class="Header__left__search">
					<input type="text" placeholder="Enter an OpenBazaar @handle or ID">
					<button type="submit" class="Button--search-ids">Go</button>
				</div>
			</div>
			<div class="Header__right">
				<a href="https://openbazaar.org/download.html" target="_blank">Download OpenBazzar</a>
				<a href="https://openbazaar.org/" target="_blank">About OpenBazaar</a>
			</div>
		</header>
		<main class="PurchaseOverlay">
			<nav class="PurchaseOverlay__nav">
					X closing <!-- TODO -->
			</nav>
			<section class="Section">
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