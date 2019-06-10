---
layout: default
title: Quickstart Developer Tutorial
toc: tutorial-processing-a-reward
body_color: body-pink
section_name: Tutorials
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Processing a Reward
A voucer needs to be processed in order for you to allow you customers to redeem the reward value.

For more information on the Rewards Catalog, see the [Rewards Catalog in Core Concepts](/pages/guides/core-concepts/#rewards-catalog).

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Management Bearer Token` derived from a `Tenant API Key`. If you don't have one, see the tutorial [Aquiring a Management Bearer Token](#aquire-management-bearer-token).

# Process the Reward
Using the `Management Bearer Token` we can now process the reward.

#### Request
Replace the `{payout-bearer-token}` placeholder value with the `Payout Bearer Token` value.

Replace the `{reward-id}` placeholder with the id of the reward you want to process.

```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com//v1/payout/reward/{reward-id}" \
  --header "Authorization: Bearer {management-token}"
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