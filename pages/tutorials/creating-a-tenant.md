---
layout: default
title: Quickstart Developer Tutorial
toc: tutorial-creating-a-tenant
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Creating a Tenant
You will need to create and configure at least one Tenant in your account in order to create collection or payout orders and start transacting with your customers.

This tutorial offers step-by-step instructions for create a new Tenant in your Account using the REST API's.

## Prerequisites

You'll need the following:

- Your Account Security Key - This will consist of a Public Key and Private Key and would have been given to your upon registration. If you haven't received it then please contact your adminstrator.
- Familiarity with the [Core Concepts](/pages/guides/core-concepts).
- Familiar with creating an HMAC token using a Security Key.

## Step 1 - Aquire a Management Bearer Token
You will need to generate an HMAC token for the following following request using your `Account Security Key`.


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


## Step 2 - Create a new Tenant
Using the `Management Bearer Token` aquired in Step 1, we can now create a new Tenant.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/management/v1/account/tenants" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
    \"name\": \"Test tenant\",
    \"streetAddress\": \"8 Thames Street\",
    \"extendedStreetAddress\": \"\",
    \"locality\": \"London\",
    \"region\": \"Sussex\",
    \"postCode\": \"SW1 1LA\",
    \"country\": \"UK\"
}"
```

#### Response
The `tenantId` property will be the id of your newly created Tenant.

```json
{
  "tenantId": "88fdb12a-14dc-419c-b74c-422e2c25cfe7",
  "accountId": "53ca62f5-b124-447d-b593-2f7ea4fecdcc",
  "name": "Test tenant",
  "address": {
    "streetAddress": "8 Thames Street",
    "extendedStreetAddress": "",
    "locality": "London",
    "region": "Sussex",
    "postCode": "SW1 1LA",
    "country": "UK"
  }
}
```

## What's Next?

- [Create a Tenant Security Key](/pages/tutorials/creating-a-tenant-security-key)





