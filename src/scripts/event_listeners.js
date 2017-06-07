OBB.controller.event_listeners = function() {
    // store nav tab functionality
    $("body").on( 'click', ".navtab", function () {
        var tab_target = $(this)["0"].attributes[1].value;
        $(".navtab, .tab, .overlay").removeClass("active");
        $(this).addClass("active");
        $(".tab." + tab_target).addClass("active");
    });

    // header search
    $("body").on( 'click', "#Header__search__button", function (e) {
        e.stopPropagation();
        // get user input
        var user_input,
            api_request;

        user_input = $('#Header__search__input').val();

        // show user status indicator
        $('#Header__search__status').removeClass('error');
        $('#Header__search__status').addClass('active');
        $('#Header__search__status').text('searching...');

        // do some basic client side verifying of user_input so we aren't too hard on the API
        // TODO

        // call api to get profile and listings info, then store in OBB.controller.api_returns (handle errors)
        var api_request_profile = 'https://gateway.ob1.io/ob/profile/' + user_input,
            api_request_listings = 'https://gateway.ob1.io/ob/listings/' + user_input,
            api_response_profile = $.Deferred(),
            api_response_listings = $.Deferred(),
            api_response_followers = $.Deferred(),
            api_response_following = $.Deferred();
        try {
            // request for proile info
            $.ajax({
                url: api_request_profile,
                type: 'GET',
                success: function( data ){ 
                    api_response_profile.resolve( data );
                },
                error: function( data ) {
                    console.log('API call to https://gateway.ob1.io/ob/profile/' + user_input + ' failed.');
                    console.log( data );
                    api_response_profile.resolve( false );
                }
            });

            // request for listings info
            $.ajax({
                url: api_request_listings,
                type: 'GET',
                success: function( data ){ 
                    api_response_listings.resolve( data );
                },
                error: function( data ) {
                    console.log('API call to https://gateway.ob1.io/ob/listings/' + user_input + ' failed.'); 
                    api_response_listings.resolve( false );
                }
            });
        } catch(err) {
            // API calls didn't work out so well. Deal with it.
            // TODO
            console.log( 'API calls didn\'t work out so well Err1.' );
            console.log( err );
            $('#Header__search__status').addClass('error');
            $('#Header__search__status').text('Error: Ajax failed.');
        }
        
        // After profile and listings API calls resolve
        $.when( api_response_profile, api_response_listings ).done(function ( profile, listings ) {
            if ( profile && listings ) {

                // store api info in OBB.controller.api_returns. OBB.functions.apiStore will do this for us.
                OBB.functions.apiStore( profile, 'profile' );
                OBB.functions.apiStore( listings, 'listings' );

                // update model with the new data
                OBB.controller.updateModel();

                // re-render page--node using OBB.controller.render
                OBB.controller.render.pageNode();

                // hide status indicator
                $('#Header__search__status').text('Success!');
                $('#Header__search__status').removeClass('active');

                // grab following and followers hashes then update the nav tabs to show counts
                try {                
                    // request for following hashes
                    $.ajax({
                        url: 'https://gateway.ob1.io/ob/following/' + OBB.model.current_store.peer_id,
                        type: 'GET',
                        success: function( data ){
                            api_response_following.resolve( data );
                        },
                        error: function( data ) {
                            console.log('API call to https://gateway.ob1.io/ob/following/' + OBB.model.current_store.peer_id + ' failed.'); 
                            api_response_following.resolve( [] );
                        }
                    });
                    // request for followers hashes
                    $.ajax({
                        url: 'https://gateway.ob1.io/ob/followers/' + OBB.model.current_store.peer_id,
                        type: 'GET',
                        success: function( data ){
                            api_response_followers.resolve( data );
                        },
                        error: function( data ) {
                            console.log('API call to https://gateway.ob1.io/ob/followers/' + OBB.model.current_store.peer_id + ' failed.'); 
                            api_response_followers.resolve( [] );
                        }
                    });
                } catch( err ) {
                    // AJAX call didn't work out so well.
                    console.log( 'AJAX call failed', err );
                }
            } else { 
                // At least one API call was unsuccessful
                $('#Header__search__status').addClass('error');
                $('#Header__search__status').text('Store not found.');
            }
        });

        // After follwer and following API calls resolve
        $.when( api_response_following, api_response_followers ).done(function ( following, followers ) {
            //store data in OBB.controller.api_returns
            OBB.controller.api_returns.following = following;
            OBB.controller.api_returns.following = following;
            // add to model
            OBB.model.current_store.following = OBB.controller.get_data.following();
            OBB.model.current_store.followers = OBB.controller.get_data.followers();
            // update view
            OBB.controller.render.pageNodeNavTabs();
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

    // any click removes error message from header search
    $("body").on( 'click', function () {
        if ($('#Header__search__status').hasClass('active')) {
            $('#Header__search__status').removeClass('active');
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

    // clicking Transaction Details on a review shows details
    $("body").on( 'click', ".button--txn-details", function (e) {
        e.stopPropagation();
        console.log('txns clicked');
        console.log($(this));
        console.log('siblings', $(this).siblings('.ListingReview__bottom__txn-details').first());
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

    // Get info and render Follower tab
    $("body").on( 'click', "#tab--followers", function () {
        console.log('followers tab clicked');
        // make an api call for each peerID in OBB.model.current_store.follower_ids
        var deferreds = [],
            responses = [];

        $.each(OBB.model.current_store.follower_ids, function(index, follower_id) {
            console.log('deffered added');
            deferreds[index] = $.Deferred()
        });

        $.each(OBB.model.current_store.follower_ids, function(index, follower_id) {
            console.log('api request made');
            // request profile info for each follower_id
            try {                
                // request for proile info
                $.ajax({
                    url: 'https://gateway.ob1.io/ob/profile/' + follower_id + '?usecache=true',
                    type: 'GET',
                    success: function( data ){
                        responses.push(data);
                        deferreds[index].resolve( true );
                    },
                    error: function( data ) {
                        console.log('API call to https://gateway.ob1.io/ob/profile/' + follower_id + '?usecache=true failed');
                        console.log( data );
                        deferreds[index].resolve( false );
                    }
                });
            } catch( err ) {
                // API calls didn't work out so well.
                console.log( 'Failed to fetch follower data.', err );
            }
        });        
        
        // After API calls resolve
       $.when.apply($, deferreds).done(function () {
            console.log('deffereds all resolved');
            if ( responses.length > 0 ) {
                // create cards and display them
                $.each(responses, function(index, response) {
                    console.log(response);
                    //construct a store card and append it.
                    //TODO
                });
            } else {
                // then no follower data was retrieved from the API
                // TODO
            }
        });
    });













};