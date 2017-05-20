// controller.render is used to render components using data from OBB.model
OBB.controller.render = {
    tabStore: function() {
        // render header image and h1
        $( "#Tab--Node__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Store' ) );
        // render #FilterCard--shipping
        $( "#filter--listings--ships-to" ).replaceWith( OBB.templates.filterCardShippingOptions( OBB.model.current_store.countries ) );
        // render #FilterCard--category
        $( "#FilterCard--category__list" ).replaceWith( OBB.templates.filterCardCategoryOptions( OBB.model.current_store.categories ) );
        // render #CardContainer--listings
        $( "#CardContainer--listings" ).replaceWith( OBB.templates.cardContainer( OBB.model.current_store.listing_cards_info, 'CardContainer--listings' ) );
        // render store name and avatar on overlay--listing
        $( "#ListingOverlay__nav__return-to-store" ).replaceWith( OBB.templates.overlayListingReturnToStore( OBB.model.current_store.summary ) );
    },

    tabHome: function() {
        // render header image and h1
        $( "#Tab--node__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Home' ) );

        // TODO render current_node's store card in left column
        $ ( "#Tab--home__node-card" ).replaceWith( OBB.templates.nodeCard( OBB.model.current_store.summary, "Tab--home__node-card" ) );

        // TODO render information card in left column

        // TODO render About info
        $( "#Tab--home__about" ).text( OBB.model.current_store.summary.description );
    },

    tabFollowing: function() {
        // render header image and h1
        $( "#Tab--node__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Following' ) );
        // TODO render following cards
    },

    tabFollowers: function() {
        // render header image and h1
        $( "#Tab--node__header" ).replaceWith( OBB.templates.tabNodeHeader( OBB.model.current_store.summary, 'Followers' ) );
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
    },

    overlayListingOverview: function(){
        // TODO
    },

    overlayListingDescription: function(){
        // TODO
    },

    overlayListingSlideShow: function(){
        // TODO
    },

    overlayListingReviews: function(){
        // TODO
    },

    overlayListingShipping: function(){
        // TODO
    },

    overlayReturnPolicy: function(){
        // TODO
    },

    overlayTermsofService: function(){
        // TODO
    },

    overlayListing: function() {
        OBB.controller.render.overlayListingBuyNow();
        OBB.controller.render.overlayListingDescription();
        OBB.controller.render.overlayListingSlideShow();
        OBB.controller.render.overlayListingReviews();
        OBB.controller.render.overlayListingShipping();
        OBB.controller.render.overlayReturnPolicy();
        OBB.controller.render.overlayTermsofService();
    },

};



