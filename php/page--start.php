<div class="Page active" id="PageStartContainer">
	<div class="Start page--start max-width">
		<div class="Start__header center">
			<img src="./dist/images/logo--openbazaar--med.png">
			<p>Browse OpenBazaar on the Web</p>
			<span class="tag--green">beta</span>
		</div>
		<div class="Start__search center">
			<input class="border-box" type="text" placeholder="Enter an OpenBazaar @handle or ID" id="Start__search__input">
			<button type="submit" class="button--search" id="Start__search__button">Go</button>
			<div id="Start__search__status" class="status">
				<!-- text will be added dynamically -->
			</div>
		</div>
		<div class="Start__bottom center">
			<a href="https://openbazaar.org/download.html" target="_blank">Download OpenBazaar</a>
			<a href="https://openbazaar.org/" target="_blank">About OpenBazaar</a>
		</div>
		<div class="Start__featured">		
			<h2 class="center">Featured Stores</h2>
			<div class="CardContainer" id="FeaturedCards">
				<!-- Featured store cards will be rendered on page load -->
				<div class="Card">
					<!-- Empty card needed for proper alignment. Do not remove. -->
				</div>
			</div>
		</div>
	</div>
</div>