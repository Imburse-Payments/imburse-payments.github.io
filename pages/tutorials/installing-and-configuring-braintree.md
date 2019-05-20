---
layout: default
title: Installing and Configuring Braintree
toc: tutorial-installing-and-configuring-braintree
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Installing and Configuring Braintree
This tutorial will take you through installing and configuring the Braintree App.

## Prerequisites
You'll need the following:

- An account with [Braintree Payments](https://www.braintreepayments.com target="_blank").
- Familiarity with the [Core Concepts](/pages/guides/core-concepts).
- Familiar with creating an HMAC token using a Security Key.

In addition, you should also have:
- The Tenant Security Key created from the previous step. If you don't have one, see the tutorial [Creating a Tenant Security Key](/pages/tutorials/creating-a-tenant-security-key) first.

## Steps
Follow these steps to create a new Braintree Provider Configuration for one of your Tenants.

### 1 - Aquire a Management Bearer Token
You will need to generate an HMAC token for the following following request using a `Tenant Security Key`; not an `Account Security Key`.

**Note: If you already have a valid `Tenant Security Key` derived `Management Bearer Token` then you can use this rather than creating a new one. Skip to Step 2 if you have one.**


#### Request
Replace the `{hmac-token}` placeholder value with your actual HMAC token.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/identity/v1/hmac/management" \
  --header "Authorization: Hmac {hmac-token}"
```

#### Response
The `Management Bearer Token` will be contained in the `accessToken` property of the response body:

```json
{
    "accessToken": "",
    "expires": ""
}
```


### 2 - Install
Using the `Management Bearer Token` aquired in Step 1, we can now install a new Braintree App.


#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

The `currency` property is a valid `curency-code` for this Provider and determines the currency of the account the funds will go to when you collect.

The `MerchantId`, `PrivateKey`, `PublicKey`, and `MerchantAccountId` properties are all specific to the Braintree provider.
These values will need to copied from Braintree's own portal.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/installed/braintree_sdk/install" \
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
