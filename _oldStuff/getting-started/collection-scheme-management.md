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
# Collection Scheme Management
The Collection Scheme Management API functions allows you to setup and configure a Collection Scheme that define the available payment options available to your customers.

## Access Requirements
You will need a Tenant Security Key to perform Collection Scheme Management functions.

## Collection Scheme API functions
The available Collection Scheme functions are:

- Create a Scheme
- Get a list of Schemes
- Get a Scheme
- Update a Scheme
- Delete a Scheme

## Collection Scheme API Documentation
All the Collection Scheme Management API functions are fully documented in the [Collection Scheme API documentation](https://api-docs.imbursepayments.com/#8ad29eec-f6ef-4c78-ad91-d57dba5f3843).

## Models
The following models are used to define a Collection Scheme.

### Scheme Model
```json
{ 
    "id": "",
	"name": "",
	"paymentProviderConfigurations": [],
	"overrides": [
		{
			"isGlobal": "",
			"country": "",
			"paymentProviderConfigurationId": "",
			"paymentMethod": "",
			"enabled": ""
		}
	]
}
```

Property | Type | Mandatory | Description
-|-
`id` | Guid | Yes | The Id for the Scheme.<br/>This is generated for you when<br/>creating a new Scheme.
`name` | string | Yes | A unique name for this scheme.
`paymentProviderConfigurations` | Guid array | Yes | The Id's of the Provider Configurations<br/>this Scheme uses.
`overrides` | Array of [Override models](#override-model) | No | Optional Overrides.

### Override Model
```json
{
    "isGlobal": "",
    "country": "",
    "paymentProviderConfigurationId": "",
    "paymentMethod": "",
    "enabled": ""
}
```

Property | Type | Mandatory | Description
-|-
`isGlobal` | boolean | Yes | `true` for Global Override. `false` for a Country Specific Override.
`country` | string | Yes | A Country Code for a Country Specific Override.<br/>Leave blank for a Global Override.
`paymentProviderConfigurationId` | Guid | Yes | The Id of the Provider Configuration this Override relates to.
`paymentMethod` | string | Yes | The payment method name ie. `visa`, `paypal`, etc.
`enabled` | boolean | Yes | Set to `true` to enable the payment option; set to `false` to disable the payment option.


## Scheme Setup
A Scheme consists of a two main components:

- Products
- Overrides

The diagram below shows these two components that make up a Collection Scheme.

<img src="/assets/images/guides/getting-started/collection-scheme-breakdown.png" style="width:800px;" title="Collection Scheme" alt="Collection Scheme"/>

### Products
The Products component tells the Scheme which Products from your Provider Configurations to use.

##### Adding Products
Each Provider Configuration that you have has one or more Products. ie. A Braintree Configuration has two; Credit Cards and PayPal.
Each of those Products has an **Id** property. Use the Id property to build up your list of `paymentProviderConfigurations` that the Scheme has access to.

Duplicate Product Ids are not permitted in a Scheme.

You can have as many Products in your Scheme as you need.

##### Removing Products
You can remove a Product Id from the `paymentProviderConfigurations` property at anytime.

When removed, it will automatically remove any Overrides associated with the Product.

### Overrides
Add Overrides to your Scheme to explicitly control the payout options available to countries.

There are two types of Override:

Type | Purpose
-|-
Country Specific | Used to to set a payout option for a Specific Country. ie. Germany, GB, etc.
Global | Used to to set a payout option globally. ie. for any country.

An Override can be configured to turn **on** or **off** a particuar payment option, either for a Country Specific or Globally, by setting the `Enabled` property accordingly.

You can add as many Scheme Overrides to your Scheme as necessary to refine the available payment options to meet your requirements.


#### Override Evaluations
Overrides are evaluated in two stages:

1. Global Overides first
2. Country Specific Overrides second

This means you could add a Global Override to disable a payment option and then add another Country Specific Override to enable the same payment option back on.

The sequence you add the Overrides is not important; they can be added in any order.

##### Scenarios
Using Braintree as an example, we've outlined some sample scenarios below where Scheme Overrides could be used.

Scenario | Override Configuration
-|-
I want to offer to my customers **all** payment options<br/>**except** `Discover` cards | Create a Global Override with the following settings:<br/><br/>`isGlobal` set to `true`<br/>`paymentMethod` set to `discover`<br/>`enabled` set to `true`
 I want to offer to my customers **all** payment options<br/>**except** `Discover` cards, which I want to offer in **Germany only** | Create a Global Override with the following settings:<br/><br/>`isGlobal` set to `true`<br/>`paymentMethod` set to `discover`<br/>`enabled` set to `true`<br/><br/>Create a Country Specific Override with the following settings:<br/><br/>`isGlobal` set to `false`<br/>`country` set to `de`<br/>`paymentMethod` set to `discover`<br/>`enabled` set to `true`
