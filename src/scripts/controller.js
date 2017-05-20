OBB = {};
OBB.controller = {};

// controller.api_returns stores API responses
OBB.controller.api_returns = { // TODO remove this default testing data before live.
    // Keep the API calls separate from the rest of the model.
    // This will make it much easier to swap out the API later on without
    // interfering with the model.

    // response from https://gateway.ob1.io/ob/profile/[peerID]
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
    // response from https://gateway.ob1.io/ob/listings/[peerID]
    listings: [
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Shoe",
            "freeShipping": [],
            "hash": "QmaEejHcEVZKbJ6iHFKd6idWtLKTCK13Lh2YyyL2Q3vQY6",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "shoe",
            "thumbnail": {
                "medium": "QmfP7aCXFd9mzjnn3csCmTHxTMPMFMS4fF8hcDc3zxQmvg",
                "small": "QmU6NsKDr34zA7wPiCRhdaWa5QRnouUgSmR27tujLLMeNR",
                "tiny": "QmPuXLACw2uhjLfX8wwy3udxHXsXAHPBDZEKA95ST6Vn7v"
            },
            "title": "Shoe"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Yo",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmSYvSgedB1ZPr4v9aMWLLtZWzPnbzNKBtv4DXQ8B3KTjd",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "nike",
            "thumbnail": {
                "medium": "QmRMpfUn1z4gFcJrADJd6tNhfY63tYUGqD6Pe8HaBXAWLz",
                "small": "QmdgEc9k2k2131VWKzvDBaaasaRFQGrfgm9cR47PRL4371",
                "tiny": "QmWGgYrnAbZGJFAYeBXzcMn5KxhDom3oktDNZSuYBoxhnf"
            },
            "title": "Nike"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Blah",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmcfWt6Gogofy1R5kGKFDTT5DtKg3tnZxqPeco7WZxx6Nc",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "a-leaf-on-the-wind",
            "thumbnail": {
                "medium": "QmVsk85NzufcZtqoxZzU8N1PnksmoyuTQSVKJ65UycFzzb",
                "small": "QmVTw7N6n29wHqLAi9vhwQxwYMAsuUUZ4eKbeRqWKAceeR",
                "tiny": "Qmb22kXXvG8HJUoNWQHkjuPnwaVNnnpkP3jerYZnLAm5CK"
            },
            "title": "A leaf on the wind"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmU28bqgq2EBDV2qCGSyFs8ASDYD8k22Cu7nrWmxGC4T74",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "cheap-leaft",
            "thumbnail": {
                "medium": "QmeaNff4y6RxmHrVG5Y4LfciBickJxWzh5MGSzKmmxV3TZ",
                "small": "QmRu6tMFaTbquWfAHKMDRVueasc6Sb5hWTMZCs3B5Y39ej",
                "tiny": "QmaVMBtKADCBW68hYn8mHDQForhPAwTyNZU4B2xds7gN7v"
            },
            "title": "Cheap leaft"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Sounds like vomit, but apparently it is clothing.",
            "freeShipping": [],
            "hash": "QmZXEaFtMm2WrgsSTVWjcbVaWjiVwPa6as2xUPFEoDFwVo",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "blarf",
            "thumbnail": {
                "medium": "QmcsiL2wP7kviyN4jbx6UeXwioFqFxyXVocgQEx1YAnBWu",
                "small": "QmP7Z8m6p3RYdArT6xCyEJGET4RSyJAe8KZ2MQpTCzzWes",
                "tiny": "Qmar7W17swHhYmEqhanDuvfHUCKWz5iq6D7t23s3idUt6X"
            },
            "title": "Blarf"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "1 earring",
            "freeShipping": [],
            "hash": "QmcLyNhwFYKozsSLSzqyyq2NksZpz3x9mLW2e6BVmLnQWd",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "AFGHANISTAN"
            ],
            "slug": "earrings",
            "thumbnail": {
                "medium": "QmUXDeFwD19KwEsGt8oECVSUgepjDYQadzNmLkjboGVGGs",
                "small": "QmTZFsGgfs96YbvSzjCShNup9eQorfX1TmmBoshPrFjceY",
                "tiny": "QmPeGyFqLCTDUhFWkhCXqsp5mEPYgFPyvFA4eLwWKRCuiq"
            },
            "title": "Earrings"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Test",
            "freeShipping": [],
            "hash": "QmbEdUjpEXfvwzb8NkdYzbJaN8xutkNWo1SDyL15VdUQ97",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "test",
            "thumbnail": {
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP"
            },
            "title": "Test"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Stuff",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmY1QkeGbr5qAGasA7GHcggDn8R6mc2LVhna8SqcVSEszd",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "stuff",
            "thumbnail": {
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP"
            },
            "title": "Stuff"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "I don\u0026#39;t care",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmNoEPqv8DzzeJgkT4HHP6oNY7uqdzK1fS55hDqSq8VLj5",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "whatever",
            "thumbnail": {
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP"
            },
            "title": "Whatever"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Water",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmatqBSAtWzMwqX1iARErGnq3t3wAyo6pg99UpPKdf1Mgi",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "assfall",
            "thumbnail": {
                "medium": "QmbBigxQ9W9MhHt9u4xEawfbctBqunZsaryJ1VHNDwg18L",
                "small": "QmQMhXC1NgdwaAxScUnQRsQdRA2oxqvxm1m3rtnehJ454Q",
                "tiny": "QmaBnTE5SsaWmNs52XSZF3yiJQr8Q9kZwDeobER1Ep7y4i"
            },
            "title": "Assfall"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Green thing",
            "freeShipping": [],
            "hash": "QmVpADARfkvqsEqqGqGXdfVrVQvT4uP4vo3SDE62htvdHi",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "AFGHANISTAN",
                "ALGERIA"
            ],
            "slug": "a-small-tree",
            "thumbnail": {
                "medium": "QmWK43EEst27qShmAFqPMgGCj1cowjvggcuJjKyK7Aem8N",
                "small": "QmVR9PQiTKnGwc3Vgx624hcTtoPN7vscXipNLNEaYptjCX",
                "tiny": "QmZLuV99jy7eqfadLR7z4ucqvdgSqy8QhyavtfcTq7CPQK"
            },
            "title": "A small tree"
        },
        {
            "averageRating": 0,
            "categories": [
                "ðŸ‘š Apparel \u0026amp; Accessories"
            ],
            "contractType": "PHYSICAL_GOOD",
            "description": "This is a listing example.",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmYxWoTH683GvzRMrum19iaRa61x5WLhvbb1cwFNk4WFCq",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "vintage-dress-options",
            "thumbnail": {
                "medium": "QmTJfeeapZwFM8EoZAuf16JsSJyxZtKaAR6hmWiMf4CTcF",
                "small": "QmVsoT9iabv6GZhxhvtjSpQMJA6QyMivGTs6MmHJr6TBm9",
                "tiny": "QmbjyAxYee4y3443kAMLcmRVwggZsRDKiyXnXus1qdJJWz"
            },
            "title": "YuooMuoo V-neck Knitted Dress"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Test",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmeAr6oTt3H8kTwkzdFZcckH7gYbJruTVVuVhyxmeQuGSK",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "test1",
            "thumbnail": {
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP"
            },
            "title": "Test"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Test 2",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmckU3dnmTcHsPK3FgkB1cPajaKmhUr1sjPy3Nhn2FvtHQ",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "test-2",
            "thumbnail": {
                "medium": "QmcsiL2wP7kviyN4jbx6UeXwioFqFxyXVocgQEx1YAnBWu",
                "small": "QmP7Z8m6p3RYdArT6xCyEJGET4RSyJAe8KZ2MQpTCzzWes",
                "tiny": "Qmar7W17swHhYmEqhanDuvfHUCKWz5iq6D7t23s3idUt6X"
            },
            "title": "Test 2"
        },
        {
            "averageRating": 0,
            "categories": [
                "ðŸ‘š Apparel \u0026amp; Accessories"
            ],
            "contractType": "PHYSICAL_GOOD",
            "description": "This is a listing example.",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmebrxpfdsimQmBa2CBF7fM8iyj2kkGjZm4NHW47kZbka2",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "vintage-nice-dress-image-variants-a",
            "thumbnail": {
                "medium": "QmTJfeeapZwFM8EoZAuf16JsSJyxZtKaAR6hmWiMf4CTcF",
                "small": "QmVsoT9iabv6GZhxhvtjSpQMJA6QyMivGTs6MmHJr6TBm9",
                "tiny": "QmbjyAxYee4y3443kAMLcmRVwggZsRDKiyXnXus1qdJJWz"
            },
            "title": "YuooMuoo V-neck Knitted Dress"
        },
        {
            "averageRating": 0,
            "categories": [
                "ðŸ‘š Apparel \u0026amp; Accessories"
            ],
            "contractType": "PHYSICAL_GOOD",
            "description": "This is a listing example.",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmaJ1gSSA8Hefwo6ZsP7D6BVoeDHwXm31jjujUhwrA1UUC",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "vintage-nice-dress-image-variants-b",
            "thumbnail": {
                "medium": "QmTJfeeapZwFM8EoZAuf16JsSJyxZtKaAR6hmWiMf4CTcF",
                "small": "QmVsoT9iabv6GZhxhvtjSpQMJA6QyMivGTs6MmHJr6TBm9",
                "tiny": "QmbjyAxYee4y3443kAMLcmRVwggZsRDKiyXnXus1qdJJWz"
            },
            "title": "YuooMuoo V-neck Knitted Dress"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Testing",
            "freeShipping": [
                "ALL"
            ],
            "hash": "Qmc7AreZNJv9SxuwksSqpQgLZjTdvYVqQ8Tjj8U5dpcw5J",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "test-mix-in",
            "thumbnail": {
                "medium": "QmZvKEHvg9Qvf8344Eo5uRTpLAS8xZLGVpkpc2KCiqYYyU",
                "small": "QmdySNWcF5DRa4mJiPaeWMcugNiCxeFv2hG9fzbabN25DM",
                "tiny": "QmXM5YLcaiGj9DnfnTwGuJSyshQR9j1xZkHfwsgaUuNH4E"
            },
            "title": "Test mix-in"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Blah",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmV4U7QqrbkZboqGe4WLHHY6XjbyUfpGhQGmPKCKZCqdVx",
            "language": "",
            "nsfw": true,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "testing-something-else",
            "thumbnail": {
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP"
            },
            "title": "Testing something else"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Test",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmQfWiWSWfu4cXRSPRBrfm6pHsxeesn84NQ8Jpe2LSRA4P",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "test-2-options-mobile",
            "thumbnail": {
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP"
            },
            "title": "Test 2 options mobile"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Very shy",
            "freeShipping": [
                "ALL"
            ],
            "hash": "Qmbn5aM3eBRLEmnKdQc8T1iEJio6NR6PcBPds3wrbuGwYk",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "shy-leaf",
            "thumbnail": {
                "medium": "QmWk4NQPjPkjpQyWE2315MjMmdjqpwUsnF9m3orvrQmDZn",
                "small": "QmZdieEwv9FjKzDZqiCnwrLfxSDAXnUuFKifjfH1FHHLny",
                "tiny": "QmZuHP9kLcb73iuf6facowVjAp1TjvwnBdTMj1sJyyYHBe"
            },
            "title": "Shy Leaf"
        },
        {
            "averageRating": 0,
            "categories": [],
            "contractType": "PHYSICAL_GOOD",
            "description": "Stuff",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmSF4Z98FYa68G4LFgDp7D5t1vn6jPHGjpqajy6qenMrJK",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 100,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "testing-stuff",
            "thumbnail": {
                "medium": "QmU6K13NwVr8aAT4ycaD9oqX9k222UQxd6kmTj4FrC6P9m",
                "small": "QmZg84nusPK5CoFzxiphBmqtqJBFDv58FHFH3onvYjVx3B",
                "tiny": "QmeXPeWv6cv2dhimFY1A6y7ogXBD8rQFz1sXjy7smBjthP"
            },
            "title": "Testing stuff"
        },
        {
            "averageRating": 0,
            "categories": [
                "ðŸ‘š Apparel \u0026amp; Accessories"
            ],
            "contractType": "PHYSICAL_GOOD",
            "description": "This is a listing example.",
            "freeShipping": [
                "ALL"
            ],
            "hash": "QmRaDLFvra1dGcxoHU8qnve8WLJeyfFuMG3cPGRouYUjtV",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [
                "ALL"
            ],
            "slug": "vintage-dress-no-options",
            "thumbnail": {
                "medium": "QmTJfeeapZwFM8EoZAuf16JsSJyxZtKaAR6hmWiMf4CTcF",
                "small": "QmVsoT9iabv6GZhxhvtjSpQMJA6QyMivGTs6MmHJr6TBm9",
                "tiny": "QmbjyAxYee4y3443kAMLcmRVwggZsRDKiyXnXus1qdJJWz"
            },
            "title": "YuooMuoo V-neck Knitted Dress"
        },
        {
            "averageRating": 0,
            "categories": [
                "ðŸ‘š Apparel \u0026amp; Accessories"
            ],
            "contractType": "DIGITAL_GOOD",
            "description": "This is a listing example.",
            "freeShipping": [],
            "hash": "QmYn8G41EfTXm8zsH6iLXHjDMtiYozQWhnfqtxCddnYgQT",
            "language": "",
            "nsfw": true,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [],
            "slug": "vintage-nice-dress-image-variants-digital",
            "thumbnail": {
                "medium": "QmTJfeeapZwFM8EoZAuf16JsSJyxZtKaAR6hmWiMf4CTcF",
                "small": "QmVsoT9iabv6GZhxhvtjSpQMJA6QyMivGTs6MmHJr6TBm9",
                "tiny": "QmbjyAxYee4y3443kAMLcmRVwggZsRDKiyXnXus1qdJJWz"
            },
            "title": "YuooMuoo V-neck Knitted Dress"
        },
        {
            "averageRating": 0,
            "categories": [
                "ðŸ‘š Apparel \u0026amp; Accessories"
            ],
            "contractType": "DIGITAL_GOOD",
            "description": "This is a listing example.",
            "freeShipping": [],
            "hash": "QmSxCxzZkMPoBN2iJAoUJ5BgvAxrz28AiV47sZCZimeFSS",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [],
            "slug": "vintage-dress-no-options-digital",
            "thumbnail": {
                "medium": "QmTJfeeapZwFM8EoZAuf16JsSJyxZtKaAR6hmWiMf4CTcF",
                "small": "QmVsoT9iabv6GZhxhvtjSpQMJA6QyMivGTs6MmHJr6TBm9",
                "tiny": "QmbjyAxYee4y3443kAMLcmRVwggZsRDKiyXnXus1qdJJWz"
            },
            "title": "YuooMuoo V-neck Knitted Dress"
        },
        {
            "averageRating": 0,
            "categories": [
                "ðŸ‘š Apparel \u0026amp; Accessories"
            ],
            "contractType": "SERVICE",
            "description": "This is a listing example.",
            "freeShipping": [],
            "hash": "QmV9bXsL3MK5mhRuLyEC8fFyVrAydtRm5xaUiChCFJpv1c",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [],
            "slug": "vintage-nice-dress-image-variants-service",
            "thumbnail": {
                "medium": "QmTJfeeapZwFM8EoZAuf16JsSJyxZtKaAR6hmWiMf4CTcF",
                "small": "QmVsoT9iabv6GZhxhvtjSpQMJA6QyMivGTs6MmHJr6TBm9",
                "tiny": "QmbjyAxYee4y3443kAMLcmRVwggZsRDKiyXnXus1qdJJWz"
            },
            "title": "YuooMuoo V-neck Knitted Dress"
        },
        {
            "averageRating": 0,
            "categories": [
                "ðŸ‘š Apparel \u0026amp; Accessories"
            ],
            "contractType": "SERVICE",
            "description": "This is a listing example.",
            "freeShipping": [],
            "hash": "QmaZuxXSyBR6ru5zYiTVwyG8L3yruhMUDq6ShkS4K6wB7Y",
            "language": "",
            "nsfw": false,
            "price": {
                "amount": 200,
                "currencyCode": "USD"
            },
            "ratingCount": 0,
            "shipsTo": [],
            "slug": "vintage-dress-no-options-service",
            "thumbnail": {
                "medium": "QmTJfeeapZwFM8EoZAuf16JsSJyxZtKaAR6hmWiMf4CTcF",
                "small": "QmVsoT9iabv6GZhxhvtjSpQMJA6QyMivGTs6MmHJr6TBm9",
                "tiny": "QmbjyAxYee4y3443kAMLcmRVwggZsRDKiyXnXus1qdJJWz"
            },
            "title": "YuooMuoo V-neck Knitted Dress"
        }
    ],
    // response from https://gateway.ob1.io/ob/followers/[peerID]
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
    // response from https://gateway.ob1.io/ob/following/[peerID]
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



