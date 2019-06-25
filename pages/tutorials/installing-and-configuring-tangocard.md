---
layout: default
title: Tango Card RaaS
toc: tutorial-installing-and-configuring-tangocard
body_color: body-primary
section_name: Tango Card RaaS
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
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


# Step 2 - Create a Tango Card account
After installing, we can now create the Tango Card account.

#### Request
```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/apps/installed/tangocard_raas/account" \
  --header "Authorization: Bearer {management-bearer-token}"
```

#### Response
Response code `200 - OK`

# Step 3 - Top up the Tango Card account
A new account will have a zero credit balance so we need to top this up with funds before it can be used.

Choose an `amount` to satisfy the rewards you want to payout. You can always top it up again.

#### Request
```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/apps/installed/tangocard_raas/deposit-funds" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  -data "{\"amount\":0}"
```

#### Response
Response code `200 - OK`
