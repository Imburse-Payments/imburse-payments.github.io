---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 12, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started-configuring-webhooks
nextsection_label: Configuring Webhooks
---
# Setting up Schemes

Schemes are used to configure which payment options are available to your customers. 

There are two types of Scheme:

Type | Purpose
-|-
Collection | Defines the payment options available to your customers when **collecting money**
Payout | Defines the payment options available to your customers when **paying out money**


# Setting up a Collection Scheme

Collection schemes are used to configure which payment options are available to your customers.

A scheme can be configured to concurrently use `multiple providers`, such as Braintree and PayDirekt, as well as supporting `multiple countries` and `multiple currencies`.

When you create a `Collection Scheme`, you specify the `Provider Configurations` you want the scheme to use. 
The implication of adding `Provider Configurations` to your scheme is that you want **ALL** the payment options that the providers offer to be available to your customers in any country that the providers operate in. 

To create a new `Collection Scheme`, use the following endpoint:

`POST /management/v1/schemes/collect`

Please see the [Collection Scheme API documentation](https://api-docs.imbursepayments.com/#8ad29eec-f6ef-4c78-ad91-d57dba5f3843)

For granular control over available payment options, either globally or country specific, you can configure Scheme Overrides.

### Scheme Overrides

Scheme Overrides give you fine grained, flexible control to tune the payment options for specific countries.

A Scheme Override can be configured to turn **on** or **off** a payment option for a specified country - or even globally!

We've outlined some sample scenarios below and shown how you would configure the Scheme Overrides winthin the API. 
All the scenarios assume we have a Braintree Provider Configuration setup for a scheme. 

Braintree are a provider that offer the following payment options:- `American Express`,`Discover`,`Maestro`,`Mastercard`,and `Visa`. They operate globally.

##### Scenarios

Scenario | Scheme Overrides configuration
-|-
I want to offer to my customers **all** the payment options Braintree support. | (Scheme Overrides are not required)
I want to offer to my customers **all** the payment options Braintree support **except** `Discover` cards | Add a Scheme Override with<br>`isGlobal` set to `true`<br>`paymentMethod` set to `Discover`<br>`enabled` set to `false`
I want to offer to my customers **all** the payment options Braintree support **except** `Discover` cards, which I want to offer in **Germany only**. | Add a Scheme Override with `isGlobal` set to `true`<br>`paymentMethod` set to `Discover`<br>`enabled` set to `false`<br><br>Add another Scheme Override with<br>`country` set to `DE`<br>`paymentMethod` set to `Discover`<br>`enabled` set to `true`

**Note:** You can add as many overrides as necessary to refine the payout options.

# Setting up a Payout Scheme
Payout schemes are used to configure which payment options are available to your customers.

A scheme can be configured to concurrently use `multiple providers`, such as Tangocard, as well as supporting `multiple countries` and `multiple currencies`.

When you create a `Payout Scheme`, you specify the `Provider Configurations` you want the scheme to use, along with the Country Settings. 
The Country Settings configure which rewards are available for the specified country.

To create a new Payout Scheme, use the following endpoint:

`POST /management/v1/schemes/payout`

To search the Reward Catalog to find appropriate rewards to add to your Payout Scheme, use the following endpoint

`GET /v1/catalog?providerId={providerId}&brandName={brandName}&countries={countries}&currencies={currencies}&amount={amount}`

For more information on `Payout Schemes`, see the [Payout Scheme API documentation](https://api-docs.imbursepayments.com/#57551b22-20a1-4c0a-874c-9243c4a9eb10)

For more information on `Rewards Catalog`, see the [Rewards Catalog API documentation](https://api-docs.imbursepayments.com/#7fba9a88-e916-43b1-955e-dd2efb7645d6)
