OBB.controller.event_listeners = {
	pageNode: function() {
		// store nav tab functionality
	    $(".navtab").click(function () {
	        var tab_target = $(this)["0"].attributes[1].value;
	        $(".navtab, .tab, .overlay").removeClass("active");
	        $(this).addClass("active");
	        $(".tab." + tab_target).addClass("active");
	    });
	},

	tabStore: function() {

	},

	overlays: function() {







	},

}