---
layout: default
title: Creating a Tenant API Key
toc: tutorial-creating-a-tenant-api-key
body_color: body-pink
section_name: Creating a Tenant API Key
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Creating a Tenant API Key
Each Tenant you create will need at least one Tenant API Key adding in order to further configure the Tenant.

This tutorial offers step-by-step instructions for creating a new Tenant API Key for a specific Tenant.

# Prerequisites
In addition to familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- An Account API Key
- Familiar with creating an HMAC token using an API Key

In addition, you should also have:
- The `Tenant Id` for a Tenant you have previously created.

# Create a new Tenant API Key
Using the `Management Bearer Token` we can create a new Tenant API Key.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

Replace the `{tenantId}` placeholder value with the Tenant `id` for the Tenant you want to create the API Key for.

###### Name
You can give the new Tenant API Key a friendly name by setting the `name` property. If you don't set the name, a name will be generated for you. 

###### Roles
The `roles` value in the request is important as it sets the permissions this API Key can have.

In the example request below, we are setting the roles to `tenant-admin` which will give the Tenant API Key administration access to everything for the Tenant.

**Note: In reality you would only grant the minimum necessary permissions for your Tenant API Keys.**

For more information on the `roles` values, see [Account Management in Getting Started](/pages/getting-started/account-management).

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/tenant/{tenantId}/keys" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
    \"name\": \"Admin Key\",
    \"roles\": [\"tenant-admin\"]
}"
```

#### Response
The `publicKey` and `privateKey` values are generated for you for this new key.

**Note: You will need to store the public and private key values safely as the private key will not be presented again.**

The newly created `publicKey` and `privateKey` values will be required when you need to acquire a Tenant derived Management Bearer Token.

```json
{
  "tenantId": "88fdb12a-14dc-419c-b74c-422e2c25cfe7",
  "accountId": "53ca62f5-b124-447d-b593-2f7ea4fecdcc",
  "name": "Admin Key",
  "publicKey": "a123456b-c12c-123d-1ab4-18bd8c8e88a3",
  "privateKey": "AGHYR1aWYgHgyjhJLkVCd7b8XfAVeA4tuFwCQl3X64Y=",
  "roles": [
    "tenant-admin"
  ]
}
```

# What's Next?
- [Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token)