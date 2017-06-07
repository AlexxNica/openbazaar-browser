<div class="overlay--listing overlay" id="overlay--listing">
	<div class="ListingOverlay max-width">
		<nav class="ListingOverlay__nav flex">
			<div class="ListingOverlay__nav__left click-to-close flex" id="ListingOverlay__nav__return-to-store">
				<!-- this will be rendered by OBB.controller.render.tabStore() -->
			</div>
			<div class="ListingOverlay__nav__right click-to-close flex">
				<i class="fa fa-times" aria-hidden="true"></i>
			</div>
		</nav>
		<section class="section ListingOverview" id="overlayListingOverview">
			<!-- this will be rendered by OBB.controller.render.overlayListingOverview() -->
		</section>
		<section class="section">
			<h2>Description</h2>
			<p id="overlayListingDescription">
				<!-- this will be rendered by OBB.controller.render.overlayListingDescription() -->
			</p>
		</section>
		<section class="Slideshow" id="ListingSlideshow">
			<!-- this will be rendered by OBB.controller.render.overlayListingSlideShow() -->
		</section>
		<section class="section ListingReviews">
			<h2>Reviews</h2>
			<div class="ListingReviews__wrapper" id="ListingReviews__wrapper">
				<!-- this will be rendered by OBB.controller.render.overlayListingReviews() -->
			</div>
			<div class="ListingReviews__bottom">
				<button class="button--shadowed strong" id="ListingReviews__bottom__show-more">
					Load More
				</button>
			</div>
		</section>
		<section class="section ListingShipping" id="overlayListingShipping">
			<!-- this will be rendered by OBB.controller.render.overlayListingShipping() -->
			</ul>
		</section>
		<section class="section">
			<h2>Return Policy</h2>
			<p id="overlayListingReturnPolicy">
				<!-- this will be rendered by OBB.controller.render.overlayListingReturnPolicy() -->
			</p>
		</section>
		<section class="section">
			<h2>Terms &amp; Conditions</h2>
			<p id="overlayListingTermsAndConditions">
				<!-- this will be rendered by OBB.controller.render.overlayTermsAndConditions() -->
			</p>
		</section>
	</div>
	<?php include 'overlay--purchase.php';?>
</div>