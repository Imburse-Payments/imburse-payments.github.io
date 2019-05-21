---
layout: default
title: Working with Apps
toc: working-with-apps
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Working with Apps
The Imburse Marketplace is where you will find all the Apps Imburse can integrate with and is the starting place for installing Apps into your Tenant.

An App is an integration component that you configure that permits Imburse to communicate with the Apps' provider to carry out some task on your behalf.

The following table illustrates the some of the Apps, with their Provider and purpose.

App Name | App Id | Provider | Purpose
-|-|-|-
Braintree | BRAINTREE_SDK | Braintree Payments | Collect payments using credit cards + PayPal
Tango Card | TANGOCARD_RAAS | Tango Card | Payout rewards

Where the Provider is not Imburse, you may need an existing Account with that Provider. For some Providers, such as Tango Card, Imburse can create new accounts for you.

# Marketplace Functions
The Marketplace has endpoints to perform the following functions:

- [Get list of Apps](#get-list-of-apps)
- [Get an App](#get-an-app)
- [Installing an App](#installing-an-app)
- [Updating your App](#updating-an-app)
- [Uninstalling an App](#uninstalling-an-app)

# Prerequisites
- A valid `Management Bearer Token` derived from a `Tenant Security Key`. If you don't have one, see the tutorial [Aquiring a Management Bearer Token](#aquire-management-bearer-token).


# Get list of Apps
Returns a list of all Apps available in the Marketplace.

#### Request
```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/apps" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" 
}"
```

#### Response
Response Code:

`200 - OK`

```json
[
  {
    "appId": "BRAINTREE_SDK",
    "name": "Braintree"
  },
   {
    "appId": "TANGOCARD_RAAS",
    "name": "Tangocard"
  }
]
```


# Get an App
Returns the details of a specific App Id from the Marketplace.

Use the following endpoint to update any installed App.

`https://sandbox-api.imbursepayments.com/v1/marketplace/apps/{AppId}`

Replace the `{AppId}` placeholder value with the App Id for the App you want to get.
In our example request, we'll be using the Braintree App (AppId `BRAINTREE_SDK`).

#### Request

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/apps/BRAINTREE_SDK" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json"
}"
```

#### Response
Response Code:

`200 - OK`

```json
{
  "appId": "BRAINTREE_SDK",
  "name": "Braintree"
}
```


# Installing an App
Use the following endpoint to install any App from the Marketplace.

`https://sandbox-api.imbursepayments.com/v1/marketplace/apps/{AppId}/install`

Replace the `{AppId}` placeholder value with the App Id for the App you want to install.
In our example request, we'll be using the Braintree App (AppId `BRAINTREE_SDK`).

**Note: The body of the request will be different between Apps.**


#### Request
```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/apps/BRAINTREE_SDK/install" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
    \"merchantId\": \"Ov6Y2kneVSyJSpoXBVnAGw0OTDzl0Jkg\",
    \"privateKey\": \"gnD1Yrrw6KLes64J5A3Eb8vs4a8Zj2sA\",
    \"publicKey\": \"NU0uRxhTpvCiF8QdkxFqEgAsOqmpX7i4\",
    \"settings\": [
      {
        \"currency\": \"EUR\",
        \"countries\": [],
        \"merchantAccountId\": \"euro-account\",
        \"description\": \"Euro Account\"
      }
    ]
}"
```

#### Response
Response Code:

`200 - OK`

```json
{
    "merchantId": "Ov6Y2kneVSyJSpoXBVnAGw0OTDzl0Jkg",
    "privateKey": "gnD1Yrrw6KLes64J5A3Eb8vs4a8Zj2sA",
    "publicKey": "NU0uRxhTpvCiF8QdkxFqEgAsOqmpX7i4",
    "settings": [
      {
        "currency": "EUR",
        "countries": [],
        "merchantAccountId": "euro-account",
        "description": "Euro Account"
      }
    ]
}
```

# Updating an App
Use the following endpoint to update any installed App.

`https://sandbox-api.imbursepayments.com/v1/marketplace/installed/{AppId}/configuration`

Replace the `{AppId}` placeholder value with the App Id for the App you want to update.
In our example request, we'll be using the Braintree App (AppId `BRAINTREE_SDK`).

**Note: The body of the request will be different between Apps.**

#### Request
```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/installed/BRAINTREE_SDK/configuration" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
    \"merchantId\": \"Ov6Y2kneVSyJSpoXBVnAGw0OTDzl0Jkg\",
    \"privateKey\": \"gnD1Yrrw6KLes64J5A3Eb8vs4a8Zj2sA\",
    \"publicKey\": \"NU0uRxhTpvCiF8QdkxFqEgAsOqmpX7i4\",
    \"settings\": [
      {
        \"currency\": \"EUR\",
        \"countries\": [],
        \"merchantAccountId\": \"euro-account\",
        \"description\": \"Euro Account\"
      }
    ]
}"
```

#### Response
Response Code:

`200 - OK`

```json
{
    "merchantId": "Ov6Y2kneVSyJSpoXBVnAGw0OTDzl0Jkg",
    "privateKey": "gnD1Yrrw6KLes64J5A3Eb8vs4a8Zj2sA",
    "publicKey": "NU0uRxhTpvCiF8QdkxFqEgAsOqmpX7i4",
    "settings": [
      {
        "currency": "EUR",
        "countries": [],
        "merchantAccountId": "euro-account",
        "description": "Euro Account"
      }
    ]
}
```

# Uninstalling an App
You can only uninstall an App if it is not being referenced in an existing Collection Scheme or Payout Scheme. Attemping to uninstall a referenced App will fail with an appropriate error mesasge.

Use the following endpoint to update any installed App.

`https://sandbox-api.imbursepayments.com/v1/marketplace/installed/{AppId}/uninstall`

Replace the `{AppId}` placeholder value with the App Id for the App you want to uninstall.
In our example request, we'll be using the Braintree App (AppId `BRAINTREE_SDK`).


#### Request
```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/marketplace/installed/braintree_sdk/uninstall" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json"
```

#### Response
Response Code:

`200 - OK`