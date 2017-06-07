// controller.api_returns stores API responses
OBB.controller.api_returns = {
    // Keep the API calls separate from the rest of the model.
    // This will make it much easier to swap out the API later on without
    // interfering with the model.

    // response from https://gateway.ob1.io/ob/profile/[peerID]
    profile: {
        "peerID": "",
        "handle": "",
        "name": "",
        "location": "",
        "about": "",
        "shortDescription": "",
        "nsfw": false,
        "vendor": false,
        "moderator": false,
        "moderatorInfo": {
            "description": "",
            "termsAndConditions": "Y",
            "languages": [],
            "acceptedCurrency": "",
            "fee": {
                "fixedFee": {
                    "currencyCode": "",
                    "amount": 0,
                },
                "percentage": 0,
                "feeType": ""
            }
        },
        "contactInfo": {
            "website": "",
            "email": "",
            "phoneNumber": ""
        },
        "colors": {
            "primary": "#FFFFFF",
            "secondary": "#FFFFFF",
            "text": "#000000",
            "highlight": "#FFFFFF",
            "highlightText": "000000"
        },
        "avatarHashes": {
            "tiny": "",
            "small": "",
            "medium": "",
            "large": "",
            "original": ""
        },
        "headerHashes": {
            "tiny": "",
            "small": "",
            "medium": "",
            "large": "",
            "original": ""
        },
        "stats": {
            "followerCount": 0,
            "followingCount": 0,
            "listingCount": 0,
            "ratingCount": 0,
            "averageRating": 0
        },
        "bitcoinPubkey": "",
        "lastModified": ""
    },
    // response from https://gateway.ob1.io/ob/listings/[peerID]
    listings: [],
    // response from https://gateway.ob1.io/ob/followers/[peerID]
    followers: [],
    // response from https://gateway.ob1.io/ob/following/[peerID]
    following: [],
    // response from https://gateway.ob1.io/ob/listing/[peerID]/[listing hash or slug]
    single_listing: {
        "listing": {
            "slug": "",
            "vendorID": {
                "peerID": "",
                "pubkeys": {
                    "identity": "",
                    "bitcoin": ""
                },
                "bitcoinSig": ""
            },
            "metadata": {
                "version": 0,
                "contractType": "",
                "format": "",
                "expiry": "",
                "acceptedCurrency": "",
                "pricingCurrency": ""
            },
            "item": {
                "title": "",
                "description": "",
                "processingTime": "",
                "price": 0,
                "tags": [],
                "images": [],
                "categories": [],
                "condition": "",
                "options": [],
                "skus": []
            },
            "shippingOptions": [],
            "taxes": [],
            "coupons": [],
            "moderators": [],
            "termsAndConditions": "",
            "refundPolicy": ""
        },
        "signature": ""
    },
};