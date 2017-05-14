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

    // clicking &times; or "return to store" on lsiting--overlay hides overlay
    $(".overlay--listing .click-to-close").click(function () {
        $(".overlay--listing").removeClass("active");
    });

    // pressing ESC key on lsiting--overlay hides overlay
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $(".overlay--listing").removeClass("active");
        }
    });
});