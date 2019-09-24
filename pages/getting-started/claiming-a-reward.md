---
layout: default
title: Claiming a Reward
toc: getting-started-claiming-a-reward
body_color: body-primary
section_name: Claiming a Reward
last_updated: September 23rd, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Claiming a Reward
Once you have created an order and instruction, you can then claim the reward.

## Access Requirements
You will need a Tenant API Key to process a reward.

For more information on creating a Management Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token/)

## Functions
The available functions are:

1. Claim a Reward
2. Get the reward

## API Documentation
All the Payment Order API functions are fully documented in the [Transaction API documentation](https://api-docs.imbursepayments.com/?version=latest#b45704ff-b4ee-4123-b93f-0bc5d175b492).

## Models
The following model is returned when the Get a Reward endpoint is called.

### Claim Status Model
```json
{
  "status": "string",
  "data": {
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
}
```

Property | Type | Description
-|-|-
`status` | string | The status of the claim. Possible values are `SETTLING` (default), `SETTLED`, and `FAILED`.
`data` | [Reward Claim Model](#reward-claim-model) object | Value is `null` until the status is `SETTLED`.

### Reward Claim Model

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

**Note - we are continuously expanding our catalog and it is likely that new reward types will arise over time. For this reason we recommend a fallback / default to handle unspecified types as text.**

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


## Steps to Claim a Reward
The act of claiming a reward ensures the reward is paid for and ready for redemption. The redeem response will include the appropriate details needed to allow your customer to redeem their selected reward with the reward provider, ie. Amazon, etc.

The process to claim a reward is a 2 step procedure.

1. Claim a Reward
2. Get the Reward

#### Step 1 - Claim a Reward
Call the `/v1/order-management/{orderRef}/instruction/{instructionRef}/claim-reward` endpoint to immediately receive a link to a `TransactionId` in the response headers.

The time taken to claim a reward can vary so we give you a `TransactionId` to check against while we process the claim in the background.

#### Step 2 - Get the Reward
Call the `/v1/customer-vault/{customerRef}/reward/{financialInstrumentId}/transaction/{transactionId}` endpoint, replacing `{transactionId}` with the actual Transaction Id from Step 1.

Check the `status` property. If the status is still `SETTLING` we need to repeat Step 2. We would recommend polling every second until the `status` changes from `SETTLING`.

**Note: There will be variances in processing times depending on your rewards provider.**

When the `status` changes to either `SETTLED` or `FAILED` the transaction is complete.

When the `status` is `SETTLED`, the `data` property will contain a [Reward Claim Model](#reward-claim-model).

Use the `credential list` items to help you render a UI for your customer together with the `redemptionInstructions`, which instruct your customer on how to redeem the reward.