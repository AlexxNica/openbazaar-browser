<div class="overlay--purchase overlay" id="overlay--purchase">
	<div class="PurchaseOverlay max-width">
		<nav class="PurchaseOverlay__nav">
			<div class="click-to-close">
				<i class="fa fa-times" aria-hidden="true"></i>
			</div>
		</nav>
		<section class="section PurchaseOverlay__body">
			<div class=PurchaseOverlay__body__top>
				<h3>Purchase isn't supported on the web yet</h3>
				<p>
					Purchase this listing in the OpenBazaar app. It's available for Windows, Mac, and Linux. Mobile coming soon.
				</p>
				<a href="https://openbazaar.org/download.html" class="button--shadowed strong" target="_blank">Download OpenBazaar</a>
			</div>
        	<div class="PurchaseOverlay__body__bottom" id="PurchaseOverlay__body__bottom">
       		    <p>
       		        Already have the OpenBazaar app?
       		    </p>
       		    <div>
       		        <a href="ob://[peerID]/store/[slug]" class="button--shadowed strong">
       		            Open this listing in OpenBazaar
       		        </a> 
       		        <p>
       		            View this listing in OpenBazaar
       		        </p>
       		    </div>
       		    <div>
       		        <div class="button--shadowed strong" id="click-to-copy" data-clipboard-target="#listing-url">
       		            Copy URL
       		            <div id="copied-indicator">
       		            	Copied!
       		        	</div>
       		        </div>
       		        <p>
       		            Listing URL: <span id="listing-url">ob://[peerID]/store/[slug]</span>
       		        </p>
       		    </div>
       		</div>
		</section>
	</div>
</div>