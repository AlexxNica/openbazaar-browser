OBB.templates = {

    nodeCard: function(name, handle, about, avatar, header_img, location, ave_rating, rating_count){
        var to_print = '';

        to_print += '<div class="NodeCard">\n';
        to_print += '   <div class="NodeCard__header" style="background-image: url(' + header_img + ');">\n';
        to_print += '       <!-- Store Avatar -->\n';
        to_print += '       <div class="Avatar" style="background-image: url(' + avatar + ')"></div>\n';
        to_print += '   </div>\n';
        to_print += '   <div class="NodeCard__body">\n';
        to_print += '       <span class="NodeCard__name">' + name + '</span>\n';
        to_print += '       <span class="NodeCard__handle">' + handle + '</span>\n';
        to_print += '       <p>\n';
        to_print += '           ' + about + '\n';
        to_print += '       </p>\n';
        to_print += '       <div class="NodeCard__bottom">\n';
        to_print += '           <div class="NodeCard__location">\n';
        to_print += '               <i class="fa fa-map-marker icon--map-pin" aria-hidden="true"></i>\n';
        to_print += '               ' + location + '\n';
        to_print += '           </div>\n';
        to_print += '           <div class="NodeCard__ratings">\n';
        to_print += '               <i class="fa fa-star icon--star--small" aria-hidden="true"></i>\n';
        to_print += '               ' + ave_rating + '\n';
        to_print += '               (<a>' + rating_count + '</a>)\n';
        to_print += '           </div>\n';
        to_print += '       </div>\n';
        to_print += '   </div>\n';
        to_print += '</div>\n';

        return to_print;
    },

    listingCard : function(title, categories_array, price, img_url, ave_rating, rating_count, nsfw, free_shipping) {
        var to_print = '';

        to_print += '<div class="ListingCard';
        if (nsfw) {
            to_print += ' nsfw';
        }
        to_print += '"> \n';
        to_print += '   <div class="ListingCard__header"> \n';
        to_print += '       <div class="ListingCard__header__bg" style="background-image: url(' + img_url + ')"> \n';
        to_print += '       </div> \n';
        to_print += '       <div class="ListingCard__header__nsfw"> \n';
        to_print += '       </div> \n';
        to_print += '       <ul class="ListingCard__header__tags"> \n';
        if (free_shipping) {
            to_print += '           <li> \n';
            to_print += '               <span class="tag tag--green">Free Shipping</span> \n';
            to_print += '           </li> \n';
        }
        to_print += '       </ul> \n';
        to_print += '   </div> \n';
        to_print += '   <div class="ListingCard__body"> \n';
        to_print += '       <span class="ListingCard__title">' + title + '</span> \n';
        to_print += '       <div class="ListingCard__bottom"> \n';
        to_print += '           <div class="ListingCard__ratings"> \n';
        to_print += '               <i class="fa fa-star icon--star--small" aria-hidden="true"></i> \n';
        to_print += '               ' + ave_rating + ' \n';
        to_print += '               (<a href="">' + rating_count + '</a>) \n';
        to_print += '           </div> \n';
        to_print += '           <div class="ListingCard__price"> \n';
        to_print += '               <span class="strong">$' + price + '</span> \n';
        to_print += '           </div> \n';
        to_print += '       </div> \n';
        to_print += '   </div> \n';
        to_print += '</div> \n';

        return to_print;
    },


};
// OBB.templates.listingCard('Waffles', ['nothing', 'important'], '599.68', './dist/images/example--cat02.jpg' , '2.7', '21', false, 'true')
// OBB.templates.nodeCard('Austin Williams', 'superman', 'This is a really cool store folks.', './dist/images/example--cat02.jpg', './dist/images/example--cat03.jpg', 'Washington, DC', '5.4', '300')


