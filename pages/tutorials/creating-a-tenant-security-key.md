---
layout: default
title: Creating a Tenant Security Key
toc: tutorial-creating-a-tenant-security-key
body_color: body-pink
section_name: API Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Creating a Tenant Security Key
Each Tenant you create will need at least one Tenant Security Key adding in order to further configure the Tenant.

This tutorial offers step-by-step instructions for creating a new Tenant Security Key for a specific Tenant using the REST API's.

## Prerequisites

You'll need the following:

- Your Account Security Key - This will consist of a Public Key and Private Key and would have been given to your upon registration. If you haven't received it then please contact your adminstrator.
- Familiarity with the [Core Concepts](/pages/guides/core-concepts).
- Familiar with creating an HMAC token with using a Security Key.

In addition, you should also have:
- The `Tenant Id` for a Tenant you have previously created - If you don't have one, see the tutorial [Creating a Tenant](/pages/tutorials/creating-a-tenant) first.


## Steps
Follow these steps to create a new Tenant Security Key for one of your Tenants.

### 1 - Aquire a Management Bearer Token
You will need to generate an HMAC token for the following following request.

**Note: If you already have a a valid `Management Bearer Token` then you can use that rather than creating a new one. Skip to Step 2 if you have one.**


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


### 2 - Create a new Tenant Security Key
Using the `Management Bearer Token` aquired in Step 1, we can now create a new Tenant Security Key.


#### Request

Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

Replace the `{tenantId}` placeholder value with the Tenant `id` for the Tenant you want to create the Security Key for.

###### Roles
The `roles` value in the request is important as it sets the permissions this Security Key can have. 

In the example request below, we are setting the roles to `t.sup.a` which will give the Tenant Security Key administration access to everything for the Tenant.

**Note: In reality you would only grant the minimum necessary permissions for your Tenant Security Keys.**

For more information on the `roles` values, see [What is a Tenant Security Key](/pages/guides/core-concepts/#what-is-a-tenant-security-key) in the Core Concepts documentation.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/management/v1/tenant/{tenantId}/keys" \
  --header "Authorization: Bearer {management-token}" \
  --header "Content-Type: application/json" \
  --data "{
	\"roles\": ["t.sup.a]
}"
```

#### Response
The `id` property will be the id of your newly created Tenant.

You will need this Id in any future operations relating to this Tenant.

```json
{
  "id": "",
  "accountId": "",
  "name": "",
  "address": {
    "streetAddress": "",
    "extendedStreetAddress": "",
    "locality": "",
    "region": "",
    "postCode": "",
    "country": ""
  }
}
```

## What's Next?

- Create Provider Configurations





