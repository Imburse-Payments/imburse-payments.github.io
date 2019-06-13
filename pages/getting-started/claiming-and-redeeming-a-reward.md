---
layout: default
title: Getting Started
toc: getting-started-claiming-and-redeeming-a-reward
body_color: body-primary
section_name: Getting Started
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Claiming and Redeeming a Reward
Once your customer has chosen a reward you will need to claim and then redeem the reward. 

## Access Requirements
You will need a Tenant API Key to process a reward.

## Functions
The available functions are:

- Claims a Reward
- Check for the task completion
- Redeem a Reward

## API Documentation
All the Payment Order API functions are fully documented in the [Transaction API documentation](https://api-docs.imbursepayments.com/?version=latest#09f68806-2b90-433d-9f6d-684cfef1d890).

## Models
The following model is returned when the Redeem Reward endpoint is called.

### Reward Redemption Model
```json
{
  "credentials": {
    "expirationDate": "",
    "claimCode": ""
  },
  "credentialList": [
    {
      "label": "",
      "value": "",
      "rewardType": null,
      "credentialType": ""
    },
    {
      "label": "",
      "value": "",
      "rewardType": null,
      "credentialType": ""
    }
  ],
  "redemptionInstructions": ""
}
```

Property | Type | Description
-|-|-
`credentials` | array | A Key-Value pair list of properties unique to this reward<br/>The most common are `expirationDate` and `claimCode`.<br/><br/>These are localized to the language of the country the reward is for.
`credentialList` | array of [Credential Models](#credential-models) | An array of Credential models<br/><br/>Can help you present the credentials to your customer.
`redemptionInstructions` | decimal | The redemption instructions to present to your customer.

### Credential Model
```json
{
  "label": "",
  "value": "",
  "rewardType": null,
  "credentialType": ""
}
```

Property | Type | Description
-|-|-
`label` | string | Matches one of the entries in the `credentials` list.
`value` | string | The value of the credentials.<br/><br/>For example, if `label` was `Claim Code` then the `value` will be<br/>the claims code for the reward ie. `S5WQ-Z2SP5S-GLB3`.
`rewardType` | string | See *Reward Types* below.
`credentialType` | string | See *Credential Types* below.

#### Reward Types
We return the following types of reward credentials. If your integration requires displaying reward data in app or creating custom reward emails you may need to add logic to parse the returned reward data correctly.

Reward Type | Description | Integration Example
-|-|-
`text` | Plain Text | Wrap in a `<span>` tag.
`url` | URL to a reward landing page | Wrap in a `<a>` tag.
`barcode` | URL for a barcode image | Add an `<img>` tag.
`date` | ISO datetime | Display in localized date format based on locale of reward according to RFC 3339, i.e. `2016-01-01T00:00:00Z`.

#### Credential Types
The following credential types are available.

## Steps to Redeem a Reward
The act of claiming and redeeming a reward sees that the reward is paid for. The redeem response will include the appropriate details needed to allow your customer to redeem their selected reward with the reward provider. ie. Amazon, etc.

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
`200 - OK` | Claim still being processed, continue polling this endpoint.
`201 - Created` | Reward has been claimed successfully. You can now call the `Redeem a Reward` endpoint - see Step 3.

We would recommend polling every 250ms (1/4 of a second) until the `201 - Created` response is returned.

**Note: There will be variances in processing times depending on your rewards provider.**

#### Step 3 - Redeem the Reward
If you received the `201 - Created` response from Step 2 then the your reward has been successfully claimed! 

You can now call the `/v1/transaction/reward/redeem` endpoint to redeem your reward. This will return your a[Reward Redemption Model](#reward-redemption-model).

Mandatory information to provide your customer would be the `claimCode`, the `expirationDate`, and the `redemptionInstructions`, which instuct your customer how to make the claim.
