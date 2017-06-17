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
            api_request;

        user_input = $('#Header__search__input').val();

        // disallow empty input
        if (!user_input) {return};

        // show user status indicator
        $('#Header__search__status').removeClass('error');
        $('#Header__search__status').addClass('active');
        $('#Header__search__status').text('Searching...');

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
                    console.log('request for profile info failed', data);
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
                    console.log('request for list of listings failed.', data); 
                    api_response_listings.resolve( false );
                }
            });
        } catch(err) {
            // API calls didn't work out so well. Deal with it.
            console.log( 'AJAX calls for profile and/or listings info failed', err );
            $('#Header__search__status').addClass('error');
            $('#Header__search__status').text('Error: Request failed.');
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
                            console.log('request for following hashes failed.', data); 
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
                            console.log('request for followers hashes failed.', data); 
                            api_response_followers.resolve( [] );
                        }
                    });
                } catch( err ) {
                    // AJAX call didn't work out so well.
                    console.log( 'AJAX request for Followers and Following data failed.', err );
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
            OBB.controller.api_returns.followers = followers;
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
                            // then append it to the #FollowingCards list
                            $('#FollowingCards').prepend( card );
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
                            // then append it to the #FollowingCards list
                            $('#FollowersCards').prepend( card );
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
        e.stopPropagation();
        // get user input
        var user_input,
            api_request;

        user_input = $('#Start__search__input').val();

        // disallow empty input
        if (!user_input) {return};

        // show user status indicator
        $('#Start__search__status').removeClass('error');
        $('#Start__search__status').addClass('active');
        $('#Start__search__status').text('Searching...');

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
                    console.log('Call to get profile data failed.', data);
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
                    console.log('Call to get listing info failed.', data); 
                    api_response_listings.resolve( false );
                }
            });
        } catch(err) {
            // API calls didn't work out so well. Deal with it.
            console.log( 'AJAX call to get profile and listing info from start page search failed', err );
            $('#Start__search__status').addClass('error');
            $('#Start__search__status').text('Error: Ajax failed.');
        }
        
        // After profile and listings API calls resolve
        $.when( api_response_profile, api_response_listings ).done(function ( profile, listings ) {
            if ( profile && listings ) {

                // store api info in OBB.controller.api_returns. OBB.functions.apiStore will do this for us.
                OBB.functions.apiStore( profile, 'profile' );
                OBB.functions.apiStore( listings, 'listings' );

                // update model with the new data
                OBB.controller.updateModel();

                // render page--node using OBB.controller.render
                OBB.controller.render.pageNode();

                // hide status indicator
                $('#Start__search__status').text('Success!');
                $('#Start__search__status').removeClass('active');

                // hide start page and show node page
                $('#PageStartContainer').removeClass('active');
                $('#PageNodeContainer').addClass('active');

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
                            console.log('Call to get following hashes failed.', data); 
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
                            console.log('Call to get followers hashes failed.', data); 
                            api_response_followers.resolve( [] );
                        }
                    });
                } catch( err ) {
                    // AJAX call didn't work out so well.
                    console.log( 'AJAX call to get follower and following hashes failed', err );
                }
            } else { 
                // At least one API call was unsuccessful
                $('#Start__search__status').addClass('error');
                $('#Start__search__status').text('Store not found.');
            }
        });

        // After follower and following API calls resolve
        $.when( api_response_following, api_response_followers ).done(function ( following, followers ) {
            //store data in OBB.controller.api_returns
            OBB.controller.api_returns.following = following;
            OBB.controller.api_returns.followers = followers;
            // add to model
            OBB.model.current_store.following = OBB.controller.get_data.following();
            OBB.model.current_store.followers = OBB.controller.get_data.followers();
            // update view
            OBB.controller.render.pageNodeNavTabs();
        });
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
            api_request;
        
        user_input = $(this)[0]['attributes']['peer_id']['nodeValue']; // peer_id of clicked node card
        
        // disallow empty input
        if ( !user_input ) {return};

        // dissallow current_store's node id
        if ( OBB.model.current_store.peer_id == user_input ) {return};

        // show user status indicator
        $('[peer_id=' + user_input + '] > .NodeCard__search__status').removeClass('error');
        $('[peer_id=' + user_input + '] > .NodeCard__search__status').addClass('active');
        $('[peer_id=' + user_input + '] > .NodeCard__search__status').text('Searching...');

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
                    console.log('request for profile info failed', data);
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
                    console.log('request for list of listings failed.', data); 
                    api_response_listings.resolve( false );
                }
            });
        } catch(err) {
            // API calls didn't work out so well. Deal with it.
            console.log( 'AJAX calls for profile and/or listings info failed', err );
            $('[peer_id=' + user_input + '] > .NodeCard__search__status').addClass('error');
            $('[peer_id=' + user_input + '] > .NodeCard__search__status').text('Error: Request failed.');
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
                $('[peer_id=' + user_input + '] > .NodeCard__search__status').text('Success!');
                $('[peer_id=' + user_input + '] > .NodeCard__search__status').removeClass('active');

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
                            console.log('request for following hashes failed.', data); 
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
                            console.log('request for followers hashes failed.', data); 
                            api_response_followers.resolve( [] );
                        }
                    });
                } catch( err ) {
                    // AJAX call didn't work out so well.
                    console.log( 'AJAX request for Followers and Following data failed.', err );
                }
            } else { 
                // At least one API call was unsuccessful
                $('[peer_id=' + user_input + '] > .NodeCard__search__status').addClass('error');
                $('[peer_id=' + user_input + '] > .NodeCard__search__status').text('Unavailable.');
            }
        });

        // After follwer and following API calls resolve
        $.when( api_response_following, api_response_followers ).done(function ( following, followers ) {
            //store data in OBB.controller.api_returns
            OBB.controller.api_returns.following = following;
            OBB.controller.api_returns.followers = followers;
            // add to model
            OBB.model.current_store.following = OBB.controller.get_data.following();
            OBB.model.current_store.followers = OBB.controller.get_data.followers();
            // update view
            OBB.controller.render.pageNodeNavTabs();
        });
    });

};