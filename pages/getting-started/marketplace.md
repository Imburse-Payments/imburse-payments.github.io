---
layout: default
title: Marketplace
toc: getting-started-marketplace
body_color: body-primary
section_name: Marketplace
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Marketplace
The Marketplace API functions allow you to find and install Apps into your Tenant.

## Access Requirements
You will need a Tenant API Key to perform  Marketplace functions.

For more information on creating a Access Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Access Token](/pages/tutorials/get-access-token/)

## Functions
Each App provided by Imburse has a standard set of API endpoints.

Some Apps can have additional App specific endpoints too.

The Apps and their functions are:

#### General Marketplace functions
- Get list of apps in the Marketplace
- Get a specific app in the Marketplace
- Install an App

Please see the API Documentation for complete App API functionality as some Apps have extended functions beyond those listed above.

## API Documentation
The Marketplace documentation is documented in the [Marketplace API Documentation](https://api-docs.imbursepayments.com/?version=latest#b95fd47a-8300-4d58-86f5-0c643cb54482).

## Supported Apps
Imburse currently has Apps for the following providers:

Provider | App Id | Description
-|-
Braintree | BRAINTREE_SDK | Provides credit card and PayPal collection payment options. Operates worldwide.
Tango Card | TANGOCARD_RAAS | Provides reward payout options. Operates worldwide.


# Models
The following models are used in the Marketplace:

### App Model
```json
{
    "developerId": "string",
    "developerName": "string",
    "appId": "string",
    "name": " string",
    "iconUrl": "string",
    "description": "string",
    "tags": [
        "string"
    ],
    "supportedPaymentMethods": [
        {
            "id": "string",
            "name": "string",
            "iconUrl": "string",
            "tags": [
                "string"
            ],
            "isCreditCard": true,
            "supportsDirectSale": true,
            "supportsRecurring": true,
            "providerWarningRequired": false
        }
    ],
    "supportedCountries": [
        "string"
    ],
    "supportedCurrencies": [
        "string"
    ]
}
```

Property | Type | Description
-|-
`developerId` | string | The Id of the developer.
`developerName` | string | The name of the developer.
`appId` | string | The Id of the app.
`name` | string | The name of the app.
`iconUrl` | string | Url to the apps icon.
`description` | string | Description of the app.
`tags` | array | A array of strings that define the apps capabilities or categories.
`supportedPaymentMethods` | array or [Payment Method models](#payment-method-model) | An array of the payment methods this app supports.
`supportedCountries` | array | An array of countries this App supports.
`supportedCurrencies` | array | An array of currencies this App supports.

### Payment Method Model
```json
{
    "id": "string",
    "name": "string",
    "iconUrl": "string",
    "tags": [
        "string"
    ],
    "isCreditCard": true,
    "supportsDirectSale": true,
    "supportsRecurring": true,
    "providerWarningRequired": false
}
```
Property | Type | Description
-|-
`id` | string | The Id of the payment method
`name` | string | The name of the payment method.
`iconUrl` | string | The url to the apps icon.
`tags` | array | A array of strings that define the payment methods capabilities or categories.
`isCreditCard` | bool | `true` if this payment method is a credit card; otherwise `false`.
`supportsDirectSale` | bool | `true` if this payment method supports direct sales; otherwise `false`.
`supportsRecurring` | bool | `true` if this payment method supports recurring payments; otherwise `false`.
`providerWarningRequired` | bool | `true` if this payment method requires you to check with you provider if the payment method is actually activated.<br/>This will be true with American Express with Braintree.

## Installing an App
Call the **install** endpoint below, replacing **`YOUR_APP_ID`** with your actual App Id.

```
POST https://sandbox-api.imburse.net/marketplace/apps/YOUR_APP_ID/install
```

For example, to install the **BRAINTREE_SDK** App, we would call the following endpoint:
```
POST https://sandbox-api.imburse.net/marketplace/apps/braintree_sdk/install
```

**Note: Only one instance of an App can be installed into your Tenant.**


