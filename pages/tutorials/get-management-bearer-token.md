---
layout: default
title: Get a Management Bearer Token
toc: get-management-bearer-token
body_color: body-pink
section_name: Get a Management Bearer Token
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Get a Management Bearer Token
This tutorial will take you through getting a Mangement Bearer Token using a Tenant API Key.

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A `Tenant API Key`. See the tutorial [Creating a Tenant API Key](/pages/tutorials/creating-a-tenant-api-key) here if you need to create one.
- Familiar with creating an HMAC token using an API Key.

# Get Management Bearer Token
You will need to generate an HMAC token for the following following request using a `Tenant API Key`.

**Note: If you already have a valid `Management Bearer Token` derived from a `Tenant API Key` then you can skip this tutorial. Use your existing `Management Bearer Token` rather than creating a new one. You don't have to create a new `Management Bearer Token` for each request.**

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

# What's Next?
- [Installing an Configuring an App](/pages/tutorials/installing-and-configuring-an-app)
