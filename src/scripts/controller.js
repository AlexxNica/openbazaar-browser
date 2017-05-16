OBB = {};
OBB.controller = {};


OBB.controller.api_returns = { // TODO remove this default testing data before live.
    // Keep the API calls separate from the rest of the model.
    // This will make it much easier to swap out the API later on without
    // interfering with the model.

    // response from http://gateway.ob1.io/ipns/[nodeID]/followers
    profile: {
        "peerID": "Qmai9U7856XKgDSvMFExPbQufcsc4ksG779VyG4Md5dn4J",
        "handle": "drwasho",
        "name": "Washington Sanchez",
        "location": "Brisbane",
        "about": "The Dude",
        "shortDescription": "A long, long, time ago... in a galaxy far away, Naboo was under an attack... screw Jar Jar Binks.",
        "nsfw": false,
        "vendor": true,
        "moderator": true,
        "moderatorInfo": {
            "description": "I am awesome",
            "termsAndConditions": "You suck",
            "languages": [
                "English",
                "Spanish",
                "Portugese"
            ],
            "acceptedCurrency": "TBTC",
            "fee": {
                "fixedFee": {
                    "currencyCode": "USD",
                    "amount": 1000
                },
                "percentage": 6,
                "feeType": "FIXED_PLUS_PERCENTAGE"
            }
        },
        "contactInfo": {
            "website": "openbazaar.org",
            "email": "drwasho@openbazaar.org",
            "phoneNumber": "12345"
        },
        "colors": {
            "primary": "#000000",
            "secondary": "#FFD700",
            "text": "#ffffff",
            "highlight": "#123ABC",
            "highlightText": "#DEAD00"
        },
        "avatarHashes": {
            "tiny": "QmW79kUqtmic2hdrp99NxeQCsQkGrPN5wTwP68QrrJoRve",
            "small": "QmTFfAm1kzYoN4C8qaob8GX1djg3N5ZU5H9DQTqj6opy4g",
            "medium": "QmS5Am7af6HHkUus9m9mZQ4MzccYkLmcoqNLzxzGzyBAoM",
            "large": "QmWVNEUnGXXBQWF1inXPmfUdkDLtv3ud6JPt2UkCah8uw4",
            "original": "QmasPYtZaoY5WqGKFQWqhBwTnaUXcuxxDiCmvidBiYWksh"
        },
        "headerHashes": {
            "tiny": "Qmf9WAWVYwSj3ts6EFqJ7xu6Bn5ayLkS4d85HzUmsocUmF",
            "small": "QmYbvPFsNfLVesp4hbavJ1kivJJngaqC2kBxMQLHY46W87",
            "medium": "QmYXd4BwbKzEw3TS6PTnfC1J3k6P4AaaprqAGddtvQkoSG",
            "large": "QmRMPfbaX9jsNdibQ2YwALX5oUjMxd5Gim9WgLJ5M3u6u8",
            "original": "QmQ6WqnrP2BPPKR916FuBkk9oisVw8U1YfHMuLDYT6qhwh"
        },
        "stats": {
            "followerCount": 9,
            "followingCount": 14,
            "listingCount": 12,
            "ratingCount": 0,
            "averageRating": 0
        },
        "bitcoinPubkey": "03b54f70a26768dfc6335ff1896de9fb34c7c8de98b45141fc264913583b867387",
        "lastModified": "2017-05-12T14:08:18.678533994Z"
    },
    // response from http://gateway.ob1.io/ipns/[nodeID]/listings/index.json
    listings: [
        {
            "hash": "QmaEejHcEVZKbJ6iHFKd6idWtLKTCK13Lh2YyyL2Q3vQY6",
            "slug": "shoe",
            "title": "Shoe",
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Shoe",
            "thumbnail": {
                "tiny": "QmPuXLACw2uhjLfX8wwy3udxHXsXAHPBDZEKA95ST6Vn7v",
                "small": "QmU6NsKDr34zA7wPiCRhdaWa5QRnouUgSmR27tujLLMeNR",
                "medium": "QmfP7aCXFd9mzjnn3csCmTHxTMPMFMS4fF8hcDc3zxQmvg"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 200
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmSYvSgedB1ZPr4v9aMWLLtZWzPnbzNKBtv4DXQ8B3KTjd",
            "slug": "nike",
            "title": "Nike",
            "categories": ['cows', 'pigs'],
            "contractType": "PHYSICAL_GOOD",
            "description": "Yo",
            "thumbnail": {
                "tiny": "QmWGgYrnAbZGJFAYeBXzcMn5KxhDom3oktDNZSuYBoxhnf",
                "small": "QmdgEc9k2k2131VWKzvDBaaasaRFQGrfgm9cR47PRL4371",
                "medium": "QmRMpfUn1z4gFcJrADJd6tNhfY63tYUGqD6Pe8HaBXAWLz"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 200
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [
                "ALL"
            ],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmcfWt6Gogofy1R5kGKFDTT5DtKg3tnZxqPeco7WZxx6Nc",
            "slug": "a-leaf-on-the-wind",
            "title": "A leaf on the wind",
            "categories": ['pigs', 'hampsters'],
            "contractType": "PHYSICAL_GOOD",
            "description": "Blah",
            "thumbnail": {
                "tiny": "Qmb22kXXvG8HJUoNWQHkjuPnwaVNnnpkP3jerYZnLAm5CK",
                "small": "QmVTw7N6n29wHqLAi9vhwQxwYMAsuUUZ4eKbeRqWKAceeR",
                "medium": "QmVsk85NzufcZtqoxZzU8N1PnksmoyuTQSVKJ65UycFzzb"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 100
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [
                "ALL"
            ],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmU28bqgq2EBDV2qCGSyFs8ASDYD8k22Cu7nrWmxGC4T74",
            "slug": "cheap-leaft",
            "title": "Cheap leaft",
            "categories": ['pigs'],
            "contractType": "PHYSICAL_GOOD",
            "description": "",
            "thumbnail": {
                "tiny": "QmaVMBtKADCBW68hYn8mHDQForhPAwTyNZU4B2xds7gN7v",
                "small": "QmRu6tMFaTbquWfAHKMDRVueasc6Sb5hWTMZCs3B5Y39ej",
                "medium": "QmeaNff4y6RxmHrVG5Y4LfciBickJxWzh5MGSzKmmxV3TZ"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 200
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [
                "ALL"
            ],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmZXEaFtMm2WrgsSTVWjcbVaWjiVwPa6as2xUPFEoDFwVo",
            "slug": "blarf",
            "title": "Blarf",
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Sounds like vomit, but apparently it is clothing.",
            "thumbnail": {
                "tiny": "Qmar7W17swHhYmEqhanDuvfHUCKWz5iq6D7t23s3idUt6X",
                "small": "QmP7Z8m6p3RYdArT6xCyEJGET4RSyJAe8KZ2MQpTCzzWes",
                "medium": "QmcsiL2wP7kviyN4jbx6UeXwioFqFxyXVocgQEx1YAnBWu"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 100
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmcLyNhwFYKozsSLSzqyyq2NksZpz3x9mLW2e6BVmLnQWd",
            "slug": "earrings",
            "title": "Earrings",
            "categories": ['hampsters'],
            "contractType": "PHYSICAL_GOOD",
            "description": "1 earring",
            "thumbnail": {
                "tiny": "QmPeGyFqLCTDUhFWkhCXqsp5mEPYgFPyvFA4eLwWKRCuiq",
                "small": "QmTZFsGgfs96YbvSzjCShNup9eQorfX1TmmBoshPrFjceY",
                "medium": "QmUXDeFwD19KwEsGt8oECVSUgepjDYQadzNmLkjboGVGGs"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 200
            },
            "shipsTo": [
                "AFGHANISTAN"
            ],
            "freeShipping": [],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmbEdUjpEXfvwzb8NkdYzbJaN8xutkNWo1SDyL15VdUQ97",
            "slug": "test",
            "title": "Test",
            "categories": ['cows', 'hampsters', 'pigs', 'dogs'],
            "contractType": "PHYSICAL_GOOD",
            "description": "Test",
            "thumbnail": {
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 100
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmY1QkeGbr5qAGasA7GHcggDn8R6mc2LVhna8SqcVSEszd",
            "slug": "stuff",
            "title": "Stuff",
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Stuff",
            "thumbnail": {
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 100
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [
                "ALL"
            ],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmNoEPqv8DzzeJgkT4HHP6oNY7uqdzK1fS55hDqSq8VLj5",
            "slug": "whatever",
            "title": "Whatever",
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "I don't care",
            "thumbnail": {
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 100
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [
                "ALL"
            ],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmatqBSAtWzMwqX1iARErGnq3t3wAyo6pg99UpPKdf1Mgi",
            "slug": "assfall",
            "title": "Assfall",
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Water",
            "thumbnail": {
                "tiny": "QmaBnTE5SsaWmNs52XSZF3yiJQr8Q9kZwDeobER1Ep7y4i",
                "small": "QmQMhXC1NgdwaAxScUnQRsQdRA2oxqvxm1m3rtnehJ454Q",
                "medium": "QmbBigxQ9W9MhHt9u4xEawfbctBqunZsaryJ1VHNDwg18L"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 100
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [
                "ALL"
            ],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmVpADARfkvqsEqqGqGXdfVrVQvT4uP4vo3SDE62htvdHi",
            "slug": "a-small-tree",
            "title": "A small tree",
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Green thing",
            "thumbnail": {
                "tiny": "QmZLuV99jy7eqfadLR7z4ucqvdgSqy8QhyavtfcTq7CPQK",
                "small": "QmVR9PQiTKnGwc3Vgx624hcTtoPN7vscXipNLNEaYptjCX",
                "medium": "QmWK43EEst27qShmAFqPMgGCj1cowjvggcuJjKyK7Aem8N"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 100
            },
            "shipsTo": [
                "AFGHANISTAN",
                "ALGERIA"
            ],
            "freeShipping": [],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        },
        {
            "hash": "QmYxWoTH683GvzRMrum19iaRa61x5WLhvbb1cwFNk4WFCq",
            "slug": "vintage-dress-options",
            "title": "YuooMuoo V-neck Knitted Dress",
            "categories": [
                "ðŸ‘š Apparel \u0026 Accessories"
            ],
            "contractType": "PHYSICAL_GOOD",
            "description": "This is a listing example.",
            "thumbnail": {
                "tiny": "QmbjyAxYee4y3443kAMLcmRVwggZsRDKiyXnXus1qdJJWz",
                "small": "QmVsoT9iabv6GZhxhvtjSpQMJA6QyMivGTs6MmHJr6TBm9",
                "medium": "QmTJfeeapZwFM8EoZAuf16JsSJyxZtKaAR6hmWiMf4CTcF"
            },
            "price": {
                "currencyCode": "USD",
                "amount": 200
            },
            "shipsTo": [
                "ALL"
            ],
            "freeShipping": [
                "ALL"
            ],
            "language": "",
            "averageRating": 0,
            "ratingCount": 0
        }
    ],
    // response from http://gateway.ob1.io/ipns/[nodeID]/followers
    followers: [
        "QmdbhP3spXaunm7k6gSbU5M3nwjTQxsBuzsyDLPzibSPtz",
        "QmdswpzsKYsSNPXBmw7mFnfHwi31PwaGbnk8QPKFK9ZoAX",
        "QmRDh9LuETJpJ1xDRZdeBy54fxez1KYUNdmgvtcQMQpgr6",
        "QmXGXVADcGgp6eoaksccYaLQ3JcWgDd5NWQn7FbuaQC1Zz",
        "QmcguX9HRJPH4L9aZjVoWjQXHw9sf9dp5MHgKz6sPxNeXT",
        "QmcdnKmDwGAUUWa59ge6utrsZHr2PfntRVSLAbeEmJW2Rw",
        "QmRieXKGL23vWTJcU8Z4jJS8zSmtpXf6w7RZwdNNfsuR6i",
        "QmQd7NtnAwucjcoSyspX55usLiAQD2xYXZvWxe92XEdv8v",
        "QmTdEppZWPcMhk7kPHL6qqxW7LUMX2SrymMfHExSrhXctZ"
    ],
    // response from http://gateway.ob1.io/ipns/[nodeID]/following
    following: [
        "QmNyYyRCEQPAvZRbwUqnvDkuqnrjni7VLWXirWMCzbzjPm",
        "QmechoNQEBi3EJPYLrexRkuUCHLHKPsrNiS7BvAa5s5CNS",
        "QmcwZ9HJKLq7jToUrTFsyNcbbJUC33V7sfQ8apSut9XTdp",
        "QmanUuiLTckNXPDCfamKYJeWPjxBoCKrSwzi4XU7j9B3tr",
        "QmZXGKrRRe5RTDhvzhZfSTe8vYBDGV7HBoNz5FS3U9FnUa",
        "QmYcZjTpcpqnMpdPSyz27zVNkfWNsGaFWByAAu1pUBBQaN",
        "QmbVRyhE2PVPz4ZjsjaaaphonRMKBeJC9KM5VFQbQLMYLk",
        "QmdbhP3spXaunm7k6gSbU5M3nwjTQxsBuzsyDLPzibSPtz",
        "QmPm9ygnVWNaU2Rq4j5xFFh9c4p86d8LLCWpG8y9aRDu4A",
        "Qma1fPqcDKiLAWXQ9BCAsVCtftTL1FjDyjjX4rMMabd8Qf",
        "QmbnoUad349NMDQfqdnLCYNupXxH5g2Qy1dS4uGYxNRXXw",
        "QmRieXKGL23vWTJcU8Z4jJS8zSmtpXf6w7RZwdNNfsuR6i",
        "QmcguX9HRJPH4L9aZjVoWjQXHw9sf9dp5MHgKz6sPxNeXT",
        "QmNgBZN7z1CfMLbwyEwnGoixjbSaBcP9fS5ecMzZwCq3Ku"
    ],
    // response from http://gateway.ob1.io/ipns/[nodeID]/ratings/index.json
    ratings: [
        {
            "hash": "QmP1hPwssz2mg7fHtYbc6cUerrFgZS3CMuTHr7n1Qi5bcP",
            "slug": "physical-options"
        },
        {
            "hash": "QmUE9D6idzXk2GMkvSK7Jyr2uhjsPDVRuRBp7W8Y3jnDzk",
            "slug": "physical-options"
        },
        {
            "hash": "QmXeEoUEyKyVWDCqpAgJXj3cS3tN4ZXFDhYtvjVYQwqwvd",
            "slug": "physical-options"
        },
        {
            "hash": "QmPxCrXUfEgPeLjysQ1JVShTVp3gpKseQT1TP8FRsPdmii",
            "slug": "physical-options"
        }
    ],
};


OBB.controller.get_data = {};
OBB.controller.get_data.ListingCardInfo = function() {
    var listings = OBB.controller.api_returns.listings;
    var result = [];
    $.each(listings, function(index, listing) {
        result.push({
            title: listing.title,
            categories_array: listing.categories,
            price: listing.price.amount,
            img_url: "./dist/images/example--dog00.jpg", //TODO call the API again for this info if this issue hasn't been resolved: https://github.com/OpenBazaar/openbazaar-go/issues/528
            ave_rating: listing.averageRating,
            rating_count: listing.ratingCount,
            nsfw: false, //TODO call the API again for this info if this issue hasn't been resolved: https://github.com/OpenBazaar/openbazaar-go/issues/528
            free_shipping: listing.freeShipping,
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
    return result;
}
