---
layout: default
title: App Installation and Configuration Tutorials
toc: tutorial-installing-and-configuring-tangocard
body_color: body-primary
section_name: Tutorials
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Tango Card RaaS

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Management Bearer Token` derived from a `Tenant API Key`. If you don't have one, see the tutorial [Aquiring a Management Bearer Token](#aquire-management-bearer-token).
- If you already have an account with Tango Card you can use your existing `customerIdentifier` and `accountIdentifier` details. Have these handy if you want to use them.

# Step 1 - Installation
Using the `Management Bearer Token` we can now install a new Tango Card App.

#### Request
```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/apps/tangocard-raas/install" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json"
```

#### Response
The response will be response code `200 - OK`.

# Step 2 - Configuration
After installing, we can now configure the Tango Card App.

#### Request
The `customerIdentifier` and `accountIdentifier` properties are specific to the Tango Card. Leave these blank for Imburse to generate these ids for you or, if you already have a Tango Card account, you can put your current `customerIdentifier` and `accountIdentifier` values here instead.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/installed/tangocard-raas/configure" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
    \"customerIdentifier\": \"tangocard-customer-id\",
    \"accountIdentifier\": \"tangocard-account-id\"
}"
```

#### Response
Response code `200 - OK`

```json
{
    "customerIdentifier": "tangocard-customer-id",
    "accountIdentifier": "tangocard-account-id"
}
```