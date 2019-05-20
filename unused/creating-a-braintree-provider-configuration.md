---
layout: default
title: Creating a Braintree Provider Configuration
toc: tutorial-creating-a-braintree-provider-configuration
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Creating a Braintree Provider Configuration
Each Tenant will need at least one Provider Configuration setup. Provider Configurations allow Imburse to transact with your Payment Service Providers on your behalf.

For this tutorial we will create a **Braintree** Provider Configuration for a Tenant using the REST API's. Braintree is a Provider that Imburse integrates with that supply credit card and PayPal payment methods.

Imburse Integrate with other providers and the process for setting up Provider Configurations for these providers will be the same.

For more information on Provider Configurations, see the [Provider Configurations in Core Concepts](/pages/guides/core-concepts/#provider-configurations).

## Prerequisites

You'll need the following:

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


### 2 - Create a new Braintree Provider Configuration
Using the `Management Bearer Token` aquired in Step 1, we can now create a new Braintree Provider Configuration.


#### Request

Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

The `name` property can be anything you like in order for you to identify this Provider Configuration later.

The `currency` property is a valid `curency-code` for this Provider and determines the currency of the account the funds will go to when you collect.

The `MerchantId`, `PrivateKey`, `PublicKey`, and `MerchantAccountId` properties are all specific to the Braintree provider.
These values will need to copied from Braintree's own portal.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/provider-configurations/braintree-sdk" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
    \"name\": \"My Braintree Provider\",
    \"currency\": \"EUR\",
    \"merchantId\": \"Ov6Y2kneVSyJSpoXBVnAGw0OTDzl0Jkg\",
    \"privateKey\": \"gnD1Yrrw6KLes64J5A3Eb8vs4a8Zj2sA\",
    \"publicKey\": \"NU0uRxhTpvCiF8QdkxFqEgAsOqmpX7i4\",
    \"merchantAccountId\": \"euro-account\"
}"
```

#### Response
The `id` property will be the id of your newly created Provider Configuration.

You will need this Id in any future operations relating to this Provider Configuration.

```json
{
  "providerId": "BRAINTREE",
  "apiProductId": "BRAINTRE_SDK",
  "id": "49800e36-c233-4f18-bebe-1abe535df8b2",
  "name": "My Braintree Provider",
  "currencies": ["EUR"],
  "merchantId": "Ov6Y2kneVSyJSpoXBVnAGw0OTDzl0Jkg",
  "privateKey": "gnD1Yrrw6KLes64J5A3Eb8vs4a8Zj2sA",
  "publicKey": "NU0uRxhTpvCiF8QdkxFqEgAsOqmpX7i4",
  "merchantAccountId": "euro-account"
}
```

## What's Next?

- [Create a Collection Scheme](/pages/tutorials/creating-a-collection-scheme)





