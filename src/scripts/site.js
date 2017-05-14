$(document).ready(function() {
    // store nav tab functionality
    $(".navtab").click(function () {
        var tab_target = $(this)["0"].attributes[1].value;
        $(".navtab, .tab, .overlay").removeClass("active");
        $(this).addClass("active");
        $(".tab." + tab_target).addClass("active");
    });

    // clicking a listing card reveals listing overlay
    $(".ListingCard").click(function () {
        $(".overlay--listing").addClass("active");
        // scroll to top of overlay--listing
        $('html, body').animate({
            scrollTop: $('#page--node').offset().top
        }, 'slow');
    });

    // clicking "View photos" on overlay--listing scrolls to Slideshow
    $(".overlay--listing .ListingOverview__body .click-to-slideshow").click(function () {
        // scroll back to top of slideshow
        $('html, body').animate({
            scrollTop: $('#ListingSlideshow').offset().top
        }, 'slow');
    });

    // clicking 'BUY NOW' button on listing overlay reveals purchase overlay
    $(".overlay--listing .button--buy-now").click(function () {
        $(".overlay--purchase").addClass("active");
        // scroll to top
        $('html, body').animate({
            scrollTop: $('#page--node').offset().top
        }, 'slow');
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

    // pressing ESC key hides overlay--purchase of overlay--listing as appropriate
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
            }
        }
    });



});