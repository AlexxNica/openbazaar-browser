$(document).ready(function() {

    OBB.controller.render.pageNode();
    OBB.controller.event_listeners.pageNode();
    // clicking a listing card reveals listing overlay (unless NSFW)
    $(".ListingCard").click(function () {
        var api_request;

        if (!$(this).hasClass("nsfw")) {
            $(".overlay--listing").addClass("active");
            // scroll to top of overlay--listing
            $('html, body').animate({
                scrollTop: $('#page--node').offset().top
            }, 'slow');
        };
        
        // update model with clicked-listing data from API.
        //  construct api request string
        listing_hash = $(this).closest('.Card').attr('listing-hash');
        api_request = 'https://gateway.ob1.io/ob/listing/' + OBB.model.current_store.peer_id + '/' + listing_hash;
        
        //  call api with that request string
        $.getJSON(api_request, function( json ) {
            OBB.controller.api_returns.single_listing = json;
            // run get-data and store the result in the model
            OBB.model.current_store.single_listing = OBB.controller.get_data.singleListing();
            // run render to render that overlay
            OBB.controller.render.overlayListing();
        });

    });

    OBB.controller.event_listeners.overlays();

    // clicking "Show Mature Content" reveals the NSFW listing images
    $(".ListingCard__header__nsfw .button").click(function (e) {
        e.stopPropagation();
        $(this).closest(".ListingCard.nsfw").removeClass("nsfw")
    });


    // Listing Sorting / Filtering
    OBB.controller.filter = {}

    OBB.controller.filter.filterFns = {
        ge1Stars: function() {
            var number = $(this).find('.ListingCard__ratings__value').text();
            return parseInt( number, 10 ) >= 1;
        },
        ge2Stars: function() {
            var number = $(this).find('.ListingCard__ratings__value').text();
            return parseInt( number, 10 ) >= 2;
        },
        ge3Stars: function() {
            var number = $(this).find('.ListingCard__ratings__value').text();
            return parseInt( number, 10 ) >= 3;
        },
        ge4Stars: function() {
            var number = $(this).find('.ListingCard__ratings__value').text();
            return parseInt( number, 10 ) >= 4;
        },
        quickSearch: function() {
            return qsRegex ? $(this).text().match( qsRegex ) : true;
        },
    };

    // store filter for each group
    OBB.controller.filter.filters = {};
    // quick search regex
    var qsRegex;

    // use value of search field to filter
    var $quicksearch = $('.quicksearch').keyup( debounce( function() {
        qsRegex = new RegExp( $quicksearch.val(), 'gi' );
        $grid.isotope();
    }, 200 ) );

    // debounce so filtering doesn't happen every millisecond
    function debounce( fn, threshold ) {
        var timeout;
        return function debounced() {
            if ( timeout ) {
                clearTimeout( timeout );
            }
            function delayed() {
                fn();
                timeout = null;
            }
            timeout = setTimeout( delayed, threshold || 100 );
        }
    }
    // add quickSearch to filters
    OBB.controller.filter.filters[ 'quick_search' ] = 'quickSearch';

    // init Isotope
    var $grid = $('#CardContainer--listings').isotope({
        itemSelector: '.Card',
        filter: function() {

            var isMatched = true;
            var $this = $(this);

            for ( var prop in OBB.controller.filter.filters ) {
                var filter = OBB.controller.filter.filters[ prop ];
                // use function if it matches
                filter = OBB.controller.filter.filterFns[ filter ] || filter;
                // test each filter
                if ( filter ) {
                    isMatched = isMatched && $(this).is( filter );
                }
                // break if not matched
                if ( !isMatched ) {
                    break;
                }
            }
            return isMatched;
        },
        getSortData: {
            rating_ave: '.ListingCard__ratings__value', // text from querySelector
            rating_count: '.ListingCard__ratings__count',
            price: function( itemElem ) {
                var price_string = $( itemElem ).find('.ListingCard__price__value').text();
                return parseFloat( price_string.replace(/\$/g, '') );
            },
        },
    });

    $('.radio-filters').on( 'click', 'input', function() {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        OBB.controller.filter.filters[ filterGroup ] = $this.attr('data-filter');
        // arrange, and use filter fn
        $grid.isotope();
    });

    $('.select-filters').on( 'change', function() {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');

        // get filter value from option value
        var filterValue = this.value;

        // set filter for group
        OBB.controller.filter.filters[ filterGroup ] = filterValue;

        // arrange, and use filter fn
        $grid.isotope();
    });

    $('.checkbox-filters').on( 'change', function() {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');

        // get filter value from option value
        var filterValue = this.value;

        // set filter for group
        if ($this[0].checked) {
            OBB.controller.filter.filters[ filterGroup ] = filterValue;
        } else {
            OBB.controller.filter.filters[ filterGroup ] = "";
        }
        // arrange, and use filter fn
        $grid.isotope();
    });

    $('.select-sort').on( 'change', function() {
        var $this = $(this);

        // get sort-by value from option value
        var sortByValue = this.value;

        // sort according to choice
        switch(sortByValue) {
            case 'price-low-to-high':
                $grid.isotope({
                    sortBy: 'price',
                    sortAscending: true,
                });
                break;
            case 'price-high-to-low':
                $grid.isotope({
                    sortBy: 'price',
                    sortAscending: false,
                });
                break;
            case 'ave-rating-high-to-low':
                $grid.isotope({
                    sortBy: 'rating_ave',
                    sortAscending: false,
                });
                break;
            case 'ave-rating-low-to-high':
                $grid.isotope({
                    sortBy: 'rating_ave',
                    sortAscending: true,
                });
                break;
            case 'rating-count-high-to-low':
                $grid.isotope({
                    sortBy: 'rating_count',
                    sortAscending: false,
                });
                break;
            case 'rating-count-low-to-high':
                $grid.isotope({
                    sortBy: 'rating_count',
                    sortAscending: true,
                });
                break;
            case 'original':
                $grid.isotope({
                    sortBy: 'original-order',
                });
            default:
                // NA
        }

    });



    // header search
    $('#Header__search__button').click( function() {
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
                    console.log( 'Profile call was successful' );
                    console.log( data );
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
                    console.log( 'Listings call was successful' );
                    console.log( data );
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
                console.log( 'both were successful' );
                console.log( profile );
                console.log( listings );

                // store api info in OBB.controller.api_returns. OBB.functions.apiStore will do this for us.
                OBB.functions.apiStore( profile, 'profile' );
                OBB.functions.apiStore( listings, 'listings' );

                // update model with the new data
                OBB.controller.updateModel();

                // re-render page--node using OBB.controller.render
                OBB.controller.render.pageNode();

                console.log('re-rendered');

            } else { 
                // At least one API call was unsuccessful
                // TODO
                console.log( 'at least one wasn\'t successful' );
            }
        });
    });

    // 'return' key does same thing as clicking on header search button
    $('#Header__search__input').keypress(function (e) {
        var key = e.which;
        if(key == 13) {
            $('#Header__search__button').click();
            return false;  
        }
    });   

});



