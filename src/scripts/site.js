$(document).ready(function() {

    OBB.controller.render.pageNode();
    OBB.controller.event_listeners();
    OBB.controller.addFiltering();

    // prevents scrolling from locking after animate/scrollTop
    $(window).bind("mousewheel", function() {
        $("html, body").stop(true, false);
    });
});



