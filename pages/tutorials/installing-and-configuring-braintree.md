---
layout: default
title: Installing and configuring Braintree
toc: tutorial-installing-and-configuring-braintree
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Installing and configuring Braintree
This tutorial will take you through installing and configuring the Braintree App.

## Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- An account with [Braintree Payments](https://www.braintreepayments.com target="_blank").
- A valid `Management Bearer Token` derived from a `Tenant Security Key`. If you don't have one, see the tutorial [Aquiring a Management Bearer Token](#aquire-management-bearer-token).

# Installation
Using the `Management Bearer Token` we can now install a new Braintree App.

#### Request
The `MerchantId`, `PrivateKey`, `PublicKey`, and `MerchantAccountId` properties are all specific to the Braintree provider.
These values will need to copied from Braintree's own portal.

The `settings` property is a collection of `setting` objects that determine the destination merchant account to use for a combination of `currency` and `countries`.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/apps/braintree_sdk/install" \
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
The `id` property will be the id of your newly created Provider Configuration.

You will need this Id in any future operations relating to this Provider Configuration.

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
# Getting the App details
Using the `Management Bearer Token` you can get details of your installed App.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/marketplace/installed/braintree_sdk/configuration" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json"
```

#### Response
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