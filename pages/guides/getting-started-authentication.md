---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 12, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started-security-keys
nextsection_label: Security Keys
---
# Authentication
Our `Identity API` is the gateway into accessing the `Management API` and `Transactions API`. It is secured using an `HMAC` token.

HMAC tokens are used to simultaneously verify both the data integrity and the authentication of a message,
therefore guaranteeing that the message has not been tampered with and the sender is in possession of the public and private keys.

**<mark>Important: Any Security Keys you create are very powerful and as such should be kept safe and protected and should never be shared.</mark>**

### Creating an HMAC Token
You must use the **public** and **private** key from an existing `Account Security Key` or `Tenant Security Key` to create an `HMAC` token and, in return, 
we will respond with a `bearer` token. 

The table below shows the three `Identity API` use cases and their corresponding endpoints. Each of these endpoints will return a `bearer` token.

Use Case | Endpoint
-|-
For [Management API](#management-api) functions ie. Accounts, Tenannts, Schemes, Providers, Security Keys, etc. | `POST /identity/v1/hmac/management`
For [Transactions API](#transactions-api) functions for `collecting` | `POST /identity/v1/hmac/collect`
For [Transactions API](#transactions-api) functions for `paying out` | `POST /identity/v1/hmac/payout`

For more information on creating an `HMAC` token, see our [HMAC Examples](https://github.com/Imburse-Payments/hmac-examples)

For more information on creating `bearer` tokens, see our [Identity API Reference](https://api-docs.imbursepayments.com/#f6bf99b9-ca03-47b5-a667-8e1a5a625b0e)

## Accessing the Management API and Transactions API

Once you have create your `bearer` token by using an `Identity API` endpoint, you can then start making API calls to the `Management API` or `Transactions API`.

