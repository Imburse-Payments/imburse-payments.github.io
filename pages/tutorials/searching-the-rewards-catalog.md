---
layout: default
title: Searching the Rewards Catalog
toc: tutorial-searching-the-rewards-catalog
body_color: body-pink
section_name: Searching the Rewards Catalog
last_updated: March 11th, 2020
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Searching the Rewards Catalog
If you are looking to create a Payout Scheme that offers Rewards, Gift cards, etc. to your customers, you will need to search the Rewards Catalog to store the resultant `rewardId` against your Reward Group.

For more information on the Rewards Catalog, see the [Rewards Catalog in Getting Started](/pages/getting-started/rewards-catalog).

# Prerequisites
In addition to familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Access Token` derived from a `Tenant API Key`

# Search the Rewards Catalog
Using the `Access Token` acquired in Step 1, we can now search the Rewards Catalog.

#### Request
Replace the `{access-token}` placeholder value with the `Access Token` value.

You can filter the results by supplying parameters in the request.

- `appId` - **Mandatory** - Filter by a particular App Id. ie. `TANGOCARD_RAAS`.
- `brandName` - **Optional** - Filter by a brand, ie. Amazon, Mastercard, etc.
- `countries` - **Optional** - Filter by country where the reward can be redeemed. You can specify multiple countries by separating with a comma. ie. `GB` or `GB,DE,FR` etc.
- `currencies` - **Optional** - Filter by the currency the reward can by redeemed in. You can specify multiple currencies by separating with a comma. ie. `EUR` or `GBP,EUR` etc.
- `amount` - **Optional** - Filter by the amount the reward is for. Some rewards are fixed value, ie. `5.00`; others are valid for any amount within a range. Specify the amount the you want to payout to filter the rewards accordingly.

In the example request below we have specified `TANGOCARD_RAAS` as the App Id, `Amazon` as the brand, and countries as `GB`. The amount is `5.00`.


```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/catalog?appId=TANGOCARD&brandName=&countries=GB&currencies=&amount=15.0" \
  --header "Authorization: Bearer {access-token}"
```

#### Response
The response will contain all the rewards that match the filter parameters. Please note that for brevity in this tutorial we are only showing 1 of the 10+ results that would otherwise return for this request.

The `rewardId` property value is what you will need to save for referencing this rewards later in a Reward Group.

```json
{
  "rewards": [
    {
      "rewardId": "3AE792C681E5A58EE307F92984E5F7E10086F396DA7852D9585A6F8EAA3C75A1",
      "rewardName": "Geschenkkarte für App Store & iTunes über 15 €",
      "brandName": "App Store & iTunes Germany",
      "appId": "TANGOCARD_RAAS",
      "appName": "Tangocard",
      "countries": [
        "DE"
      ],
      "currencyCode": "EUR",
      "isWholeAmountValueRequired": false,
      "valueType": "FIXED_VALUE",
      "fixedValue": 15,
      "maxValue": null,
      "minValue": null,
      "imageUrl": "https://dwwvg90koz96l.cloudfront.net/images/brands/b854769-300w-326ppi.png",
      "status": "active",
      "brand": {
        "brandKey": "B405468",
        "brandName": "App Store & iTunes Germany",
        "status": "active",
        "description": [
          {
            "languageCode": "de",
            "text": "<p>Eine Karte. Millionen Möglichkeiten. Verwende die Geschenkkarte für App Store & iTunes, um Apps, Spiele, Musik, Filme und TV-Sendungen zu laden. Die Karte ist in verschiedenen Beträgen erhältlich und du kannst sie natürlich auch für In-App-Käufe oder Staffelpässe für TV-Sendungen einlösen – und sogar für iCloud-Speicher, damit du deine Dateien von all deinen Apple-Geräten sichern und abrufen kannst.</p>"
          },
          {
            "languageCode": "en",
            "text": "<p>One card, millions of ways to enjoy it. Use the App Store & iTunes Gift Card to get apps, games, music, movies and TV shows. Available in a variety of denominations - spend it on in-app content, books, TV show subscriptions or even iCloud storage to secure files from all your Apple devices.</p>"
          }
        ],
        "shortDescription": [
          {
            "languageCode": "de",
            "text": "<p>Eine Karte. Millionen Möglichkeiten. Einlösbar für Apps, Spiele, Musik, Filme und iCloud.</p>"
          },
          {
            "languageCode": "en",
            "text": "<p>One card, millions of ways to enjoy it. Use for apps, games, music, movies, and iCloud.</p>"
          }
        ],
        "disclaimer": [
          {
            "languageCode": "de",
            "text": "<p>© 2019 Apple Distribution International. Alle Rechte vorbehalten. Apple ist nicht mitwirkender oder Sponsor dieser Werbeaktion.</p>"
          },
          {
            "languageCode": "en",
            "text": "<p>© 2019 Apple Distribution International. All rights reserved. Apple is not a participant in or sponsor of this promotion.</p>"
          }
        ],
        "terms": [
          {
            "languageCode": "de",
            "text": "<p>Nur für Käufe in Deutschland bei Apple Media Services gültig. Für die Nutzung sind eine Apple-ID und die vorherige Annahme der Lizenz- und Nutzungsbestimmungen erforderlich. Das Einlösen gegen bar, die Rückgabe gegen Rückerstattung (es sei denn, im Fall eines gültiges Widerrufs), der Umtausch sowie. die Verwendung zum Kauf sonstiger Waren ist nicht möglich. Apple haftet nicht für Verluste oder Schäden, die aus dem zufälligen Untergang, dem Diebstahl oder aus einer rechtswidrigen Nutzung der Karte entstehen. Gesetzliche Rechte bleiben hiervon unberührt. iTunes-Karten werden von Apple Distribution International ausgestellt und geliefert. Beim Vertrieb der Karten handelt der Einzelhändler als Vertriebsmittler für und im Auftrag von Apple Distribution International. Die entsprechenden Bestimmungen sind hier einsehbar: <a href=\"http://apple.com/de/go/legal/gc\">apple.com/de/go/legal/gc</a>. Im iTunes Store/App Store gekaufte Inhalte sind ausschließlich zum persönlichen, rechtmäßigen Gebrauch bestimmt. Nicht für deutschsprachige eBooks verwendbar.</p>"
          },
          {
            "languageCode": "en",
            "text": "<p>Valid only on purchases made in Germany from Apple Media Services. Use requires an Apple ID & prior acceptance of license & usage terms. Not redeemable for cash, for resale, for shipments outside Germany & no refunds or exchanges (except as required by law). Data collection and use subject to Apple’s Privacy Policy; see <a href=\"http://apple.com/de/privacy\">apple.com/de/privacy</a>. Neither Apple nor Issuer is responsible for any loss or damage resulting from lost or stolen cards or for use without permission. Void where prohibited. Terms apply; see <a href=\"http://apple.com/de/go/legal/gc\">apple.com/de/go/legal/gc</a>. App Store & iTunes gift cards are issued and managed by Apple Value Services (“Issuer”).</p>"
          }
        ],
        "imageUrls": [
          {
            "ppi": 326,
            "ratioHeight": 5,
            "ratioWidth": 8,
            "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b854769-80w-326ppi.png",
            "width": 80
          }
        ],
        "requirements": {
          "alwaysShowDisclaimer": true,
          "disclaimerInstructions": "",
          "displayInstructions": "",
          "termsAndConditionsInstructions": ""
        }
     }
  ]
}
```

# What's Next?
- [Create a Reward Group](/pages/tutorials/creating-a-reward-group)
