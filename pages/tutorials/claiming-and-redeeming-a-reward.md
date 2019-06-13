---
layout: default
title: Quickstart Processing a Transaction API Tutorial
toc: tutorial-claiming-and-redeeming-a-reward
body_color: body-orange
section_name: Tutorials
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Claiming and Redeeming a Reward
A reward needs to be claimed and then redeeming in order for you to allow you customers to redeem the reward value.

For more information on the Rewards Catalog, see the [Claiming a Reward in Getting Started](/pages/getting-started/claiming-and-redeeming-a-reward).

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Payout Bearer Token`


# Steps to Redeem a Reward
The act of claiming and redeeming a reward sees that the reward is paid for. The redeem response will include the appropriate details needed to allow your customer to redeem their selected reward with the reward provider. ie. Amazon, etc.

The process to redeem a reward is a 3 step procedure.

1. Claim a Reward
2. Check that the Reward has been successfully claimed
3. Redeem the Reward

## Step 1 - Claim the Reward
Using the `Payout Bearer Token` we can claim the reward.

#### Request
Replace the `{payout-bearer-token}` placeholder value with the `Payout Bearer Token` value.

Replace the `{reward-id}` placeholder with the id of the reward you want to claim.

```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/transaction/reward/claim" \
  --header "Authorization: Bearer {payout-bearer-token}
  --header "Content-Type: application/json" \
  --data "{
    \"rewardId\": \"{reward-id}\"
  }"
```

#### Response
The response is `201 - Accpted` with the following custom header.

**Note: The `taskId` on the end of the location header is a unique to claiming this reward. Each claim will have a different `taskId`.**

Header Name | Value
-|-
`location` | `https://sandbox-api.imbursepayments.com/v1/transaction/check/{task-id}`

The `{taskId}` placeholder will be a GUID and will look like this: `8f482020-965f-4e9b-afb2-1e6e4336e6da`.

We will use the header value in the next step.

## Step 2 - Check if claim is successful
Repeatedly call the `check` endpoint, returned in the header response from Step 1, until the reward has been succesfully claimed.

#### Request
Replace the `{payout-bearer-token}` placeholder value with the `Payout Bearer Token` value.

Replace the `{check-claim-url}` placeholder with the `location` header value from Step 1.

```curl
curl --location --request GET "{check-claim-url}" \
  --header "Authorization: Bearer {payout-bearer-token}"
```

#### Response
Expect the following responses:

Response Code | Action to take
-|-
`200 - OK` | Claim still being processed, continue polling this endpoint. Repeat Step 2.
`201 - Created` | Reward has been claimed successfully. You can now call the `Redeem a Reward` endpoint - see Step 3.

We would recommend polling every 250ms (1/4 of a second) until the `201 - Created` response is returned.

**Note: There will be variances in processing times depending on your rewards provider.**

## Step 3 - Redeem the Reward
If you received the `201 - Created` response from Step 2 then the your reward has been successfully claimed!

#### Request
Replace the `{payout-bearer-token}` placeholder value with the `Payout Bearer Token` value.

```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/transaction/reward/redeem" \
  --header "Authorization: Bearer {payout-bearer-token}"
```

#### Response
The response will contain the reward claim code, expiration date, and the redemption instructions.

These will need to be displayed or sent to your customer.

```json
{
  "credentials": {
    "Expiration Date": "string",
    "Claim Code": "string"
  },
  "credentialList": [
    {
      "label": "string",
      "value": "string",
      "rewardType": null,
      "credentialType": "string"
    },
    {
      "label": "string",
      "value": "string",
      "rewardType": null,
      "credentialType": "string"
    }
  ],
  "redemptionInstructions": "string"
}
```

Mandatory information to provide your customer would be the `claimCode`, the `expirationDate`, and the `redemptionInstructions`, which instuct your customer how to make the claim.









