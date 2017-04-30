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
					<button type="submit" class="searchButton">
						Go
					</button>
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
				<h1>Home</h1>
			</div>
			<div class="Column--left">
				<div class="StoreCard">
					<img class="StoreCard__header" src=""> <!-- Store's header img -->
					<img class="StoreCard__avatar" src=""> <!-- Store avatar image -->
					<span class="StoreCard__name">Ski Shop</span>
					<span class="StoreCard__handle">@skiShop</span>
					<p>
						We sell rare and high quality art sourced from big cities around the world. Follow us.
					</p>
					<div class="StoreCard__bottom">
						<div class="StoreCard__bottom__location">
							<img src=""> <!-- small location pin image -->
							Seattle, WA
						</div>
						<div class="StoreCard__bottom__ratings">
							<img src=""> <!-- small star image -->
							4.2
							(<a href="">192</a>) <!-- link to ratings and reviews -->
						</div>
					</div>
				</div>
				<section class="Section--store-information">
					<h3>Information</h3>
					<ul>
						<li>
							<h4>OpenBazaar ID</h4>
							<p>Qmai9U7856XKgDSvMFExPbQufcsc4ksG779VyG4Md5dn4J</p>
						</li>
						<li>
							<h4>Website</h4>
							<p><a href="http://urbanart.com">http://urbanart.com</a><img src=""></p>
						</li>
						<li>
							<h4>Email</h4>
							<p><a href="mailto:contact@urbanart,com">contact@urbanart.com</a><img src=""></p>
						</li>
						<li>
							<h4>Twitter</h4>
							<p><a href="https://twitter.com/@urbanart">@urbanart</a><img src=""></p>
						</li>
						<li>
							<h4>Facebook</h4>
							<p><a href="https://www.facebook.com/">/urbanart</a><img src=""></p>
						</li>
						<li>
							<h4>Instagram</h4>
							<p><a href="https://www.instagram.com/">/urbanart</a><img src=""></p>
						</li>
						<li>
							<h4>SnapChat</h4>
							<p>urbanart</p>
						</li>
					</ul>
				</section> 
			</div>
			<div class="Column--right">
				<section class="Section">
					<h3>About</h3>
					<p>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
					</p>
					<p>
						Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
					</p>
				</section>
			</div>
		</main>
	</div>

	<script src="./dist/scripts/site.min.js"></script>

</body>

</html>