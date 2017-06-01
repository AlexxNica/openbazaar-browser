OBB.controller.addFiltering = function() {

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
        layoutMode: 'fitRows',
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

    $("body").on( 'click', ".radio-filters input", function () {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        OBB.controller.filter.filters[ filterGroup ] = $this.attr('data-filter');
        // arrange, and use filter fn
        $grid.isotope();
    });

    $("body").on( 'change', ".select-filters", function () {
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
};