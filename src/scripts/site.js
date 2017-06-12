$(document).ready(function() {

    OBB.controller.event_listeners();

    // prevents scrolling from locking after animate/scrollTop
    $(window).bind("mousewheel", function() {
        $("html, body").stop(true, false);
    });
});



