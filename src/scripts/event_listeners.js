OBB.controller.event_listeners = function() {
    // store nav tab functionality
    $("body").on( 'click', ".navtab", function () {
        var tab_target = $(this)["0"].attributes[1].value;
        $(".navtab, .tab, .overlay").removeClass("active");
        $(this).addClass("active");
        $(".tab." + tab_target).addClass("active");
    });

    // header search
    $("body").on( 'click', "#Header__search__button", function () {
        // get user input
        var user_input,
            api_request;

        user_input = $('#Header__search__input').val();

        // do some basic client side verifying of user_input so we aren't too hard on the API
        // TODO

        // call api to get profile and listings info, then store in OBB.controller.api_returns (handle errors)
        // TODO
        try {
            var api_request_profile = 'https://gateway.ob1.io/ob/profile/' + user_input;
            var api_request_listings = 'https://gateway.ob1.io/ob/listings/' + user_input;
            var api_response_profile = $.Deferred();
            var api_response_listings = $.Deferred();
            
            // request for proile info
            $.ajax({
                url: api_request_profile,
                type: 'GET',
                success: function( data ){ 
                    api_response_profile.resolve( data );
                },
                error: function( data ) {
                    console.log('API call to https://gateway.ob1.io/ob/profile/user_input didn\'t go so well'); 
                    api_response_profile.resolve( false );
                }
            });

            // request for lisings info
            $.ajax({
                url: api_request_listings,
                type: 'GET',
                success: function( data ){ 
                    api_response_listings.resolve( data );
                },
                error: function( data ) {
                    console.log('API call to https://gateway.ob1.io/ob/listings/user_input didn\'t go so well'); 
                    api_response_listings.resolve( false );
                }
            });
        } catch(err) {
            // API calls didn't work out so well. Deal with it.
            // TODO
            console.log( 'API calls didn\'t work out so well.' );
            console.log( err );
        }
        
        // After API calls resolve
        $.when( api_response_profile, api_response_listings ).done(function ( profile, listings ) {
            if ( profile && listings ) {

                // store api info in OBB.controller.api_returns. OBB.functions.apiStore will do this for us.
                OBB.functions.apiStore( profile, 'profile' );
                OBB.functions.apiStore( listings, 'listings' );

                // update model with the new data
                OBB.controller.updateModel();

                // re-render page--node using OBB.controller.render
                OBB.controller.render.pageNode();

            } else { 
                // At least one API call was unsuccessful
                // TODO
                console.log( 'at least one API call wasn\'t successful' );
            }
        });
    });

    // 'return' key does same thing as clicking on header search button
    $("body").on( 'keypress', "#Header__search__input", function (e) {
        var key = e.which;
        if(key == 13) {
            $('#Header__search__button').click();
            return false;  
        }
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
                error: function( json ) {
                    console.log('API call to https://gateway.ob1.io/ob/listing/[listing hash] didn\'t go so well'); 
                    // TODO deal with it
                }
            });
        } catch(err) {
            //TODO catch failure [most often it will be no internet connection / API unreachable]
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

};