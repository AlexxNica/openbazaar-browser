OBB = {};
OBB.controller = {};
OBB.controller.vars = {};

OBB.controller.updateModel = function() {
	OBB.model.current_store.peer_id = OBB.controller.get_data.peerID();
	OBB.model.current_store.summary = OBB.controller.get_data.summary();
	OBB.model.current_store.contact_info = OBB.controller.get_data.contactInfo();
	OBB.model.current_store.listing_cards_info = OBB.controller.get_data.ListingCardInfo();
	OBB.model.current_store.categories = OBB.controller.get_data.categories();
	OBB.model.current_store.countries = OBB.controller.get_data.countries();
	OBB.model.current_store.single_listing = OBB.controller.get_data.singleListing();
	OBB.model.current_store.colors = OBB.controller.get_data.colors();
}


