$(document).ready(function() {

    OBB.controller.event_listeners();

    // prevents scrolling from locking after animate/scrollTop
    $(window).bind("mousewheel", function() {
        $("html, body").stop(true, false);
    });

    // render featured store cards on Start page
	$.each(OBB.model.featured_stores, function(index, hash) {
	    try {                
	    // request for profiles hashes
		    $.ajax({
		        url: 'https://gateway.ob1.io/ob/profile/' + hash + '?usecache=true',
		        type: 'GET',
		        success: function( profile ){
		            // now that we have the profile data we can create a node card
		            var card_info = OBB.controller.get_data.cardInfo( profile );
		            var card = OBB.templates.nodeCard( card_info, false, card_info.peer_id );
		            // then append it to the #FeaturedCards list
		            $(card).insertBefore('#FeaturedCards .Card:last-child');
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


});