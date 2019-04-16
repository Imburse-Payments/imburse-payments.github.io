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
# Security Keys
The Imburse APIs use two types of bearer token Security Keys:

- Account
- Tenant

It is import to understand the capabilities of each to use the `Management API` and `Transactions API` effectively.


### Account Security Keys

An `Account Security Key` has the following capabilities, depending on the `Roles` you have assigned to it:

- Manage other Account Security Keys. ie. create, get, delete
- Manage Tenants. ie. create, get, update
- Manage Tenant Security Keys. ie. create, get, delete

For configuring a Tenants' configuration ie `Schemes`, `Provider Configurations`, `Whitelabel settings` etc, you must use a `Tenant Security Key`.

**As part of your Developer Starter Pack, you would have been given an Account Security Key.**

**<mark>Important: An Account Security Key is very powerful as it allows the creation of new Tenants and their Security keys. As such they should be kept safe and protected and should never be shared.</mark>**

For more information on managing `Account Security Keys`, see our [Security Key API Reference](https://api-docs.imbursepayments.com/#09e70593-2a88-4c91-a7cb-1b6d3934b979)


### Tenant Security Keys

A `Tenant Security Key` has the following capabilities, depending on the `Roles` you have assigned to it:

- Manage Tenant Security Keys
- Manage Provider Configurations. ie. Braintree, Tangocard, Paydirekt, etc.
- Manage Schemes for Collecting and Payout out
- Manage Whitelabel Settings
- Manage Payment Instructions for Collecting and Paying out

For more information on managing `Tenant Security Keys`, see our [Security Key API Reference](https://api-docs.imbursepayments.com/#b195ab08-dd5a-4639-b975-f9842b87e7b5)
