---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 12, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started-authentication
nextsection_label: Authentication
---
# Overview
As a user of the Imburse platform, you will have access to our three API's:

- [Identity API](#identity-api)
- [Management API](#management-api)
- [Transactions API](#transactions-api)

## Identity API
This API has endpoints that allow you to get a `bearer` token for accessing the `Management API` and the `Transactions API`. 

You will use the public and private key from an `Account Security Key` or a `Tenant Security Key` to create an `HMAC` token and, in return, 
we will respond with a `bearer` token for you to make calls to either the `Management API` or `Transactions API`.

The table below shows the three endpoints and when you would use them:

Task | Endpoint
-|-
[Management API](#management-api) functions | `POST /identity/v1/hmac/management`
[Transactions API](#transactions-api) - Collect Payment functions | `POST /identity/v1/hmac/collect`
[Transactions API](#transactions-api) - Payout functions | `POST /identity/v1/hmac/payout`

For more information on creating a `bearer` tokens, see our [Identity API Reference](https://api-docs.imbursepayments.com/#f6bf99b9-ca03-47b5-a667-8e1a5a625b0e)



## Management API
The Management API gives you access to all your Tenants' configuration. ie Providers, Schemes, etc.

You will require a `Management bearer token` for accessing this API. 

For more information on creating a `Management bearer token`, see our [Identity API Reference](https://api-docs.imbursepayments.com/#f6bf99b9-ca03-47b5-a667-8e1a5a625b0e)


##### Accounts &amp; Tenants
Calls that allow you to create and admister Tenants and their Security Keys. Calls are also available for creating Account level Security keys too.

##### Payment Provider Configurations
Calls that allow you to administer the providers you want to use when collecting money. Payment Provider Configurations enable Imburse to transact on your behalf with your providers. ie. Braintree Payments.

##### Reward Provider Configurations
Calls pertaining to admistering the providers you want to use when paying out money. Reward Provider Configurations enable Imburse to transact on your behalf with your providers. ie. Tangocard.

##### Rewards Catalog
Calls that allow you to easily search our rewards catalog.

##### Schemes
Calls pertaining to configuring Collection and Payout Schemes. Schemes have the flexibility to configure payment methods or rewards on a per currency and / or country basis.

##### Notifications
Calls that allow you to configure webhook notifications. When configured with addresses to your internal systems, you will receive notifications back to your systems when key events have been triggered on your customer orders. ie. when a payment has been settled etc.

##### Whitelabel Settings
Calls pertaining to configuring a Tenants custom stylesheets and logos. These would be used when integrating your customers user journey with the Imburse Whitelabel Application.

##### Payment Collections
Calls that allow you to create and view Orders, and Order Instructions for collecting money.

##### Payment Payouts
Calls that allow you to create and view Orders, and Order Instructions for paying out money.

##### Reference Data
Calls that allow you get miscellanous data such as lists of countries, currencies, etc.



## Transactions API
The Transaction API allows you to get the collect or payout options for a given Instruction, along with endpoints that can process an Payment Instruction.

To access this API you will require either a `Collect API bearer token`, for collections, or a `Payout API bearer token` for payouts.

For more information on creating a `Management bearer token`, see our [Identity API Reference](https://api-docs.imbursepayments.com/#f6bf99b9-ca03-47b5-a667-8e1a5a625b0e)

