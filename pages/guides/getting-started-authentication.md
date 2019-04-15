---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 12, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started-creating-a-tenant
nextsection_label: Creating a Tenant
---
# Authentication
Our `Identity API` is the gateway into accessing the `Management API` and `Transactions API`. It is secured using an `HMAC` token.

HMAC tokens can be used to simultaneously verify both the data integrity and the authentication of a message,
therefore guaranteeing that the message has not been tampered with and the sender is in possession of the public and private keys.

**<mark>Important: Any Security Keys you create, including the primary Account Security Key you were issued when signing up, are very powerful and as such should be kept safe and protected and should never be shared</mark>**

You must use the public and private key from an existing `Account Security Key` or a `Tenant Security Key` to create an `HMAC` token and, in return, 
we will respond with a `bearer` token. 

For more information on creating an `HMAC` token, see our [HMAC Examples](https://github.com/Imburse-Payments/hmac-examples)

The table below shows the three `Identity API` endpoints and their corresponding use cases:

Use Case | Endpoint
-|-
For [Management API](#management-api) functions ie. Schemes, Providers, Security Keys, etc. | `POST /identity/v1/hmac/management`
For [Transactions API](#transactions-api) functions for `collecting` | `POST /identity/v1/hmac/collect`
For [Transactions API](#transactions-api) functions for `paying out` | `POST /identity/v1/hmac/payout`

## Accessing the Management API and Transactions API

Our `Management API` and `Transactions API` are secured by `bearer` token. 
Using the `bearer` token generated from one of the Identity API endpoints above, you can then make calls to either the `Management API` or the `Transactions API`.

**<mark>Note: You cannot access the Management API or Transactions API without first aquiring an appropriate bearer token from the Identity API</mark>**

For more information on creating an `HMAC` token, see our [HMAC Examples](https://github.com/Imburse-Payments/hmac-examples)

For more information on creating `bearer` tokens, see our [Identity API Reference](https://api-docs.imbursepayments.com/#f6bf99b9-ca03-47b5-a667-8e1a5a625b0e)
