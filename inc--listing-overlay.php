<div class="overlay overlay--active"> <!-- TODO remove overlay--active from this div before live -->
	<div class="ListingOverlay view--listing-overlay max-width">
		<nav class="ListingOverlay__nav flex">
			<div class="ListingOverlay__nav__left flex">
				<img class="Avatar" src="../dist/images/example--cat-avatar.jpg">
				<span class="ListingOverlay__store-name">Ski Store</span>
				<span class="ListingOverlay__return">Return to Store</span>
			</div>
			<div class="ListingOverlay__nav__right flex">
				<img src="../dist/images/icon--close.png">
			</div>
		</nav>
		<section class="section ListingOverview">
			<div class="flex ListingOverview__top">
				<div class="ListingOverview__top__left">
					Full Ski Set
				</div>
				<div class="ListingOverview__top__right">
					$499.99
				</div>
			</div>
			<div class="flex ListingOverview__body">
				<div class="Column--left">
					<div class="ListingOverview__img" style="background-image: url('./dist/images/example--dog00.jpg')"></div>
					<a href="#ListingSlideshow">View 4 photos</a>
				</div>
				<div class="Column--right">
					<form class="ListingOverview__buy-now">
						<ul class="ListingOverview__buy-now__options">
							<li class="flex">
								<span>Size</span>
								<select>
									<option>Choose Size</option>
									<option>10</option>
									<option>9</option>
								</select>
							</li>
						</ul>
						<button class="button--buy-now" name="button--buy-now">BUY NOW</button>
					</form>
					<ul class="ListingOverview__info">
						<li>
							Type: <span>Physical</span>
						</li>
						<li>
							Condition: <span>New</span>
						</li>
					</ul>
					<div class="ListingOverview__tags">
						<h4>Tags</h4>
						<ul>
							<li><span>skiing</span></li>
							<li><span>ski</span></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="section">
			<h2>Description</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</section>
		<section id="ListingSlideshow" class="ListingSlideshow">
			<!-- TODO -->
		</section>
		<section class="section ListingReviews">
			<h2>Reviews</h2>
			<div class="ListingReviews__wrapper">
				<div class="flex ListingReview">
					<div class="ListingReview__left">
						<div class="ListingReview__header">
							March 2nd, 7:32 PM by <a href="">Chairman Meow</a>
						</div>
						<div class="ListingReview__body">
							<p>This vendor sells amazing dogs. They don't chase cats and take most of the blame when there is a mess in the house.<p>
						</div>
						<div class="ListingReview__bottom">
							<button class="button--txn-details">
								Transaction Details
							</button>
						</div>
					</div>
					<div class="ListingReview__right">
						<ul class="ListingRatings">
							<li class="ListingRating">
								<div class="ListingRating__left">
									Overall
								</div>
								<div class="ListingRating__right stars--4">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Quality
								</div>
								<div class="ListingRating__right stars--5">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Delivery Speed
								</div>
								<div class="ListingRating__right stars--3">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Matched Description
								</div>
								<div class="ListingRating__right stars--5">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Customer Service
								</div>
								<div class="ListingRating__right stars--5">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- next review -->
				<div class="flex ListingReview">
					<div class="ListingReview__left">
						<div class="ListingReview__header">
							February 1st, 11:00 AM by <a href="">Master Mouser</a>
						</div>
						<div class="ListingReview__body">
							<p>Bought two dogs to watch my back while I stalk mice in my yard. The dogs came well trained. Will use again, but delivery could be faster.<p>
						</div>
						<div class="ListingReview__bottom">
							<button class="button--txn-details">
								Transaction Details
							</button>
						</div>
					</div>
					<div class="ListingReview__right">
						<ul class="ListingRatings">
							<li class="ListingRating">
								<div class="ListingRating__left">
									Overall
								</div>
								<div class="ListingRating__right stars--3">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Quality
								</div>
								<div class="ListingRating__right stars--5">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Delivery Speed
								</div>
								<div class="ListingRating__right stars--2">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Matched Description
								</div>
								<div class="ListingRating__right stars--4">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Customer Service
								</div>
								<div class="ListingRating__right stars--5">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- next review -->
				<div class="flex ListingReview">
					<div class="ListingReview__left">
						<div class="ListingReview__header">
							Jan 22nd, 8:33 PM by <a href="">Scruffy Cat</a>
						</div>
						<div class="ListingReview__body">
							<p>This vendor sells the best dogs!<p>
						</div>
						<div class="ListingReview__bottom">
							<button class="button--txn-details">
								Transaction Details
							</button>
						</div>
					</div>
					<div class="ListingReview__right">
						<ul class="ListingRatings">
							<li class="ListingRating">
								<div class="ListingRating__left">
									Overall
								</div>
								<div class="ListingRating__right stars--5">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Quality
								</div>
								<div class="ListingRating__right stars--5">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Delivery Speed
								</div>
								<div class="ListingRating__right stars--4">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Matched Description
								</div>
								<div class="ListingRating__right stars--5">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Customer Service
								</div>
								<div class="ListingRating__right stars--5">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
									<img src="./dist/images/icon--star.png">
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="ListingReviews__bottom">
				<button class="button--txn-details strong">Load More</button>
			</div>
		</section>
		<section class="section ListingShipping">
			<h2>Shipping</h2>
			<!-- TODO -->
		</section>
		<section class="section">
			<h2>Return Policy</h2>
			<p>
				All sales are final.
			</p>
		</section>
		<section class="section">
			<h2>Terms of Service</h2>
			<p>
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</section>
	</div>
</div>