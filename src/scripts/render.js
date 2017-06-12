// controller.render is used to render components using data from OBB.model
OBB.controller.render = {
    tabStore: function() {
        // render header image and h1
        $( "#Tab--store__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Store', 'store' ) );
        // render #FilterCard--shipping
        $( "#filter--listings--ships-to" ).replaceWith( OBB.templates.filterCardShippingOptions( OBB.model.current_store.countries ) );
        // render #FilterCard--category
        $( "#FilterCard--category__list" ).replaceWith( OBB.templates.filterCardCategoryOptions( OBB.model.current_store.categories ) );
        // render #CardContainer--listings
        $( "#CardContainer--listings" ).replaceWith( OBB.templates.listingCardContainer( OBB.model.current_store.listing_cards_info, 'CardContainer--listings' ) );
        // render store name and avatar on overlay--listing
        $( "#ListingOverlay__nav__return-to-store" ).replaceWith( OBB.templates.overlayListingReturnToStore( OBB.model.current_store.summary ) );
        // initialize filtering
        OBB.controller.addFiltering();
    },

    tabHome: function() {
        // render header image and h1
        $( "#Tab--home__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Home', 'home' ) );

        // render current_node's store card in left column
        $( "#Tab--home__node-card" ).replaceWith( OBB.templates.nodeCard( OBB.model.current_store.summary, "Tab--home__node-card", OBB.model.current_store.peer_id ) );

        // render information card in left column
        $( "#Tab--home__information" ).replaceWith( OBB.templates.tabHomeInformation( OBB.model.current_store.contact_info, OBB.model.current_store.peer_id ) );

        // render About info
        $( "#Tab--home__about" ).text( OBB.model.current_store.summary.about );
    },

    tabFollowing: function() {
        // render header image and h1
        $( "#Tab--following__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Following', 'following' ) );
    },

    tabFollowers: function() {
        // render header image and h1
        $( "#Tab--followers__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Followers', 'followers' ) );
    },

    pageNodeNavSummary: function() {
        // render #NodeNavSummary in left of NodeNav
        $( "#NodeNavSummary" ).replaceWith( OBB.templates.pageNodeNavSummary( OBB.model.current_store.summary ) );
    },

    pageNodeNavTabs: function() {
        // render #NodeNavTabs in right of NodeNav
        $( "#NodeNavTabs" ).replaceWith( OBB.templates.pageNodeNavTabs( OBB.model.current_store.listing_cards_info, OBB.model.current_store.following, OBB.model.current_store.followers ) );
    },

    pageNode: function() {
        // remove active class from nav tabs except tab--store
        $( ".navtab" ).not( "[name='tab--store']" ).removeClass( 'active' );
        $( "[name='tab--store']" ).addClass( 'active' );

        // remove active class from overlays
        $( ".overlay" ).removeClass( 'active' );

        // render Nav
        OBB.controller.render.pageNodeNavSummary();

        // set colors to user specified colors

        //  primary
        // TODO
        //  secondary
        // TODO
        //  text
        // TODO
        //  highlight
        // TODO
        //  highlight text
        $(':root').css('--highlight_text', OBB.model.current_store.colors.highlight_text);

        // render tabs
        OBB.controller.render.tabStore();
        OBB.controller.render.tabHome();
        OBB.controller.render.tabFollowing();
        OBB.controller.render.tabFollowers();

    },

    overlayListingOverview: function() {
        $( "#overlayListingOverview" ).replaceWith( OBB.templates.overlayListingOverview( OBB.model.current_store.single_listing ) );
    },

    overlayListingDescription: function() {
        // render description on overlay--listing
        $( "#overlayListingDescription" ).text( OBB.model.current_store.single_listing.description );
    },

    overlayListingSlideShow: function() {
        // render slideshow on overlay--listing
        $( "#ListingSlideshow" ).replaceWith( OBB.templates.overlayListingSlideShow( OBB.model.current_store.single_listing ) );
        $( '.cycle-slideshow' ).cycle();
    },

    overlayListingReviews: function() {
        // Get list of rating hashes from API (one call)
        try {                
            // request for rating hashes
            $.ajax({
                url: 'https://gateway.ob1.io/ob/ratings/' + OBB.model.current_store.peer_id + '/' + OBB.model.current_store.single_listing.slug,
                type: 'GET',
                success: function( rating_hashes_response ){
                    rating_hashes = rating_hashes_response.ratings;
                    if ( rating_hashes.length == 0 ) {
                        $('#ListingReviews__wrapper').text('No ratings available.');
                    } else {
                        $('#ListingReviews__wrapper').text('');
                    }
                    // if there are more than 5 ratings then show the 'Load More' button
                    if ( rating_hashes.length > 5 ) {
                        $('#ListingReviews__bottom__show-more').addClass('active');
                    } else {
                        $('#ListingReviews__bottom__show-more').removeClass('active');
                    }
                    // For the first 5 rating hashes (or all of them if there are fewer than 5) get the full ratings (max num_reviews_to_show API calls)
                    num_ratings_to_show = Math.min(5, rating_hashes.length);
                    $.each(rating_hashes.slice(0, num_ratings_to_show), function(index, rating_hash) {
                        try {                
                            // request for individual rating
                            $.ajax({
                                url: 'https://gateway.ob1.io/ob/rating/' + OBB.model.current_store.peer_id + '/' + rating_hash,
                                type: 'GET',
                                success: function( rating_hash_response ){
                                    rating = rating_hash_response;
                                    // Build the rating info with OBB.controller.templates.overlayListingIndividualReview( rating )
                                    //  and make it child of $('#ListingReviews__wrapper')
                                    $('#ListingReviews__wrapper').append( OBB.templates.overlayListingIndividualReview( rating ) );
                                },
                                error: function( data ) {
                                    console.log('https://gateway.ob1.io/ob/rating/' + OBB.model.current_store.peer_id + '/' + rating_hash + ' failed');
                                    console.log( data );
                                }
                            });
                        } catch( err ) {
                            // Ajax didn't work out so well.
                            console.log( 'Ajax call(s) failed', err );
                        }
                    });
                },
                error: function( data ) {
                    $('#ListingReviews__wrapper').text('No ratings available.');
                    console.log('https://gateway.ob1.io/ob/ratings/' + OBB.model.current_store.peer_id + '/' + OBB.model.current_store.single_listing.slug + ' failed');
                    console.log( data );
                }
            });
        } catch( err ) {
            // API calls didn't work out so well.
            console.log( 'Failed to fetch rating hashes.', err );
        }
    },

    overlayListingShipping: function() {
        // render shipping options on overlay--listing
        $( "#overlayListingShipping" ).replaceWith( OBB.templates.overlayListingShipping( OBB.model.current_store.single_listing ) );
    },

    overlayListingReturnPolicy: function() {
        // render Return Policy on overlay--listing
        $( "#overlayListingReturnPolicy" ).text( OBB.model.current_store.single_listing.return_policy );

    },

    overlayTermsAndConditions: function() {
        // render Terms and Conditions on overlay--listing
        $( "#overlayListingTermsAndConditions" ).text( OBB.model.current_store.single_listing.terms_and_conditions );
    },

    overlayPurchase: function() {
        // render buttons at bottom of overlay--purchase
        $( "#PurchaseOverlay__body__bottom" ).replaceWith( OBB.templates.overlayPurchaseBottom( OBB.model.current_store.single_listing.ob_url ) );

    },

    overlayListing: function() {
        OBB.controller.render.overlayListingOverview();
        OBB.controller.render.overlayListingDescription();
        OBB.controller.render.overlayListingSlideShow();
        OBB.controller.render.overlayListingReviews();
        OBB.controller.render.overlayListingShipping();
        OBB.controller.render.overlayListingReturnPolicy();
        OBB.controller.render.overlayTermsAndConditions();
        OBB.controller.render.overlayPurchase();
    },

};



