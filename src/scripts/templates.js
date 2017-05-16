OBB.templates = {

    nodeCard: function( data ){
        var to_print = '';

        to_print += '<div class="NodeCard">\n';
        to_print += '   <div class="NodeCard__header" style="background-image: url(' + data.header_img + ');">\n';
        to_print += '       <!-- Store Avatar -->\n';
        to_print += '       <div class="Avatar" style="background-image: url(' + data.avatar + ')"></div>\n';
        to_print += '   </div>\n';
        to_print += '   <div class="NodeCard__body">\n';
        to_print += '       <span class="NodeCard__name">' + data.name + '</span>\n';
        to_print += '       <span class="NodeCard__handle">@' + data.handle + '</span>\n';
        to_print += '       <p>\n';
        to_print += '           ' + data.about + '\n';
        to_print += '       </p>\n';
        to_print += '       <div class="NodeCard__bottom">\n';
        to_print += '           <div class="NodeCard__location">\n';
        to_print += '               <i class="fa fa-map-marker icon--map-pin" aria-hidden="true"></i>\n';
        to_print += '               ' + data.location + '\n';
        to_print += '           </div>\n';
        to_print += '           <div class="NodeCard__ratings">\n';
        to_print += '               <i class="fa fa-star icon--star--small" aria-hidden="true"></i>\n';
        to_print += '               ' + data.ave_rating + '\n';
        to_print += '               (<a>' + data.rating_count + '</a>)\n';
        to_print += '           </div>\n';
        to_print += '       </div>\n';
        to_print += '   </div>\n';
        to_print += '</div>\n';

        return to_print;
    },

    listingCard: function( data ) {
        var to_print = '';

        to_print += '<div class="ListingCard';

        if (data.nsfw) {
            to_print += ' nsfw';
        }
        to_print += '"> \n';
        to_print += '   <div class="ListingCard__header"> \n';
        to_print += '       <div class="ListingCard__header__bg" style="background-image: url(' + data.img_url + ')"> \n';
        to_print += '       </div> \n';
        to_print += '       <div class="ListingCard__header__nsfw"> \n';
        to_print += '       </div> \n';
        to_print += '       <ul class="ListingCard__header__tags"> \n';
        if (data.free_shipping) {
            to_print += '           <li> \n';
            to_print += '               <span class="tag tag--green">Free Shipping</span> \n';
            to_print += '           </li> \n';
        }
        to_print += '       </ul> \n';
        to_print += '   </div> \n';
        to_print += '   <div class="ListingCard__body"> \n';
        to_print += '       <span class="ListingCard__title">' + data.title + '</span> \n';
        to_print += '       <div class="ListingCard__bottom"> \n';
        to_print += '           <div class="ListingCard__ratings"> \n';
        to_print += '               <i class="fa fa-star icon--star--small" aria-hidden="true"></i> \n';
        to_print += '               ' + data.ave_rating + ' \n';
        to_print += '               (<a href="">' + data.rating_count + '</a>) \n';
        to_print += '           </div> \n';
        to_print += '           <div class="ListingCard__price"> \n';
        to_print += '               <span class="strong">$' + data.price + '</span> \n';
        to_print += '           </div> \n';
        to_print += '       </div> \n';
        to_print += '   </div> \n';
        to_print += '</div> \n';

        return to_print;
    },

    cardContainer: function ( listing_cards, id ) {
        var to_print = '';

        to_print += '<ul class="CardContainer" id="' + id + '">\n';

        $.each(listing_cards, function(index, listing) {
            to_print += '    <li class="Card">\n';
            to_print += OBB.templates.listingCard( listing ) + '\n';
            to_print += '    </li>\n';
        });

        to_print += '    <li class="Card">\n';
        to_print += '        <!-- Empty li.Card for proper card alignment. Do not remove. -->\n';
        to_print += '    </li>\n';
        to_print += '</ul>\n';

        return to_print;
    },

    filterCardCategory: function ( categories_array ) {
        var to_print = '';

        to_print += '<section class="FilterCard--category" id="FilterCard--category">\n';
        to_print += '    <h4>Category</h4>\n';
        to_print += '    <ul>\n';
        to_print += '        <li><input type="radio" name="filter--listings--category" value="all" checked>All</li>\n';

        $.each(categories_array, function(index, category) {
            to_print += '        <li><input type="radio" name="filter--listings--category" value="' + category.replace(/\s+/g, "-").toLowerCase() + '">' + category + '</li>\n';
        });

        to_print += '    </ul>\n';
        to_print += '    <a>more...</a> <!--  expands to show more categories -->\n';
        to_print += '</section>\n';

        return to_print;
    },

    filterCardShipping: function ( countries_array ) {
        var to_print = '';

        to_print += '<section class="FilterCard--shipping" id="FilterCard--shipping">\n';
        to_print += '    <h4>Shipping</h4>\n';
        to_print += '    <form>\n';
        to_print += '        <fieldset>\n';
        to_print += '            <label for="filter--listings--ships-to">Ships to:</label>\n';
        to_print += '            <select name="filter--listings--ships-to" id="filter--listings--ships-to">\n';

        $.each(countries_array, function(index, country) {
            to_print += '           <option value="' + country.replace(/\s+/g, "-").toLowerCase() + '">' + country + '</option>\n';
        });

        to_print += '            </select>\n';
        to_print += '        </fieldset>\n';
        to_print += '        <fieldset>  \n';
        to_print += '            <input type="checkbox" id="filter--listings--free-shipping" name="filter--listings--free-shipping" value="free-shipping">\n';
        to_print += '            <label for="filter--listings--free-shipping"><span class="tag--green">Free Shipping</span></label>\n';
        to_print += '        </fieldset>\n';
        to_print += '    </form>\n';
        to_print += '</section>\n';

        return to_print;
    },

    nodeInfo: function ( node_summary ) {
        to_print = '';

        to_print += '<div class="NodeInfo">\n';
        to_print += '    <div class="Avatar" style="background-image: url(' + node_summary.avatar + ')"></div>\n';
        to_print += '    <div class="NodeSummary">\n';
        to_print += '        <h3>'+ node_summary.name +'</h3>\n';
        to_print += '        <div>\n';
        to_print += '            <div class="NodeLocation">\n';
        to_print += '                <i class="fa fa-map-marker icon--map-pin" aria-hidden="true"></i>\n';
        to_print += '                ' + node_summary.location + '\n';
        to_print += '            </div>\n';
        to_print += '            <div class="NodeRatings">\n';
        to_print += '                <i class="fa fa-star icon--star--small" aria-hidden="true"></i>\n';
        to_print += '                ' + node_summary.ave_rating + '\n';
        to_print += '                (<a>' + node_summary.rating_count + '</a>)\n';
        to_print += '            </div>\n';
        to_print += '        </div>\n';
        to_print += '    </div>\n';
        to_print += '</div>\n';

        return to_print;
    },

};








