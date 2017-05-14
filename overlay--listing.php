<div class="overlay--listing overlay">
	<div class="ListingOverlay max-width">
		<nav class="ListingOverlay__nav flex">
			<div class="ListingOverlay__nav__left click-to-close flex">
				<div class="Avatar" style="background-image: url('./dist/images/example--cat-avatar.jpg')"></div>
				<span class="ListingOverlay__store-name">Ski Store</span>
				<span class="ListingOverlay__return">Return to Store</span>
			</div>
			<div class="ListingOverlay__nav__right click-to-close flex">
				<i class="fa fa-times" aria-hidden="true"></i>
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
		<section id="ListingSlideshow" class="Slideshow">
			<div class="Slidehow__controls" data-cycle-cmd="prev">
				<i class="fa fa-chevron-left" aria-hidden="true"></i>
			</div>
			<div class="Slideshow__show cycle-slideshow"
				data-cycle-fx=scrollHorz
    			data-cycle-timeout=0
    			data-cycle-pager="#Slideshow__pager"
    			data-cycle-pager-template='<li><img src="{{src}}"></li>'
    			data-cycle-auto-height="1:1"
    			>
    			<!-- listing images -->
				<img src="./dist/images/example--dog05.jpg">
				<img src="./dist/images/example--dog06.jpg">
				<img src="./dist/images/example--dog07.jpg">
				<img src="./dist/images/example--dog08.jpg">
			</div>
			<div class="Slidehow__controls" data-cycle-cmd="next">
				<i class="fa fa-chevron-right" aria-hidden="true"></i>
			</div>
			<!-- empty element for pager links -->
			<ul id="Slideshow__pager" class="Slideshow__pager center external"></ul>
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
							<button class="button--shadowed">
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
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Quality
								</div>
								<div class="ListingRating__right stars--5">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Delivery Speed
								</div>
								<div class="ListingRating__right stars--3">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Matched Description
								</div>
								<div class="ListingRating__right stars--5">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Customer Service
								</div>
								<div class="ListingRating__right stars--5">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
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
							<button class="button--shadowed">
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
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Quality
								</div>
								<div class="ListingRating__right stars--5">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Delivery Speed
								</div>
								<div class="ListingRating__right stars--2">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Matched Description
								</div>
								<div class="ListingRating__right stars--4">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Customer Service
								</div>
								<div class="ListingRating__right stars--5">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
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
							<button class="button--shadowed">
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
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Quality
								</div>
								<div class="ListingRating__right stars--5">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Delivery Speed
								</div>
								<div class="ListingRating__right stars--4">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Matched Description
								</div>
								<div class="ListingRating__right stars--5">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
							<li class="ListingRating">
								<div class="ListingRating__left">
									Customer Service
								</div>
								<div class="ListingRating__right stars--5">
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
									<i class="fa fa-star icon--star" aria-hidden="true"></i>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="ListingReviews__bottom">
				<button class="button--shadowed strong">
					Load More
				</button>
			</div>
		</section>
		<section class="section ListingShipping">
			<h2>Shipping</h2>
			<div class="ListingShipping__header">
				<div>
					Ships from: <span class="strong">United States</span>
				</div>
				<div>
					Ships to: 
					<select>
						<option>United States</option>
						<option>Australia</option>
						<option>United Kingdom</option>
						<option>Canada</option>
					</select>
				</div>
			</div>
			<ul class="ListingShipping__body">
				<li class="ListingShipping__option--free">
					<div>
						Free Shipping (UPS)
					</div>
					<div>
						5-10 days
					</div>
					<div>
						FREE
					</div>
				</li>
				<li class="ListingShipping__option">
					<div>
						Ground Shipping (UPS)
					</div>
					<div>
						3-5 days
					</div>
					<div>
						$7.00
					</div>
				</li>
				<li class="ListingShipping__option">
					<div>
						2 Day Shipping (UPS)
					</div>
					<div>
						2 day
					</div>
					<div>
						$18.00
					</div>
				</li>
				<li class="ListingShipping__option">
					<div>
						Overnight Shipping (UPS)
					</div>
					<div>
						1 day
					</div>
					<div>
						$27.00
					</div>
				</li>
				<li class="ListingShipping__option">
					<div>
						Overnight Shipping (FedEx)
					</div>
					<div>
						1 day
					</div>
					<div>
						$30.00
					</div>
				</li>
			</ul>
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
	<?php include 'overlay--purchase.php';?>
</div>