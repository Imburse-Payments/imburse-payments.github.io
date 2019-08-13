---
layout: default
title: Creating a Tenant
toc: tutorial-creating-a-tenant
body_color: body-pink
section_name: Creating a Tenant
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Creating a Tenant
You will need to create and configure at least one Tenant in your account in order to create collection or payout orders and start transacting with your customers.

This tutorial offers step-by-step instructions for create a new Tenant in your Account.

# Prerequisites
In addition to familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- An Account API Key
- Familiar with creating an HMAC token using an API Key

# Create a new Tenant
Using the `Management Bearer Token` acquired in Step 1, we can now create a new Tenant.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/account/tenants" \
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

# What's Next?

- [Create a Tenant API Key](/pages/tutorials/creating-a-tenant-api-key)