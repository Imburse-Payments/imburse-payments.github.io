---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 20, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started/authentication
nextsection_label: Authentication
---
# Provider Configuration Management
The Provider Configuration Management API functions allows you to specify the connection details and settings for a given provider ie. Braintree, Paydirekt, Tangocard, etc.

Provider Configurations permit Imburse to transact with a Provider on your behalf.

## Access Requirements
You will need a Tenant Security Key to perform Provider Configuration Management functions.

## Provider Configuration functions
Each Provider supported by Imburse has its own API endpoints. The Provider Configuration available functions are:

### Braintree
- Create a Configuration
- Get a Configuration by Id
- Get a Configuration by Public Key
- Update a Configuration

### Paydirekt
- Create a Configuration
- Get a Configuration by Id
- Get a Configuration by Private Key
- Update a Configuration

### Tango Card
- Create a Configuration
- Get a Configuration by Id
- Get the Account Details
- Update a Configuration

### General
- Get a List of Provider Configurations


## Provider Configuration Setup

The diagram below shows the relationship between the components that make up a Provider Configuration. Using an example Braintree Provider Configuration configured with Credit Card and PayPal products and with a couple of Currency Settings.

<img src="/assets/images/guides/getting-started/provider-configuration-breakdown.png" style="width:600px;" title="Provider Configuration Components" alt="Provider Configuration Components"/>

Each Provider Configuration consists of three components in a heirarchy: **Provider Configuration**, **Product Settings**, and **Currency Settings**.

### Provider Configuration Component
Holds properties such as name, the provider, the list of products, and the configurations' unique Id

###### Provider Configuration Id
The Id is a unique identifier for each Provider Configuration. 

If you're getting or updating the Provider Configuration you will use the Id value as the key.

### Product Settings Component
Holds the connection details for a Product.

Some Providers, such as Braintree and Paydirekt support multiple products. ie. Braintree support Credit Cards and PayPal.

###### Product Id
The Id is a unique identifier for each product. 

If you're creating or updating a Scheme, the Id value is what you will need in the Schemes' Provider Configuration property to reference back to the correct Provider Product.

###### Naming your Products
The **Name** property of a Product you are configuring should be human readable. The name will appear in the Client Portal.


###### Enabling and Disabling a Product
An individual Product for a Provider Configuration can be enabled and disabled by setting the **Enabled** property to `true` or `false`.

When a Provider Configuration is Created or Updated, an enabled Product will be validated; a disabled product will not. 

A Product that is referenced in any Scheme cannot be disabled. First remove the Product from the list of Providers in the Scheme, then disable the Product.


### Currency Settings Component
Holds properties such as Currency Code and a list of countries the currency can be used in.

Each Product can have one or more Currency Settings attributed to it.


## Supported Providers
Imburse supports the following Providers:

Provider Name | Description
-|-
Braintree | Provids Credit Card and PayPal collection payment options. Operates in most countries
PayDirekt | Provides PayDireckt collection payment option. Operates in Germany only
Tango Card | Provider rewards / gift card payout options. Operates in most countries


## API Documentation
Different Providers have different requirements. The provider specific API calls are all documented in our [Provider Configurations](https://api-docs.imbursepayments.com/#898cf1d0-5846-4398-82aa-901094e172f9)

For more information on managing Provider Configurations, see our [Provider Configurations API Reference](https://api-docs.imbursepayments.com/#898cf1d0-5846-4398-82aa-901094e172f9)
