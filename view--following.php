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
		<main class="Store">
			<nav class="StoreNav">
				<div class="StoreNav__left">
					<img class="StoreNav__avatar" src=""> <!-- TODO: Check BEM compliance of this class name and the class names of its descendants -->
					<div class="StoreNav__info">
						<div class="StoreNav__info__top">
							Ski Shop
						</div>
						<div class="StoreNav__info__bottom">
							<div class="StoreNav__info__name">
								<img src=""> <!-- small location pin image -->
								Seattle, WA
							</div>
							<div class="StoreNav__info__ratings">
								<img src=""> <!-- small star image -->
								4.2
								(<a href="">192</a>) <!-- link to ratings and reviews -->
							</div>
						</div>
					</div>
				</div>
				<div class="StoreNave__right">
					<ul>
						<li>Home</li>
						<li>Store <span>26</span></li>
						<li>Following <span>5</span></li>
						<li>Followers <span>10.3k</span></li>
					</ul>
				</div>
			</nav>
			<div class="Store__header">
				<h1>Following</h1>
			</div>
			<div class="Column--single">
				<ul class="CardContainer">
					<li class="CardContainer__card">
						<div class="StoreCard">
							<img class="StoreCard__header" src=""> <!-- Store's header img -->
							<img class="StoreCard__avatar" src=""> <!-- Store avatar image -->
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
					</li>
					<li class="CardContainer__card">
						<div class="StoreCard">
							<img class="StoreCard__header" src=""> <!-- Store's header img -->
							<img class="StoreCard__avatar" src=""> <!-- Store avatar image -->
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
					</li>
					<li class="CardContainer__card">
						<div class="StoreCard">
							<img class="StoreCard__header" src=""> <!-- Store's header img -->
							<img class="StoreCard__avatar" src=""> <!-- Store avatar image -->
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
					</li>
					<li class="CardContainer__card">
						<div class="StoreCard">
							<img class="StoreCard__header" src=""> <!-- Store's header img -->
							<img class="StoreCard__avatar" src=""> <!-- Store avatar image -->
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
					</li>
				</ul>
			</div>
		</main>
	</div>

	<script src="./dist/scripts/site.min.js"></script>

</body>

</html>