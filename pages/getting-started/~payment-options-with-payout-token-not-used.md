---
layout: default
title: Payment Options
toc: getting-started-payout-payment-options
body_color: body-primary
section_name: Payment Options
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Payment Options
The Payout Options are a list of payment options that you can present to your customers. This could be rewards or cash equivalent payout options.

## Access Requirements
You will need a Tenant API Key to perform Payment Option and related object functions.

For more information on creating a Management Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token/)

## Functions
The available functions are:

- Get Payout Options

## API Documentation
All the Transaction functions are fully documented in the [Schemes API documentation](https://api-docs.imbursepayments.com/?version=latest#09f68806-2b90-433d-9f6d-684cfef1d890).

## Models
The following models are used for Payment Options:

###  Reward Model
```json
{
    "rewardId": "string",
    "rewardName": "string",
    "rewardType": "string",
    "status": "string",
    "countries": [
      "string"
    ],
    "currencyCode": "string",
    "exchangeRateRule": null,
    "isWholeAmountValueRequired": false,
    "valueType": "string",
    "fixedValue": null,
    "maxValue": 0,
    "minValue": 0,
    "credentialTypes": [
      "string"
    ],
    "redemptionInstructions": "string",
    "tags": [ "string" ],
    "app": {
      "appId": "string",
      "name": "string"
    },
    "brand": {
      "brandKey": "string",
      "brandName": "string",
      "status": "string",
      "description": "string",
      "shortDescription": "string",
      "disclaimer": "string",
      "terms": "string",
      "imageUrls": [
      {
        "ppi": 0,
        "url": "string",
        "width": 0
      }
      ],
      "requirements": {
        "alwaysShowDisclaimer": false,
        "disclaimerInstructions": "string",
        "displayInstructions": "string",
        "termsAndConditionsInstructions": "string"
      }
    },
    "createdDate": "string",
    "lastUpdateDate": "string"
}
```

Property | Type |  Description
-|-
`rewardId` | guid | The unique id for this reward.
`rewardName` | string | The name of this reward.
`rewardType` | string | See [Reward Types](#reward-types).
`status` | string | This will always be `active`.
`countries` | string array | An array of Country codes that this reward is supported in.
`currencyCode` | string | The currency code that this reward supports.
`exchangeRateRule` | string | TBD
`isWholeAmountValueRequired` | bool | If `true` the amount must be a whole number. ie 1, 2, 5, 20, etc.<br/>If `false` then decimal values are allowed. ie. 2.50, 5.99, 20.40, etc.
`valueType` | string | Either `VARIABLE_VALUE` or `FIXED_VALUE`.<br/>Variable values will use the `minValue` and `maxValue` properties.<br/>Fixed values will use the `fixedValue` property
`fixedValue` | decimal | For `FIXED_VALUE` value types, this will be the reward amount; otherwise it will be empty.
`maxValue` | decimal | For `VARIABLE_VALUE` value types, this will be the maximum value the reward can payout; other it will be empty.
`minValue` | decimal | For `VARIABLE_VALUE` value types, this will be the minimum value the reward can payout; other it will be empty.
`credentialTypes` | string array | An array of [Credential Types](#credential-types) used by the reward.
`redemptionInstructions` | string | The redemptions instructions that need to be supplied<br/>to your customer for them to redeem the reward.
`tags` | string array | (Not currently implemented)
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
`status` | string | Either `active` or `inactive`.
`description` | string | The description of the brand.
`shortDescription` | string | A short version of the description of the brand.
`disclaimer` | string | The brand's disclaimer.
`terms` | string | The terms of use for the brand.
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


### Brand Requirements Model
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

#### Reward Types
Reward Types are a way of categorizing the usage of a reward. The following reward types are offered:

- Gift Card
- Reward Link
- Donation
- Cash Equivalent
- All

#### Credential Types
Credential Types specify the type(s) of data that a reward will give you. Common ones are `cardNumber` and `expirationDate` but any from the following list can be found in rewards.

Credential Type | Description
-|-
`barcodeNumber` | A numeric or alphanumeric string that provides a human readable version of the information embedded in a barcode. This is typically used in conjunction with the barcodeUrl credential.
`barcodeUrl` | A URL for a barcode image. This is typically used in conjunction with the barcodeNumber credential.
`bypassUrl` | A landing page URL that includes secondary credential information. This removes the need for the recipient to input secondary credentials on the landing page.
`cardCode` | A numeric or alphanumeric string.
`cardNumber` | A numeric or alphanumeric string.
`cvc2` | A 3-digit numeric code used as a secondary credential for financial products.
`eventNumber` | A secondary credential that is numeric or alphanumeric string.
`expirationDate` | A date after which the issued reward will no longer be redeemable.
`pin` | Personal Identification Number. A secondary credential that is a numeric or alphanumeric string.
`redemptionUrl` | A landing page URL where reward credentials and redemption information are typically presented. The landing page may or may not require the recipient to enter one or more secondary credentials to complete the reward redemption process.
`secretCode` | A secondary credential that is numeric or alphanumeric string.

## Payment Options
The payment options that are selected to return in the response come from processing through the scheme rules engine. This is documented in [Payout Schemes - How and when are Rules matched?](/pages/getting-started/payout-schemes/#how-and-when-are-rules-matched).

The resultant list of Reward objects can then be used in your UI to your customers.

Properties of note would be `rewardId`, `redemptionInstructions`, `description`, `imageUrls`, `disclaimer`, `termsAndConditions`, `displayInstructions`.