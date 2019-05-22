---
layout: default
title: Getting Started
toc: getting-started-marketplace-apps
body_color: body-primary
section_name: Getting Started
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started/authentication
nextsection_label: Authentication
---
# Marketplace Apps
The Marketplace Apps API functions allow you to find, install, and configure Apps into your Tenant.

Installing and configuring an App permits Imburse to transact with the provider of the App on your behalf.

## Access Requirements
You will need a Tenant Security Key to perform App and Marketplace functions.

## Functions
Each App provided by Imburse has a standard set of API endpoints.

Some Apps can have additional App specific endpoints too.

The Apps and their functions are:

#### General Marketplace functions
- Get list of apps in the Marketplace
- Get a specific app in the Marketplace
- Get the list of installed Apps

#### General app functions (available to all apps)
- Install app
- Configure app
- Get an installed app
- Update an installed app

Additional Tango Card App functions:
- Get the account details inc. account balance

## API Documentation
The Marketplace Apps documentation is all document in the the [App Marketplace API Documentation](xxxxxxxxxxxxxxxx).

## Supported Apps
Imburse currently has App integrations with the following providers:

Provider | App Id | Description
-|-
Braintree | BRAINTREE_SDK | Provides credit card and PayPal collection payment options. Operates worldwide.
Tango Card | TANGOCARD_RAAS | Provider rewards / gift card payout options. Operates worldwide.

## Installing an App
Call the **install** endpoint below, replacing **`YOUR_APP_ID`** with your actual App Id.

```
POST https://sandbox-api.imburse.net/marketplace/apps/YOUR_APP_ID/install
```

For example, to install the **BRAINTREE_SDK** App, we would call the following endpoint:
```
POST https://sandbox-api.imburse.net/marketplace/apps/BRAINTREE_SDK/install
```

**Note: Only one instance of an App can be installed into your Tenant.**

## Configuring an App
After an App is installed into you Tenant, it will need to be configured.

Call the **configuration** endpoint below, replacing **`YOUR_APP_ID`** with your actual App Id.

```
POST https://sandbox-api.imburse.net/marketplace/installed/YOUR_APP_ID/configuration
```

**Note: The configuration properties for an App are all unique. Please see the [App Marketplace API Documentation](xxxxxxxxxxxxxxxx) for details of how each App should be configured.**

An example request for the **BRAINTREE_SDK** app would be:

```
POST https://sandbox-api.imburse.net/marketplace/installed/BRAINTREE_SDK/configuration
```

and the corresponding body content:
```json
{
    "publicKey": "string",
    "privateKey": "string",
    "merchantId": "string",
    "settings": [
        {
            "currency": "string",
            "countries": [ "string" ],
            "merchantAccountId": "string",
            "description": "string"
        }
    ]
}
```

## Uninstalling an App
Call the **uninstall** endpoint below, replacing **`YOUR_APP_ID`** with your actual App Id.

```
POST https://sandbox-api.imburse.net/marketplace/installed/YOUR_APP_ID/uninstall
```

For example, to uninstall the **BRAINTREE_SDK** App, we would call the following endpoint:
```
POST https://sandbox-api.imburse.net/marketplace/installed/BRAINTREE_SDK/uninstall
```




