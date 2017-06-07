// controller.get_data grabs data from API responses (stored in OBB.controller.api_returns) and 
// formats it appropriately for use by the model.
//  If you want use another API or data source, OBB.controller.get_data is the place where you'll specify 
//  those changes.
OBB.controller.get_data = {};
OBB.controller.get_data.peerID = function(){
    return OBB.controller.api_returns.profile.peerID;
};
OBB.controller.get_data.ListingCardInfo = function() {
    var listings = OBB.controller.api_returns.listings;
    var result = [];
    $.each(listings, function(index, listing) {
        result.push({
            title: listing.title,
            categories_array: listing.categories,
            ships_to: listing.shipsTo,
            price: (parseFloat(listing.price.amount) / 100).toFixed(2),
            img_url: 'https://gateway.ob1.io/ob/image/' + listing.thumbnail.small,
            ave_rating: listing.averageRating,
            rating_count: listing.ratingCount,
            nsfw: listing.nsfw,
            free_shipping: listing.freeShipping,
            hash: listing.hash,
        });
    });
    return result;
};
OBB.controller.get_data.categories = function() {
    var listings = OBB.controller.api_returns.listings;
    var result = [];
    $.each(listings, function(index, listing) {
        $.merge(result,listing.categories);
        result = $.unique(result);
    });
    // Make each string in array lowercase and remove special chars
    $.each(result, function(index, string) {
        result[index] = string.toLowerCase().replace(/[^a-zA-Z&\ ]/g, "").trim();
    });

    return result;
};

OBB.controller.get_data.countries = function() {
    var listings = OBB.controller.api_returns.listings;
    var result = [];
    $.each(listings, function(index, listing) {
        $.merge(result,listing.shipsTo);
        result = $.unique(result);
    });
    return result;
};
OBB.controller.get_data.summary = function() {
    result = {
        name: OBB.controller.api_returns.profile.name,
        handle: OBB.controller.api_returns.profile.handle,
        about: OBB.controller.api_returns.profile.about,
        description: OBB.controller.api_returns.profile.shortDescription,
        avatar: 'https://gateway.ob1.io/ob/image/' + OBB.controller.api_returns.profile.avatarHashes.tiny,
        header_img_tiny: 'https://gateway.ob1.io/ob/images/' + OBB.controller.api_returns.profile.peerID + '/' + OBB.controller.api_returns.profile.headerHashes.tiny, 
        header_img_large: 'https://gateway.ob1.io/ob/images/' + OBB.controller.api_returns.profile.peerID + '/' + OBB.controller.api_returns.profile.headerHashes.small, // TODO change to large before production 
        location: OBB.controller.api_returns.profile.location,
        ave_rating: OBB.controller.api_returns.profile.stats.averageRating,
        rating_count: OBB.controller.api_returns.profile.stats.ratingCount,
    }

    return result;
};
OBB.controller.get_data.contactInfo = function() {

    result = OBB.controller.api_returns.profile.contactInfo;

    return result;
};
OBB.controller.get_data.singleListing = function() {
    var listing = OBB.controller.api_returns.single_listing.listing,
        images = [];

    $.each(listing.item.images, function(index, img_obj) {
        // Using the medium images to save on bandwidth. May change to large images later.
        images.push('https://gateway.ob1.io/ob/images/' + img_obj.medium);
    });

    type = (function(){
            switch( listing.metadata.contractType ) {
                case 'PHYSICAL_GOOD':
                    result = 'Physical';
                    break;
                case 'DIGITAL_GOOD':
                    result = 'Digital';
                    break;
                case 'SERVICE':
                    result = 'Service';
                    break;
                default:
                    result = 'Other';
                };
            return result;
        })();

    result = {
        title: listing.item.title,
        slug: listing.slug,
        price: (parseFloat(listing.item.price) / 100).toFixed(2),
        options: listing.item.options,
        type: type,
        condition: listing.item.condition,
        tags: listing.item.tags,
        num_of_photos: listing.item.images.length,
        description: listing.item.description,
        images: images,
        reviews: [], // TODO
        shipping_options: listing.shippingOptions, // This could be more loosley coupled to the api
        return_policy: listing.refundPolicy,
        terms_and_conditions: listing.termsAndConditions,
        ob_url: 'ob://' + listing.vendorID.peerID + '/store/' + listing.slug,
    };

    return result;
};

OBB.controller.get_data.followers = function() {
    result = OBB.controller.api_returns.followers;
    return result;
};

OBB.controller.get_data.following = function() {
    result = OBB.controller.api_returns.following;
    return result;
};

OBB.controller.get_data.followerCardInfo = function() {
    result = OBB.controller.api_returns.profile.followers;

    return result;
};




