// controller.render is used to render components using data from OBB.model
OBB.controller.render = {
    tabStore: function() {
        // render header image and h1
        $( "#Tab--store__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Store' ) );
        // render #FilterCard--shipping
        $( "#filter--listings--ships-to" ).replaceWith( OBB.templates.filterCardShippingOptions( OBB.model.current_store.countries ) );
        // render #FilterCard--category
        $( "#FilterCard--category__list" ).replaceWith( OBB.templates.filterCardCategoryOptions( OBB.model.current_store.categories ) );
        // render #CardContainer--listings
        $( "#CardContainer--listings" ).replaceWith( OBB.templates.listingCardContainer( OBB.model.current_store.listing_cards_info, 'CardContainer--listings' ) );
        // render store name and avatar on overlay--listing
        $( "#ListingOverlay__nav__return-to-store" ).replaceWith( OBB.templates.overlayListingReturnToStore( OBB.model.current_store.summary ) );
        // add event listeners
        OBB.controller.event_listeners.tabStore();
    },

    tabHome: function() {
        // render header image and h1
        $( "#Tab--home__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Home' ) );

        // render current_node's store card in left column
        $ ( "#Tab--home__node-card" ).replaceWith( OBB.templates.nodeCard( OBB.model.current_store.summary, "Tab--home__node-card" ) );

        // TODO render information card in left column

        // render About info
        $( "#Tab--home__about" ).text( OBB.model.current_store.summary.description );
    },

    tabFollowing: function() {
        // render header image and h1
        $( "#Tab--following__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Following' ) );
        // TODO render following cards
    },

    tabFollowers: function() {
        // render header image and h1
        $( "#Tab--followers__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Followers' ) );
        // TODO render followers cards
    },

    pageNodeNavSummary: function() {
        // render #NodeNavSummary in left of NodeNav
        $( "#NodeNavSummary" ).replaceWith( OBB.templates.pageNodeNavSummary( OBB.model.current_store.summary ) );
    },

    pageNode: function() {

        OBB.controller.render.pageNodeNavSummary();
        OBB.controller.render.tabStore();
        OBB.controller.render.tabHome();
        OBB.controller.render.tabFollowing();
        OBB.controller.render.tabFollowers();
        // add event listeners
        OBB.controller.event_listeners.pageNode();
    },

    overlayListingOverview: function(){
        $( "#overlayListingOverview" ).replaceWith( OBB.templates.overlayListingOverview( OBB.model.current_store.single_listing ) );

    },

    overlayListingDescription: function(){
        // render description on overlay--listing
        $( "#overlayListingDescription" ).text( OBB.model.current_store.single_listing.description );
    },

    overlayListingSlideShow: function(){
        // render slideshow on overlay--listing
        $( "#ListingSlideshow" ).replaceWith( OBB.templates.overlayListingSlideShow( OBB.model.current_store.single_listing ) );
        $( '.cycle-slideshow' ).cycle();
    },

    overlayListingReviews: function(){
        // TODO
    },

    overlayListingShipping: function(){
        // render shipping options on overlay--listing
        $( "#overlayListingShipping" ).replaceWith( OBB.templates.overlayListingShipping( OBB.model.current_store.single_listing ) );
    },

    overlayListingReturnPolicy: function(){
        // render Return Policy on overlay--listing
        $( "#overlayListingReturnPolicy" ).text( OBB.model.current_store.single_listing.return_policy );

    },

    overlayTermsAndConditions: function(){
        // render Terms and Conditions on overlay--listing
        $( "#overlayListingTermsAndConditions" ).text( OBB.model.current_store.single_listing.terms_and_conditions );

    },

    overlayListing: function() {
        OBB.controller.render.overlayListingOverview();
        OBB.controller.render.overlayListingDescription();
        OBB.controller.render.overlayListingSlideShow();
        OBB.controller.render.overlayListingReviews();
        OBB.controller.render.overlayListingShipping();
        OBB.controller.render.overlayListingReturnPolicy();
        OBB.controller.render.overlayTermsAndConditions();
        OBB.controller.event_listeners.overlayListing();
    },

};



