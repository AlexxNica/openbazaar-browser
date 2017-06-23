<div class="tab tab--store active">
    <div class="Node__header" id="Tab--store__header">
        <!-- OBB.controller.render.TabStore() will render the header -->
    </div>
    <div class="Node__body">
        <div class="SearchListings flex">
            <input type="text" class="quicksearch" placeholder="Search Ski Shop">
        </div>
        <div class="flex">
            <div class="Column--left">
                <section class="FilterCard--shipping">
                    <h4>Shipping</h4>
                    <form>
                        <fieldset class="button-group" data-filter-group="ships_to">
                            <label for="filter--ships-to">Ships to:</label>
                            <select name="filter--ships-to" id="filter--listings--ships-to">
                                <!-- OBB.controller.render.TabStore() will render the options -->
                            </select>
                        </fieldset>
                        <fieldset class="button-group" data-filter-group="free_shipping">  
                            <input class="checkbox-filters" type="checkbox" name="filter--free-shipping" value=".filter--free-shipping">
                            <label for="filter--listings--free-shipping"><span class="tag--green">Free Shipping</span></label>
                        </fieldset>
                    </form>
                </section>
                <section class="FilterCard--category">
                    <h4>Category</h4>
                    <ul id="FilterCard--category__list">
                        <!-- OBB.controller.render.TabStore() will render the options -->
                    </ul>
                </section>
                <section class="FilterCard--rating">
                    <h4>Rating</h4>
                    <ul class="button-group radio-filters" data-filter-group="rating">
                        <li>
                            <input type="radio" data-filter="ge4Stars" name="filter--listings--rating">
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            &amp; up
                        </li>
                        <li>
                            <input type="radio" data-filter="ge3Stars" name="filter--listings--rating">
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            &amp; up
                        </li>
                        <li>
                            <input type="radio" data-filter="ge2Stars" name="filter--listings--rating">
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            &amp; up
                        </li>
                        <li>
                            <input type="radio" data-filter="ge1Stars" name="filter--listings--rating">
                            <i class="fa fa-star icon--star" aria-hidden="true"></i>
                            &amp; up
                        </li>
                        <li>
                            <input type="radio" data-filter="" name="filter--listings--rating" checked>
                            Any
                        </li>
                    </ul>
                </section>
            </div>
            <div class="Column--right SearchListings__container">
                <section class="ListingsHeading">
                    <div class="ListingsHeading__left">
                        <span class="strong" id="NumOfListings">26 listings</span> found
                    </div>
                    <div class="ListingsHeading__right">
                        <form>
                            <label for="filter--listings--sort-by">Sort by</label>
                            <select class="select-sort" name="filter--listings--sort-by" id="filter--listings--sort-by">
                                <option value="original">Default</option>
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