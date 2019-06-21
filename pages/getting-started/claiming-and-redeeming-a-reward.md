---
layout: default
title: Claiming and Redeeming a Reward
toc: getting-started-claiming-and-redeeming-a-reward
body_color: body-primary
section_name: Claiming and Redeeming a Reward
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Claiming and Redeeming a Reward
Once your customer has chosen a reward you will need to claim and then redeem the reward.

## Access Requirements
You will need a Tenant API Key to process a reward.

For more information on creating a Payout Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Payout Bearer Token](/pages/tutorials/get-payout-bearer-token/)

## Functions
The available functions are:

1. Claim a Reward
2. Check if the claim is successful
3. Redeem the Reward

## API Documentation
All the Payment Order API functions are fully documented in the [Transaction API documentation](https://api-docs.imbursepayments.com/?version=latest#09f68806-2b90-433d-9f6d-684cfef1d890).

## Models
The following model is returned when the Redeem Reward endpoint is called.

### Reward Redemption Model
```json
{
  "credentialList": [
    {
      "label": "string",
      "value": "string",
      "rewardType": "string",
      "credentialType": "string"
    }
  ],
  "redemptionInstructions": "string"
}
```

Property | Type | Description
-|-|-
`credentialList` | array of [Credential Models](#credential-models) | An array of Credential models<br/><br/>Can help you present the credentials to your customer.
`redemptionInstructions` | decimal | The redemption instructions to present to your customer.

### Credential Model
```json
{
  "label": "string",
  "value": "string",
  "rewardType": "string",
  "credentialType": "string"
}
```

Property | Type | Description
-|-|-
`label` | string | A friendly string that you can use to `label` the `value` property in a UI.<br/>For example, if the reward was an Amazon gift card then the label might be `Amazon Gift Card claim code:`.
`value` | string | The value of the credentials.<br/><br/>For example, if `label` was `Amazon Gift Card claim code:` then the `value` would be<br/>the claims code for the reward ie. `S5WQ-Z2SP5S-GLB3`.
`rewardType` | string | See *Reward Types* below.
`credentialType` | string | See *Credential Types* below.<br/><br/>Use the Credential Types to determine the best format for your UI.

#### Reward Types
We return the following types of reward credentials. If your integration requires displaying reward data in app or creating custom reward emails you may need to add logic to parse the returned reward data correctly.

**Note - we are continuously expanding our catalog and it is likely that new reward types will arise over time. For this reason we recommend a fallback / default to handle unspecified types as text.

Reward Type | Description | Integration Example
-|-|-
`text` | Plain Text | Wrap in a `<span>` tag.
`url` | URL to a reward landing page | Wrap in a `<a>` tag.
`barcode` | URL for a barcode image | Add an `<img>` tag.
`date` | ISO datetime | Display in localized date format based on locale of reward according to RFC 3339, i.e. `2016-01-01T00:00:00Z`.

#### Credential Types
The following credential types are available.

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
`redemptionUrl` | A landing page URL where reward credentials and redemption information are typically presented. The landing page may or may not require the recipient to enter one or more secondary credentials to `complete the reward redemption process.
`secretCode` | A secondary credential that is numeric or alphanumeric string.


## Steps to Redeem a Reward
The act of claiming and redeeming a reward ensures the reward is paid for and ready for redemption. The redeem response will include the appropriate details needed to allow your customer to redeem their selected reward with the reward provider. ie. Amazon, etc.

The process to redeem a reward is a 3 step procedure.

1. Claim a Reward
2. Check that the Reward has been successfully claimed
3. Redeem the Reward

#### Step 1 - Claim a Reward
Call the `/v1/transaction/reward/claim` endpoint to immediately receive a `TaskId` in the response.

The time taken to claim a reward can vary so we will give you a `TaskId` to check against while we process the claim in the background.

#### Step 2 - Check if claim is successful
Call the `/v1/transaction/check/{task-id}` endpoint, replacing `{task-id}` with the actual Task Id from Step 1.

Expect the following responses:

Response Code | Action to take
-|-
`200 - OK` | Claim still being processed, continue polling this endpoint by repeating Step 2.
`201 - Created` | Reward has been claimed successfully. You can now call the `Redeem a Reward` endpoint - see Step 3.

We would recommend polling every 250ms (1/4 of a second) until the `201 - Created` response is returned.

**Note: There will be variances in processing times depending on your rewards provider.**

#### Step 3 - Redeem the Reward
If you received the `201 - Created` response from Step 2 then the your reward has been successfully claimed!

You can now call the `/v1/transaction/reward/redeem` endpoint to redeem your reward. This will return your a [Reward Redemption Model](#reward-redemption-model).

Use the `credential list` items to help you render a UI for your customer together with  the `redemptionInstructions`, which instuct your customer how to redeem the reward.
