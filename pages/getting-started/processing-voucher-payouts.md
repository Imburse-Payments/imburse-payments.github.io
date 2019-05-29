---
layout: default
title: Getting Started
toc: getting-started-processing-voucher-payouts
body_color: body-primary
section_name: Getting Started
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Processing Voucher Payouts
Once your customer has chosen a voucher you will need to call the process endpoint to complete the redemption of the voucher.

## Access Requirements
You will need a Tenant Security Key to perform Voucher processing.

## Functions
The available functions are:

- Process Voucher Payout

## API Documentation
All the Payment Order API functions are fully documented in the [Transaction API documentation](https://api-docs.imbursepayments.com/?version=latest#09f68806-2b90-433d-9f6d-684cfef1d890).

## Models
The following model is returned when the Process Voucher Payout endpoint is executed.

### The Voucher Redemption Model
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

## Voucher Redemption
The act of processing a voucher sees that the voucher is paid for. The response will include the appropriate details need to allow your customer to redeem their selected voucher.

Mandatory information to provide you customer would be the `claimCode`, the `expirationDate`, and the `redemptionInstructions`, which instuct your customer how to make the claim.
