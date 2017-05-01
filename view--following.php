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
		<main class="Store">
			<?php include 'inc--store-nav.php';?>
			<div class="Store__header">
				<h1>Following</h1>
			</div>
			<div class="Column--single">
				<div class="CardContainer">					
					<div class="StoreCard">
						<img class="StoreCard__header" src=""> <!-- Store's header img -->
						<img class="Avatar" src=""> <!-- Store avatar image -->
						<span class="StoreCard__name">Brad Gutierrez</span>
						<span class="StoreCard__handle">@sbg23</span>
						<p>
							We sell rare and high quality art sourced from big cities around the world. Follow us.
						</p>
						<div class="StoreCard__bottom">
							<div class="StoreCard__bottom__location">
								<img src=""> <!-- small location pin image -->
								Mexico City, Mexico
							</div>
							<div class="StoreCard__bottom__ratings">
								<img src=""> <!-- small star image -->
								4.2
								(<a href="">123</a>) <!-- link to ratings and reviews -->
							</div>
						</div>
					</div>
					<div class="StoreCard">
						<img class="StoreCard__header" src=""> <!-- Store's header img -->
						<img class="Avatar" src=""> <!-- Store avatar image -->
						<span class="StoreCard__name">Effective Studio</span>
						<span class="StoreCard__handle">@estudio</span>
						<p>
							We sell rare and high quality art sourced from big cities around the world. Follow us.
						</p>
						<div class="StoreCard__bottom">
							<div class="StoreCard__bottom__location">
								<img src=""> <!-- small location pin image -->
								Toronto, ON
							</div>
							<div class="StoreCard__bottom__ratings">
								<img src=""> <!-- small star image -->
								5.0
								(<a href="">97</a>) <!-- link to ratings and reviews -->
							</div>
						</div>
					</div>
					<div class="StoreCard">
						<img class="StoreCard__header" src=""> <!-- Store's header img -->
						<img class="Avatar" src=""> <!-- Store avatar image -->
						<span class="StoreCard__name">Francis Collins</span>
						<span class="StoreCard__handle">@fcollins</span>
						<p>
							We sell rare and high quality art sourced from big cities around the world. Follow us.
						</p>
						<div class="StoreCard__bottom">
							<div class="StoreCard__bottom__location">
								<img src=""> <!-- small location pin image -->
								Orlando, FL
							</div>
							<div class="StoreCard__bottom__ratings">
								<img src=""> <!-- small star image -->
								4.9
								(<a href="">721</a>) <!-- link to ratings and reviews -->
							</div>
						</div>
					</div>
					<div class="StoreCard">
						<img class="StoreCard__header" src=""> <!-- Store's header img -->
						<img class="Avatar" src=""> <!-- Store avatar image -->
						<span class="StoreCard__name">Petes Catering</span>
						<span class="StoreCard__handle">@pete_eats</span>
						<p>
							We sell rare and high quality art sourced from big cities around the world. Follow us.
						</p>
						<div class="StoreCard__bottom">
							<div class="StoreCard__bottom__location">
								<img src=""> <!-- small location pin image -->
								London, UK
							</div>
							<div class="StoreCard__bottom__ratings">
								<img src=""> <!-- small star image -->
								3.7
								(<a href="">392</a>) <!-- link to ratings and reviews -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>

	<script src="./dist/scripts/site.min.js"></script>

</body>

</html>