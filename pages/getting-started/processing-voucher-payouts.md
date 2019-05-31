---
layout: default
title: Getting Started
toc: getting-started-processing-reward-payouts
body_color: body-primary
section_name: Getting Started
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Processing Reward Payouts
Once your customer has chosen a reward you will need to call the process endpoint to complete the redemption of the reward.

## Access Requirements
You will need a Tenant Security Key to process a reward.

## Functions
The available functions are:

- Process Reward Payout

## API Documentation
All the Payment Order API functions are fully documented in the [Transaction API documentation](https://api-docs.imbursepayments.com/?version=latest#09f68806-2b90-433d-9f6d-684cfef1d890).

## Models
The following model is returned when the Process Reward Payout endpoint is executed.

### The Reward Redemption Model
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

## Reward Redemption
The act of processing a reward sees that the reward is paid for. The response will include the appropriate details need to allow your customer to redeem their selected reward.

Mandatory information to provide your customer would be the `claimCode`, the `expirationDate`, and the `redemptionInstructions`, which instuct your customer how to make the claim.
