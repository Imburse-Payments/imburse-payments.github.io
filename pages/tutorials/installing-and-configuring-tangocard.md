---
layout: default
title: Installing and configuring Tango Card
toc: tutorial-installing-and-configuring-tangocard
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Installing and configuring Tango Card

## Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Management Bearer Token` derived from a `Tenant Security Key`. If you don't have one, see the tutorial [Aquiring a Management Bearer Token](#aquire-management-bearer-token).
- If you already have an account with Tango Card you can use your existing `customerIdentifier` and `accountIdentifier` details. Have these handy if you want to use them.

# Installation
Using the `Management Bearer Token` we can now install a new Braintree App.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

The `customerIdentifier` and `accountIdentifier` properties are specific to the Tango Card. Leave these blank for Imburse to generate these ids for you or, if you already have a Tango Card account, you can put your current `customerIdentifier` and `accountIdentifier` values here instead.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/tangocard-raas" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
    \"customerIdentifier\": \"tangocard-customer-id\",
    \"accountIdentifier\": \"tangocard-account-id\"
}"
```

#### Response
```json
{
    "customerIdentifier": "tangocard-customer-id",
    "accountIdentifier": "tangocard-account-id"
}
```