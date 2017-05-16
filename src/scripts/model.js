OBB.model = {};

OBB.model.current_store = {};
OBB.model.current_store.peer_id = "Qmai9U7856XKgDSvMFExPbQufcsc4ksG779VyG4Md5dn4J";
OBB.model.current_store.node_card_info = {
    name: OBB.controller.api_returns.profile.name,
    handle: OBB.controller.api_returns.profile.handle,
    about: OBB.controller.api_returns.profile.about,
    avatar: 'http://gateway.ob1.io/ipns/' + OBB.controller.api_returns.profile.peerID + '/images/tiny/avatar',
    header_img: 'http://gateway.ob1.io/ipns/' + OBB.controller.api_returns.profile.peerID + '/images/tiny/header',
    location: OBB.controller.api_returns.profile.location,
    ave_rating: OBB.controller.api_returns.profile.stats.averageRating,
    rating_count: OBB.controller.api_returns.profile.stats.ratingCount,
};
OBB.model.current_store.listing_cards_info = OBB.controller.get_data.ListingCardInfo();
OBB.model.current_store.categories = OBB.controller.get_data.categories();