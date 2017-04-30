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
				<h1>Store</h1>
			</div>
			<div class="SearchListings">
				<input type="text" placeholder="Search">
				<button type="submit" class="Button--search-listings">
					<img src=""> <!-- sprites image -->
				</button>
			</div>
			<div class="Column--left">
				<section class="Section--shipping">
					<h3>Shipping</h3>
					<form>
						<label for="filter--listings--ships-to">Ships to:</label>
						<select name="filter--listings--ships-to" id="filter--listings--ships-to">
							<option value="any">(Any Country)</option>
							<option value="merica">USA</option>
							<option value="uk">UK</option>
							<option value="china">China</option>
						</select>
						<label for="filter--listings--free-shipping"><span class="tag--green caps">Free Shipping</span></label>
						<input type="checkbox" id="filter--listings--free-shipping" name="filter--listings--free-shipping" value="free-shipping">
					</form>
				</section>
				<section class="Section--category">
					<h3>Category</h3>
					<ul>
						<li><input type="radio" name="filter--listings--category" value="all" checked>All</li>
						<li><input type="radio" name="filter--listings--category" value="skis">Skis</li>
						<li><input type="radio" name="filter--listings--category" value="gear"> Gear</li>
						<li><input type="radio" name="filter--listings--category" value="lift-passes">Lift Passes</li>
						<li><input type="radio" name="filter--listings--category" value="accessories">Accessories</li>
						<li><input type="radio" name="filter--listings--category" value="snowboards">Snowboards</li>
					</ul>
					<a href="">24 more...</a> <!--  expands to show more categories -->
				</section>
				<section class="Section--rating">
					<h3>Category</h3>
					<ul>
						<li>
							<input type="radio" name="filter--listings--rating" value="five">
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
						</li>
						<li>
							<input type="radio" name="filter--listings--rating" value="four-or-more">
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
							&amp; up
						</li>
						<li>
							<input type="radio" name="filter--listings--rating" value="three-or-more">
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
							&amp; up
						</li>
						<li>
							<input type="radio" name="filter--listings--rating" value="two-or-more">
							<img src=""> <!-- small star image -->
							<img src=""> <!-- small star image -->
							&amp; up
						</li>
						<li>
							<input type="radio" name="filter--listings--rating" value="one-or-more" checked>
							<img src=""> <!-- small star image -->
							&amp; up
						</li>
					</ul>
				</section>
			</div>
			<div class="Column--right">
				<section class="ListingsHeading">
					<div class="ListingsHeading__left">
						<span class="strong">26 listings</span> found
					</div>
					<div class="ListingsHeading__right">
						<form>
							<label for="filter--listings--sort-by">Sort by</label>
							<select name="filter--listings--sort-by" id="filter--listings--sort-by">
								<option value="price-low-to-high">Price (low to high)</option>
								<option value="price-high-to-low">Price (high to low)</option>
								<option value="ave-rating-high-to-low">Ave Rating (high to low)</option>
								<option value="ave-rating-low-to-high">Ave Rating (low to high)</option>
								<option value="rating-count-high-to-low">Rating Count (high to low)</option>
								<option value="rating-count-low-to-high">Rating Count (low to high)</option>
							</select>
						</form>
					</div>
				</section>
				<ul class="CardContainer">
					<li class="CardContainer__card">
						<div class="ListingCard">
							<div class="ListingCard__header" style="background-image: url('')"> <!-- Listing thumbnail img as div background img-->
								<span class="tag--green caps">Free Shipping</span>
							</div>
							<span class="ListingCard__title">Full Ski Set</span> <!-- item title -->
							<div class="ListingCard__bottom">
								<div class="ListingCard__bottom__ratings">
									<img src=""> <!-- small star image -->
									4.2
									(<a href="">14</a>) <!-- link to ratings and reviews -->
								</div>
								<div class="ListingCard__bottom__price">
									<span class="strong">$499.50</span>
								</div>
							</div>
						</div>
					</li>
					<li class="CardContainer__card">
						<div class="ListingCard">
							<div class="ListingCard__header" style="background-image: url('')"> <!-- Listing thumbnail img as div background img-->
								<span class="tag--green">Free Shipping</span>
								<img class="tag--pin" src=""><!-- pushpin icon for pinned tag -->
							</div>
							<span class="ListingCard__title">Fischer Ski Shoes</span> <!-- item title -->
							<div class="ListingCard__bottom">
								<div class="ListingCard__bottom__ratings">
									<img src=""> <!-- small star image -->
									5.0
									(<a href="">7</a>) <!-- link to ratings and reviews -->
								</div>
								<div class="ListingCard__bottom__price">
									<span class="strong">$129.85</span>
								</div>
							</div>
						</div>
					</li>
					<li class="CardContainer__card">
						<div class="ListingCard">
							<div class="ListingCard__header" style="background-image: url('')"> <!-- Listing thumbnail img as div background img-->
								<span class="tag--green">Free Shipping</span>
							</div>
							<span class="ListingCard__title">Sketcher Running Shoes</span> <!-- item title -->
							<div class="ListingCard__bottom">
								<div class="ListingCard__bottom__ratings">
									<img src=""> <!-- small star image -->
									4.1
									(<a href="">24</a>) <!-- link to ratings and reviews -->
								</div>
								<div class="ListingCard__bottom__price">
									<span class="strong">$42.25</span>
								</div>
							</div>
						</div>
					</li>
					<li class="CardContainer__card">
						<div class="ListingCard--nsfw">
							<div class="ListingCard__header" style="background-image: url('')"> <!-- Listing thumbnail is overridden for nsfw content-->
								<span class="tag--green">Free Shipping</span>
							</div>
							<span class="ListingCard__title">Sketchy Running Shoes</span> <!-- item title -->
							<div class="ListingCard__bottom">
								<div class="ListingCard__bottom__ratings">
									<img src=""> <!-- small star image -->
									3.7
									(<a href="">921</a>) <!-- link to ratings and reviews -->
								</div>
								<div class="ListingCard__bottom__price">
									<span class="strong">$129.99</span>
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