---
layout: default
title: Creating a Tango Card Provider Configuration
toc: tutorial-creating-a-tangocard-provider-configuration
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Creating a Tango Card Provider Configuration
Each Tenant will need at least one Provider Configuration setup. Provider Configurations allow Imburse to transact with your Payment Service Providers on your behalf.

For this tutorial we will create a **Tango Card** Provider Configuration for a Tenant using the REST API's. Tango Card is a Provider that Imburse integrates with that supply rewards.

Imburse Integrate with other providers and the process for setting up Provider Configurations for these providers will be the same.

For more information on Provider Configurations, see the [Provider Configurations in Core Concepts](/pages/guides/core-concepts/#provider-configurations).

## Prerequisites

You'll need the following:

- Familiarity with the [Core Concepts](/pages/guides/core-concepts).
- Familiar with creating an HMAC token using a Security Key.

In addition, you should also have:
- The Tenant Security Key created from the previous step. If you don't have one, see the tutorial [Creating a Tenant Security Key](/pages/tutorials/creating-a-tenant-security-key) first.

## Step 1 - Aquire a Management Bearer Token
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


## Step 2 - Create a new Tango Card Provider Configuration
Using the `Management Bearer Token` aquired in Step 1, we can now create a new Tango Card Provider Configuration.


#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

The `name` property can be anything you like in order for you to identify this Provider Configuration later.

The `customerIdentifier` and `accountIdentifier` properties can be left blank, to create a new customer and account.
If your organisation already has an account you want to use with Tango Card then you can specify the customer and accout identifier values here.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/provider-configurations/tangocard-raas" \
  --header "Authorization: Bearer {management-token}" \
  --header "Content-Type: application/json" \
  --data "{
    \"name\": \"My Tangocard Configuration\",
    \"customerIdentifier\": \"tangocard-customer-id\",
    \"accountIdentifier\": \"tangocard-account-id\"
}"
```

#### Response
The `id` property will be the id of your newly created Tango Card Provider Configuration.

You will need this Id in any future operations relating to this Tango Card Provider Configuration.

```json
{
  "providerId": "TANGOCARD",
  "apiProductId": "TANGOCARD_RAAS",
  "id": "b9a4e967-130c-4f16-9e4b-bde5862b6839",
  "name": "My Tangocard Configuration",
  "customerIdentifier": "tangocard-customer-id",
  "accountIdentifier": "tangocard-account-id"
}
```

## What's Next?

- [Create a Collection Scheme](/pages/tutorials/creating-a-collection-scheme)