// controller.get_data grabs data from API responses and formats it appropriately for use by the model.
//  If you want use another API or data source, OBB.controller.get_data is the place where you'll specify 
//  those changes.
OBB.controller.get_data = {};
OBB.controller.get_data.ListingCardInfo = function() {
    var listings = OBB.controller.api_returns.listings;
    var result = [];
    $.each(listings, function(index, listing) {
        result.push({
            title: listing.title,
            categories_array: listing.categories,
            price: listing.price.amount,
            img_url: 'https://gateway.ob1.io/ob/image/' + listing.thumbnail.small,
            ave_rating: listing.averageRating,
            rating_count: listing.ratingCount,
            nsfw: listing.nsfw,
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
    // Make each string in array lowercase
    $.each(result, function(index, string) {
        result[index] = string.toLowerCase();
    });

    return result;
};
OBB.controller.get_data.countries = function() {
    var listings = OBB.controller.api_returns.listings;
    var result = [];
    $.each(listings, function(index, listing) {
        $.merge(result,listing.shipsTo);
        result = $.unique(result);
    });
    return result;
};
OBB.controller.get_data.summary = function() {
    result = {
        name: OBB.controller.api_returns.profile.name,
        handle: OBB.controller.api_returns.profile.handle,
        about: OBB.controller.api_returns.profile.about,
        description: OBB.controller.api_returns.profile.shortDescription,
        avatar: 'https://gateway.ob1.io/ob/image/' + OBB.controller.api_returns.profile.avatarHashes.tiny,
        header_img: './dist/images/example--dog05.jpg',// TODO replace with: 'https://gateway.ob1.io/ob/image/' + OBB.controller.api_returns.profile.headerHashes.large,
        location: OBB.controller.api_returns.profile.location,
        ave_rating: OBB.controller.api_returns.profile.stats.averageRating,
        rating_count: OBB.controller.api_returns.profile.stats.ratingCount,
    }

    return result;
};
OBB.controller.get_data.contactInfo = function() {

    result = OBB.controller.api_returns.profile.contactInfo;

    return result;
};






