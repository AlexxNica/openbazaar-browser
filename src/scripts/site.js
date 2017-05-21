$(document).ready(function() {

    OBB.controller.render.pageNode();

    // store nav tab functionality
    $(".navtab").click(function () {
        var tab_target = $(this)["0"].attributes[1].value;
        $(".navtab, .tab, .overlay").removeClass("active");
        $(this).addClass("active");
        $(".tab." + tab_target).addClass("active");
    });

    // clicking a listing card reveals listing overlay (unless NSFW)
    $(".ListingCard").click(function () {
        if (!$(this).hasClass("nsfw")) {
            $(".overlay--listing").addClass("active");
            // scroll to top of overlay--listing
            $('html, body').animate({
                scrollTop: $('#page--node').offset().top
            }, 'slow');
        };
        // TODO update model with clicked-listing data from API. My need to promise.

        // Render overlay listing.
        console.log('fired');
        OBB.controller.render.overlayListing();
    });

    // clicking &times; or "return to store" on overlay--purchase hides overlay--purchase
    $(".overlay--purchase .PurchaseOverlay__nav .click-to-close").click(function () {
        $(".overlay--purchase").removeClass("active");

    });

    // clicking &times; or "return to store" on overlay--listing hides overlay--listing
    $(".overlay--listing .ListingOverlay__nav .click-to-close").click(function () {
        $(".overlay--listing").removeClass("active");
        // scroll back to top of listings
        $('html, body').animate({
            scrollTop: $('#TabContainer .Node__body').offset().top
        }, 'slow');
    });

    // pressing ESC key hides overlay--purchase or overlay--listing as appropriate
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            if ($("#overlay--purchase").hasClass("active")) {
                $(".overlay--purchase").removeClass("active");
            }
            else {
                $(".overlay--listing").removeClass("active");
                // scroll back to top of listings
                $('html, body').animate({
                    scrollTop: $('#TabContainer .Node__body').offset().top
                }, 'slow');
            };
        };
    });

    // clicking "Show Mature Content" reveals the NSFW listing images
    $(".ListingCard__header__nsfw .button").click(function (e) {
        e.stopPropagation();
        $(this).closest(".ListingCard.nsfw").removeClass("nsfw")
    });

});




