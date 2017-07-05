OBB.controller.event_listeners = function() {
    // store nav tab functionality
    $("body").on( 'click', ".navtab", function () {
        var tab_target = $(this)["0"].attributes[1].value;
        $(".navtab, .tab, .overlay").removeClass("active");
        $(this).addClass("active");
        $(".tab." + tab_target).addClass("active");
    });

    // logo click brings back to start page
    $("body").on( 'click', "#Header__logo", function () {
        $(".Page").removeClass("active");
        $("#PageStartContainer").addClass("active");

    });

    // header search
    $("body").on( 'click', "#Header__search__button", function (e) {
        e.stopPropagation();
        // get user input
        var user_input,
            status_selector;

        user_input = $('#Header__search__input').val();
        status_selector = '#Header__search__status';

        OBB.functions.loadNode( user_input, status_selector );
    });

    // 'return' key does same thing as clicking on header search button
    $("body").on( 'keypress', "#Header__search__input", function (e) {
        var key = e.which;
        if(key == 13) {
            $('#Header__search__button').click();
            return false;  
        }
    });

    // any click removes status / error messages
    //  applies to start page search, header search, and node cards
    $("body").on( 'click', function () {
        $('.status').removeClass('active');
    });

    // clicking "Show Mature Content" reveals the NSFW listing images
    $("body").on( 'click', ".ListingCard__header__nsfw .button", function (e) {
        e.stopPropagation();
        $(this).closest(".ListingCard.nsfw").removeClass("nsfw")
    });

    // clicking a listing card reveals listing overlay (unless NSFW)
    $("body").on( 'click', ".ListingCard", function () {
        var api_request;

        if (!$(this).hasClass("nsfw")) {
            $(".overlay--listing").addClass("active");
            // scroll to top of overlay--listing
            $('html, body').animate({
                scrollTop: $('#page--node').offset().top
            }, 'slow');
        };
        
        // update model with clicked-listing data from API.
        try {
            //  construct api request string
            listing_hash = $(this).closest('.Card').attr('listing-hash');
            api_request_single_listing = 'https://gateway.ob1.io/ob/listing/' + OBB.model.current_store.peer_id + '/' + listing_hash;
            
            // request for single listing info
            $.ajax({
                url: api_request_single_listing,
                type: 'GET',
                success: function( json ){ 
                    OBB.controller.api_returns.single_listing = json;
                    // run get-data and store the result in the model
                    OBB.model.current_store.single_listing = OBB.controller.get_data.singleListing();
                    // run render to render that overlay
                    OBB.controller.render.overlayListing();
                },
                error: function( err ) {
                    console.log('AJAX call to get single listing info failed', err); 
                    //TODO show "not viewable" overlay
                }
            });
        } catch( err ) {
            console.log('Call to get single listing info failed', err); 
        }
    });

    // clicking &times; or "return to store" on overlay--listing hides overlay--listing
    $("body").on( 'click', ".overlay--listing .ListingOverlay__nav .click-to-close", function () {
        $(".overlay--listing").removeClass("active");
        // scroll back to top of listings
        $('html, body').animate({
            scrollTop: $('#TabContainer .Node__header > h1').offset().top
        }, 'slow');
    });

     // clicking "View photos" on overlay--listing scrolls to Slideshow
     $("body").on( 'click', ".overlay--listing .ListingOverview__body .click-to-slideshow", function () {
        // scroll back to top of slideshow
        $('html, body').animate({
            scrollTop: $('#ListingSlideshow').offset().top
        }, 'slow');
    });

    // clicking 'BUY NOW' button on listing overlay reveals purchase overlay
    $("body").on( 'click', ".overlay--listing .button--buy-now", function () {
        $(".overlay--purchase").addClass("active");
        // scroll to top
        $('html, body').animate({
            scrollTop: $('#page--node').offset().top
        }, 'slow');
    });

    // pressing ESC key hides overlay--purchase or overlay--listing as appropriate
    $("body").on( 'keyup', function (e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            if ($("#overlay--purchase").hasClass("active")) {
                $(".overlay--purchase").removeClass("active");
            } else {
                $(".overlay--listing").removeClass("active");
                // scroll back to top of listings
                $('html, body').animate({
                    scrollTop: $('#TabContainer .Node__header > h1').offset().top
                }, 'slow');
            };
        };
    });

    // clicking Transaction Details on a review shows details
    $("body").on( 'click', ".button--txn-details", function (e) {
        e.stopPropagation();
        if ($(this).siblings('.ListingReview__bottom__txn-details').first().hasClass('active')) {
            // then remove active class and revert button color
            $(this).siblings('.ListingReview__bottom__txn-details').first().removeClass('active');
            $(this).removeClass('active');
        } else {
            // then add active class and change button color
            $(this).siblings('.ListingReview__bottom__txn-details').first().addClass('active');
            $(this).addClass('active');
        }
    });

    //  OVERLAY--PURCHASE LISTENERS
    // clicking &times; or "return to store" on overlay--purchase hides overlay--purchase
    $("body").on( 'click', '.overlay--purchase .PurchaseOverlay__nav .click-to-close', function (e) {
        $(".overlay--purchase").removeClass("active");
    });
    // click to copy ob url button
    clipboard = new Clipboard('#click-to-copy');
    clipboard.on('success', function(e) {
        e.clearSelection();
        // show 'copied' indicator for 1 second
        $('#copied-indicator').addClass("active");
        setTimeout(function(){
            $('#copied-indicator').removeClass("active");
        }, 1000);
    });

    // Get info and render Following tab
    $("body").on( 'click', "#tab--following", function () {
        if ( !$('#tab--following').hasClass('rendered') ) {
            // remove any cards already there (except the last/empty one that's needed for proper formatting)
            $('#FollowingCards').children().not(':last-child').remove()
            // add 'rendered' class so this doesn't call the API more than once
            $('#tab--following').addClass('rendered');
            // for each following_hash in OBB.model.current_store.following make an API call to get thier profiles
            $.each(OBB.model.current_store.following, function(index, hash) {
                try {                
                // request for profiles hashes
                    $.ajax({
                        url: 'https://gateway.ob1.io/ob/profile/' + hash + '?usecache=true',
                        type: 'GET',
                        success: function( profile ){
                            // now that we have the profile data we can create a node card
                            var card_info = OBB.controller.get_data.cardInfo( profile );
                            var card = OBB.templates.nodeCard( card_info, false, card_info.peer_id );                            
                            // then append it to the #FollowingCards list (must go before the placeholder/formatting card)
                            $(card).insertBefore('#FollowingCards .Card:last-child');
                        },
                        error: function( err ) {
                            console.log('AJAX call to get profile hashes failed', err); 
                        }
                    });
                } catch( err ) {
                    // AJAX calls didn't work out so well.
                    console.log( 'Failed to get profile info for Following stores', err );
                }
            });
        }
    });

    // Get info and render Followers tab
    $("body").on( 'click', "#tab--followers", function () {
        if ( !$('#tab--followers').hasClass('rendered') ) {
            // remove any cards already there (except the last/empty one that's needed for proper formatting)
            $('#FollowersCards').children().not(':last-child').remove()
            // add 'rendered' class so this doesn't call the API more than once
            $('#tab--followers').addClass('rendered');
            // for each follower_hash in OBB.model.current_store.followers make an API call to get thier profiles
            $.each(OBB.model.current_store.followers, function(index, hash) {
                try {                
                // request for profiles hashes
                    $.ajax({
                        url: 'https://gateway.ob1.io/ob/profile/' + hash + '?usecache=true',
                        type: 'GET',
                        success: function( profile ){
                            // now that we have the profile data we can create a node card
                            var card_info = OBB.controller.get_data.cardInfo( profile );
                            var card = OBB.templates.nodeCard( card_info, false, card_info.peer_id );
                            // then append it to the #FollowersCards list (must go before the placeholder/formatting card)
                            $(card).insertBefore('#FollowersCards .Card:last-child');
                        },
                        error: function( data ) {
                            console.log('Call to get a followers profile failed', data); 
                        }
                    });
                } catch( err ) {
                    // AJAX calls didn't work out so well.
                    console.log( 'AJAX calls failed to get follower profile', err );
                }
            });
        }
    });

    // start page search
    $("body").on( 'click', "#Start__search__button", function (e) {
        console.log('start go clicked');
        e.stopPropagation();
        // get user input
        var user_input,
            status_selector;

        user_input = $('#Start__search__input').val();
        status_selector = '#Start__search__status';

        OBB.functions.loadNode( user_input, status_selector );
    });

    // 'return' key does same thing as clicking on start page 'Go' button
    $("body").on( 'keypress', "#Start__search__input", function (e) {
        var key = e.which;
        if(key == 13) {
            $('#Start__search__button').click();
            return false;  
        }
    });

    // clicking node card load that node's page
    $("body").on( 'click', ".NodeCard", function (e) {
        e.stopPropagation();

        // get user input
        var user_input,
            status_selector;
        
        user_input = $(this)[0]['attributes']['peer_id']['nodeValue']; // peer_id of clicked node card
        status_selector = '[peer_id=' + user_input + '] > .NodeCard__search__status';

        OBB.functions.loadNode( user_input, status_selector );

    });

};