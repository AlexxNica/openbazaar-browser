OBB.functions = {};
OBB.functions.titleCase = function(str) {
	var convertToArray = str.toLowerCase().split(" ");
	var result = convertToArray.map(function(val){
		return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
	});
	return result.join(" ");
};

OBB.functions.apiStore = function( data, prop_name ) {
	// store data in OBB.controller.api_returns['prop_name']
	OBB.controller.api_returns[prop_name] = data;
};

OBB.functions.loadNode = function( peer_id, status_selector ){

    // get user input
    var api_request;
        
    // disallow empty input
    if ( !peer_id ) {return};

    // dissallow current_store's node id
    if ( OBB.model.current_store.peer_id == peer_id ) {return};

    // show user status indicator
    $(status_selector).removeClass('error');
    $(status_selector).addClass('active');
    $(status_selector).text('Searching...');

    // call api to get profile and listings info, then store in OBB.controller.api_returns (handle errors)
    var api_request_profile = 'https://gateway.ob1.io/ob/profile/' + peer_id,
        api_request_listings = 'https://gateway.ob1.io/ob/listings/' + peer_id,
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
        $(status_selector).addClass('error');
        $(status_selector).text('Error: Request failed.');
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
            $(status_selector).text('Success!');
            $(status_selector).removeClass('active');

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
            $(status_selector).addClass('error');
            $(status_selector).text('Unavailable.');
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


}