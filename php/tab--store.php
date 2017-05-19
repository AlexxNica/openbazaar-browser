<div class="tab tab--store active">
    <div class="Node__header" style="background-image: url(./dist/images/example--dog06.jpg);" id="Node__header">
        <h1>Store</h1>
    </div>
    <div class="Node__body">
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
                                <!-- OBB.controller.render.TabStore() will render the options -->
                            </select>
                        </fieldset>
                        <fieldset>  
                            <input type="checkbox" id="filter--listings--free-shipping" name="filter--listings--free-shipping" value="free-shipping">
                            <label for="filter--listings--free-shipping"><span class="tag--green">Free Shipping</span></label>
                        </fieldset>
                    </form>
                </section>
                <section class="FilterCard--category">
                    <h4>Category</h4>
                    <ul id="FilterCard--category__list">
                        <!-- OBB.controller.render.TabStore() will render the options -->
                    </ul>
                    <a>24 more...</a> <!--  expands to show more categories -->
                </section>
                <section class="FilterCard--rating">
                    <h4>Rating</h4>
                    <ul>
                        <li>
                            <input type="radio" name="filter--listings--rating" value="five">
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                        </li>
                        <li>
                            <input type="radio" name="filter--listings--rating" value="four-or-more">
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            &amp; up
                        </li>
                        <li>
                            <input type="radio" name="filter--listings--rating" value="three-or-more">
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            &amp; up
                        </li>
                        <li>
                            <input type="radio" name="filter--listings--rating" value="two-or-more">
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            &amp; up
                        </li>
                        <li>
                            <input type="radio" name="filter--listings--rating" value="one-or-more" checked>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
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
                <ul class="CardContainer" id="CardContainer--listings">
                    <!-- OBB.controller.render.TabStore() will render this component -->
                </ul>
            </div>
        </div>
    </div>
    <?php include 'overlay--listing.php';?>
    <?php include 'overlay--not-viewable.php';?>
</div>