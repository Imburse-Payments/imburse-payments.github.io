---
layout: default
title: Braintree SDK
toc: tutorial-installing-and-configuring-braintree
body_color: body-primary
section_name: Braintree SDK
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Braintree SDK
This tutorial will take you through installing and configuring the Braintree App.

# Prerequisites
In addition to familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- An account with [Braintree Payments](https://www.braintreepayments.com target="_blank").
- A valid `Management Bearer Token` derived from a `Tenant API Key`.

# Step 1 - Installation
Using the `Management Bearer Token` we can now install a new Braintree App.

#### Request
```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/apps/braintree_sdk/install" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
```

#### Response
The response will be response code `200 - OK`.

# Step 2 - Configuration
After installing, we can now configure the Braintree App.

#### Request
The `MerchantId`, `PrivateKey`, `PublicKey`, and `MerchantAccountId` properties are all specific to the Braintree provider.
These values will need to copied from Braintree's own portal.

The `settings` property is a collection of `setting` objects that determine the destination merchant account to use for a combination of `currency` and `countries`.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/installed/braintree_sdk/configure" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
    \"merchantId\": \"Ov6Y2kneVSyJSpoXBVnAGw0OTDzl0Jkg\",
    \"privateKey\": \"gnD1Yrrw6KLes64J5A3Eb8vs4a8Zj2sA\",
    \"publicKey\": \"NU0uRxhTpvCiF8QdkxFqEgAsOqmpX7i4\",
    \"settings\": [
      {
        \"currency\": \"EUR\",
        \"countries\": [],
        \"merchantAccountId\": \"euro-account\",
        \"description\": \"Euro Account\"
      }
    ]
}"
```

#### Response
The response will be response code `200 - OK`.

```json
{
    "merchantId": "Ov6Y2kneVSyJSpoXBVnAGw0OTDzl0Jkg",
    "privateKey": "gnD1Yrrw6KLes64J5A3Eb8vs4a8Zj2sA",
    "publicKey": "NU0uRxhTpvCiF8QdkxFqEgAsOqmpX7i4",
    "settings": [
      {
        "currency": "EUR",
        "countries": [],
        "merchantAccountId": "euro-account",
        "description": "Euro Account"
      }
    ]
}
```