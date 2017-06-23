# openbazaar-browser
A web-based OpenBazaar 2.0 network browser.

## Operation
You can see a live version [here](http://austinkwilliams.com/tempdev/).
To host your own, or to run locally, just copy the repo to your web server or local machine:

```$ git clone https://github.com/Austin-Williams/openbazaar-browser.git```

Then open `index.php` in any modern web browser.

## Swapping Out API's
All of the listings you see are served from the OB1 api: gateway.ob1.io. If you want to swap out OB1's API for your own, you can do that by modifying the `get_data.js` file. You'll also have to change the URLs in `event_listeners.js` and `functions.js` to point to your endpoint instead of OB1's.

## A Note on Censorship
I don't (and *can't*) have any control over the content of the listings you see. This repo simply provides a pretty interface for info served up by the OB1 API. None of that stuff passes through my repo or my web server. It comes straight from the OB1 gateway to your browser. Please don't email me or open an issue if you see a product listing you don't like. There's exactly nothing I can do about it.

## Showin' Love
* The [design](https://projects.invisionapp.com/share/7VAVKRDPC#/screens) is by Mike Wolf from OB1.
* The API is all OB1's work.
* I (Austin Williams) developed this browser based on Wolf's design. I am not affiliated with or paid by OB1. I'm just a fan of the OpenBazaar project and wanted to contribute to the project in some way.

If you want to show me some love you can do so here:
* BTC: [1FnxapxMgUxrHKM6GJpDEEnLr2KY68Tz4A](https://btc-bitcore1.trezor.io/address/1FnxapxMgUxrHKM6GJpDEEnLr2KY68Tz4A)
* ZEC: [t1cQnSQTAfLcFpnbQtDeV5kgNNN4NSTYP4Q](https://zec-bitcore1.trezor.io/address/t1cQnSQTAfLcFpnbQtDeV5kgNNN4NSTYP4Q)
* ETH: [0xf81c2713c4ce5b2b3ca2fb60aa2c0878a8ed8daf](https://etherscan.io/address/0xf81c2713c4ce5b2b3ca2fb60aa2c0878a8ed8daf)

**Free the market. Free the world.**