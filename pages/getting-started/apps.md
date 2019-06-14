---
layout: default
title: Apps
toc: getting-started-apps
body_color: body-primary
section_name: Apps
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Apps
The Apps API functions allow you to find, configure, and uninstall your tenant apps.

Configuring an App permits Imburse to transact with the provider of the App on your behalf.

## Access Requirements
You will need a Tenant API Key to perform App functions.

## Functions
Each App provided by Imburse has a standard set of API endpoints.

Some Apps can have additional App specific functions. Please see the API Documentation for complete App API functionality.

The functions are:

- Get the list of your installed Apps
- Get an installed App
- Configure an App
- Uninstall an App

## API Documentation
The Apps documentation is document in the the [App API Documentation](https://api-docs.imbursepayments.com/?version=latest#1272cb75-3e30-4ac1-8d5e-c38c4aad1f4d).

## Configuring an App
After an App is installed into you Tenant from the Marketplace, it will need to be configured.

Call the **configuration** endpoint below, replacing **`YOUR_APP_ID`** with your actual App Id.

```
POST https://sandbox-api.imburse.net/marketplace/installed/YOUR_APP_ID/configuration
```

**Note: The configuration properties for an App are all unique. Please see the [App API Documentation](https://api-docs.imbursepayments.com/?version=latest#1272cb75-3e30-4ac1-8d5e-c38c4aad1f4d) for details of how each App should be configured.**

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




