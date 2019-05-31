---
layout: default
title: Getting Started
toc: getting-started-marketplace
body_color: body-primary
section_name: Getting Started
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Marketplace
The Marketplace API functions allow you to find and install Apps into your Tenant.

## Access Requirements
You will need a Tenant Security Key to perform  Marketplace functions.

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


