---
layout: default
title: Searching the Rewards Catalog
toc: tutorial-searching-the-rewards-catalog
body_color: body-pink
section_name: Searching the Rewards Catalog
last_updated: May 31st, 2019
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
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/catalog?appId=TANGOCARD&brandName=&countries=GB&currencies=&amount=5.0" \
  --header "Authorization: Bearer {access-token}"
```

#### Response
The response will contain all the rewards that match the filter parameters. Please note that for brevity in this tutorial we are only showing 1 of the 10+ results that would otherwise return for this request.

The `rewardId` property value is what you will need to save for referencing this rewards later in a Reward Group.

```json
{
  "rewards": [
    {
      "rewardId": "6a30bdaa-483a-2b3f-e28e-0158d0cf07c2",
      "rewardName": "Amazon.de Kupony",
      "brandName": "Amazon.de Poland",
      "appId": "TANGOCARD_RAAS",
      "appName": "Tango Card RaaS",
      "countries": [
        "PL"
      ],
      "currencyCode": "EUR",
      "isWholeAmountValueRequired": false,
      "valueType": "VARIABLE_VALUE",
      "fixedValue": null,
      "maxValue": 5000,
      "minValue": 0.01,
      "imageUrl": "https://dwwvg90koz96l.cloudfront.net/images/brands/b050503-80w-326ppi.png"
    }
  ]
}
```

# What's Next?
- [Create a Reward Group](/pages/tutorials/creating-a-reward-group)