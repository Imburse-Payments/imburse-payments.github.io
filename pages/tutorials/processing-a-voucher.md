---
layout: default
title: Quickstart Developer Tutorial
toc: tutorial-processing-a-voucher
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Processing a Voucher
A voucer needs to be processed in order for you to allow you customers to redeem the voucher value.

For more information on the Vouchers Catalog, see the [Vouchers Catalog in Core Concepts](/pages/guides/core-concepts/#vouchers-catalog).

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Management Bearer Token` derived from a `Tenant Security Key`. If you don't have one, see the tutorial [Aquiring a Management Bearer Token](#aquire-management-bearer-token).

# Process the Voucher
Using the `Management Bearer Token` we can now process the voucher.

#### Request
Replace the `{payout-bearer-token}` placeholder value with the `Payout Bearer Token` value.

Replace the `{voucher-id}` placeholder with the id of the voucher you want to process.

```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com//v1/payout/voucher/{voucher-id}" \
  --header "Authorization: Bearer {management-token}"
```

#### Response
The response will contain the voucher claim code, expiration date, and the redemption instructions.

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