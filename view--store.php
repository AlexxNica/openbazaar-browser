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
		<main class="Store View--store">
			<?php include 'inc--store-nav.php';?>
			<div class="Store__header">
				<h1>Store</h1>
			</div>
			<div class="Store__body">
				<div class="SearchListings flex">
					<input type="text" placeholder="Search Ski Shop">
					<button type="submit" class="Button--search-listings">
						<img src="">Go <!-- sprites image -->
					</button>
				</div>
				<div class="flex">
					<div class="Column--left">
						<section class="FilterCard--shipping">
							<h4>Shipping</h4>
							<form>
								<fieldset>
									<label for="filter--listings--ships-to">Ships to:</label>
									<select name="filter--listings--ships-to" id="filter--listings--ships-to">
										<option value="any">(Any Country)</option>
										<option value="merica">USA</option>
										<option value="uk">UK</option>
										<option value="china">China</option>
									</select>
								</fieldset>
								<fieldset>	
									<input type="checkbox" id="filter--listings--free-shipping" name="filter--listings--free-shipping" value="free-shipping">
									<label for="filter--listings--free-shipping"><span class="tag--green caps">Free Shipping</span></label>
								</fieldset>
							</form>
						</section>
						<section class="FilterCard--category">
							<h4>Category</h4>
							<ul>
								<li><input type="radio" name="filter--listings--category" value="all" checked>All</li>
								<li><input type="radio" name="filter--listings--category" value="skis">Skis</li>
								<li><input type="radio" name="filter--listings--category" value="gear">Gear</li>
								<li><input type="radio" name="filter--listings--category" value="lift-passes">Lift Passes</li>
								<li><input type="radio" name="filter--listings--category" value="accessories">Accessories</li>
								<li><input type="radio" name="filter--listings--category" value="snowboards">Snowboards</li>
							</ul>
							<a href="">24 more...</a> <!--  expands to show more categories -->
						</section>
						<section class="FilterCard--rating">
							<h4>Rating</h4>
							<ul>
								<li>
									<input type="radio" name="filter--listings--rating" value="five">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</li>
								<li>
									<input type="radio" name="filter--listings--rating" value="four-or-more">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									&amp; up
								</li>
								<li>
									<input type="radio" name="filter--listings--rating" value="three-or-more">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									&amp; up
								</li>
								<li>
									<input type="radio" name="filter--listings--rating" value="two-or-more">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									&amp; up
								</li>
								<li>
									<input type="radio" name="filter--listings--rating" value="one-or-more" checked>
									<img src="./dist/images/icon--star.png">
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
				</div>
			</div>
		</main>
	</div>

	<script src="./dist/scripts/site.min.js"></script>

</body>

</html>