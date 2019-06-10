---
layout: default
title: Getting Started
toc: getting-started-rewards-catalog
body_color: body-primary
section_name: Getting Started
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Rewards Catalog
The Rewards Catalog is a searchable catalog of the rewards, gift cards, and rewards offered by all Imburses' reward partners - in one place.

The API has calls that allow you to view the items in the Rewards Catalog, along with the details you will need for ordering items and displaying item information.


## Access Requirements
You will need a Tenant API Key to perform Reward Catalog functions.

## Functions
The available authentication functions are:

- Get a list of Rewards by Ids
- Search Catalog

## API Documentation
All the Authentication API functions are fully documented in the [Reward Catalog API documentation](https://api-docs.imbursepayments.com/?version=latest#7fba9a88-e916-43b1-955e-dd2efb7645d6).

## Models
The following models are used in the Reward Catalog.

### Reward Catalog Model
```json
{
    "rewardId": "",
    "rewardName": "",
    "rewardType": "",
    "status": "",
    "countries": [
      ""
    ],
    "currencyCode": "",
    "exchangeRateRule": null,
    "isWholeAmountValueRequired": false,
    "valueType": "",
    "fixedValue": null,
    "maxValue": 0,
    "minValue": 0,
    "credentialTypes": [
      ""
    ],
    "redemptionInstructions": "",
    "tags": [],
    "app": {
      "appId": "",
      "name": ""
    },
    "brand": {
      "brandKey": "",
      "brandName": "",
      "status": "",
      "description": "",
      "shortDescription": "",
      "disclaimer": "",
      "terms": "",
      "imageUrls": [
      {
        "ppi": 0,
        "url": "",
        "width": 0
      }
      ],
      "requirements": {
        "alwaysShowDisclaimer": false,
        "disclaimerInstructions": "",
        "displayInstructions": "",
        "termsAndConditionsInstructions": ""
      }
    },
    "createdDate": "",
    "lastUpdateDate": ""
}
```

Property | Type |  Description
-|-
`rewardId` | guid | The unique id for this reward.
`rewardName` | string | The name of this reward.
`rewardType` | string | Either `gift_card`....
`status` | string | Either `active` ....
`countries` | string array | An array of Country codes that this reward is supported in.
`currencyCode` | string | The currency code that this reward supports.
`exchangeRateRule` | string | -
`isWholeAmountValueRequired` | bool | If `true` the amount must be a whole number. ie 1, 2, 5, 20, etc.<br/>If `false` then decimal values are allowed. ie. 2.50, 5.99, 20.40, etc.
`valueType` | string | Either `VARIABLE_VALUE` or `FIXED_VALUE`.<br/>Variable values will use the `minValue` and `maxValue` properties.<br/>Fixed values will use the `fixedValue` property
`credentialTypes` | string array | -
`redemptionInstructions` | string | The redemptions instructions that need to be supplied<br/>to your customer for them to redeem the reward.
`tags` | string array | -
`app` | App object | The App that supplies this reward. ie Tango Card RaaS.
`brand` | [Brand Model](#brand-model) | Details about the brand supplying the reward.
`createdDate` | date / time | Date the reward was added.
`lastUpdateDate` | date / time | Date the reward was last updated.

### Brand Model
```json
{
  "brandKey": "",
  "brandName": "",
  "status": "",
  "description": "",
  "shortDescription": "",
  "disclaimer": "",
  "terms": "",
  "imageUrls": [
    {
      "ppi": 0,
      "url": "",
      "width": 0
    }
  ],
  "requirements": {
    "alwaysShowDisclaimer": false,
    "disclaimerInstructions": "",
    "displayInstructions": "",
    "termsAndConditionsInstructions": ""
  }
}
```

Property | Type |  Description
-|-
`brandKey` | string | The Id of the brand.
`brandName` | string | The name of the brand.
`status` | string | Either `active`...
`description` | string | The description of the brand.
`shortDescription` | string | A short version of the description of the brand.
`disclaimer` | string | The brands disclaimer.
`terms` | string | The brands terms of use.
`imageUrls` | Array of [Image Models](#image-model) | Brand approved images, in various sizes, that you can use in your UI.
`requirements` | [Brand Requirements Model](#brand-requirements-model) | The brand's requirements.

### Image Model
```json
{
  "ppi": 0,
  "url": "",
  "width": 0
}
```

Property | Type |  Description
-|-
`ppi` | integer | The Pixels Per Inch of the image.
`url` | string | Url address for the image.
`width` | integer | The pixel width of the image.


### Requirements Model
```json
{
  "alwaysShowDisclaimer": false,
  "disclaimerInstructions": "",
  "displayInstructions": "",
  "termsAndConditionsInstructions": ""
}
```

Property | Type |  Description
-|-
`alwaysShowDisclaimer` | bool | If `true` the `disclaimerInstructions` should be shown to your customer.
`disclaimerInstructions` | string | The brands disclaimer instructions.
`displayInstructions` | string | Instructions for displaying the brand logos etc.
`termsAndConditionsInstructions`  | string | Terms and conditions for brand usage in HTML format.

#### The Reward Id
The Reward Id is a unique identifier for each reward.

If you're searching the catalog to find rewards to add to a Reward Group, the Reward Id value is what you will need to reference back to the correct reward.

#### The Reward value
Every reward in the catalog has three values associated with it:

- Fixed Value
- Min Value
- Max Value

A reward can be either a Variable value or a Fixed value. The `valueType` property determines this.

- **Fixed Value** - For rewards that are for a fixed value, the `fixedValue` value will be specifed. For example a gift card that is only for €20.00.
- **Variable Value** - For rewards that are for variable value, the `minValue` will be the minimum allowed reward value and the `maxValue` will the maximum allowed reward value. For example Amazon Gift Cards can be from €1.00 to €1,000.00.

#### Searching the Catalog
You can search the Rrewards Catalog by App Id, brand name, country, currency, and amount. If you don't provide any filtering parameters then your will be returned all the items in the catalog.

If you search by amount, we will return any rewards where the amount matches the `fixedValue` *or* where the amount falls within the `minValue` and `maxValue`.

The table below shows some examples and the results when searching for rewards that support a €15.00 value:

\# | Variable or Fixed | Min Value | Max Value | Reward is Valid?
-|-|-|-
1 | Variable | €1.00 | €500.00 | Yes
2 | Variable | €20.00 | €50.00 | No
3 | Fixed | €15.00 | €15.00 | Yes
4 | Fixed | €10.00 | €10.00 | No