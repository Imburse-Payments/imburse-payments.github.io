---
layout: default
title: Getting Started
toc: getting-started-voucher-groups
body_color: body-primary
section_name: Voucher Groups
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Voucher Groups
Voucher Groups are named collections of vouchers that you can reference in your Payout Collection Rules. You can add as many Voucher Groups as you need. 

An example of a Voucher Group could be all the country specific Amazon Gift Card vouchers - ie. Amazon.co.uk, Amazon.de, and so forth.

## Access Requirements
You will need a Tenant Security Key to perform Voucher Group functions.

## Functions
The available authentication functions are:

- Add a Voucher Group
- Get all Voucher Groups
- Get a Voucher Group
- Update a Voucher Group
- Delete a Voucher Group

## API Documentation
All the Authentication API functions are fully documented in the [Voucher Group API documentation](https://api-docs.imbursepayments.com/?version=latest#f6bf99b9-ca03-47b5-a667-8e1a5a625b0e).

## Models
The following models are used to define a Voucher Group.

### Voucher Group Model
```json
{
  "voucherGroupId": "",
  "name": "",
  "vouchers": [ "" ]
}

```

Property | Type | Mandatory | Description
-|-
`voucherGroupId` | guid | Yes | Auto generated upon creation.
`name` | string | Yes | A unique name for this Voucher Group.
`vouchers` | Array of strings | Yes | An array of Voucher Ids from the Vouchers Catalog.

### Adding Voucher Groups
When adding a new Voucher Group, the name must be unique. The name is displayed in the Client Portal UI to identify the Voucher Groups added to a Payout Collection Rule.

### Deleting Voucher Groups
A Voucher Group can only be deleted if it is first removed from any Payout Collection Rule it has been added to. The API will respond with a `400 - Bad Request` response if Voucher Group is still being referenced.

