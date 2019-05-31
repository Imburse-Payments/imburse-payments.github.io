---
layout: default
title: Getting Started
toc: getting-started-payment-orders
body_color: body-primary
section_name: Getting Started
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Payment Orders
A Payment Order consists of an Order object and one or more Instruction objects. The instruction objects are what Imburse action to collect or payout money. The relationship between these objects is explained below.

## Access Requirements
You will need a Tenant Security Key to perform Payment Instruction and related object functions.

## Functions
The available Collection Scheme functions are:

- Create an Order
- Get an Order
- Get an Orders Audit History
- Create a Payment Instruction
- Update a Payment Instruction
- Get a Payment Instruction
- Get a Payment Instruction Audit History
- Get a Customer
- Get a Customers Audit History

## API Documentation
All the Payment Order API functions are fully documented in the [Payment Orders API documentation](https://api-docs.imbursepayments.com/?version=latest#e431af90-ea5d-468b-838f-64603b97999f).

## Models
The following models are used to define a Payment Orders:

### Payment Order Model
```json
{
  "orderRef": "string",
  "currency": "string",
  "country": "string",
  "scheme": "guid",
  "metadata": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

Property | Type | Mandatory | Description
-|-
`orderRef` | string | Yes | A unique reference for an Order.<br/>Usually correlates to your customers order reference in you own internal systems.
`currency` | string | Yes | The currency this Order should be processed in.<br/>Used to filter available payment options.
`country` | string | Yes | The country this Order is related to.<br/>Used to filter available payment options.
`scheme` | guid | Yes | The `schemeId` this order should use filter available payment options.
`metadata` | Array of key-value pairs | No | Use this parameter to attach key-value data to the Order.<br/><br/>You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long.<br/><br/>Metadata is useful for storing additional, structured information on an object. As an example, you could store your user's full name and corresponding unique identifier from your system. The matadata is not used by Imburse. We will simply return your metadata to you in webhook responses relating to the Order. You can then use this to give you added context to the webhook response.

### Payment Instruction Model
```json
{
  "instructionRef": "string",
  "amount": 0,
  "openDate": "2019-05-29T11:09:38.182Z",
  "dueDate": "2019-05-29T11:09:38.182Z"
}
```

Property | Type | Mandatory | Description
-|-
`instructionRef` | string | Yes | A unique reference for an Instruction.<br/>Usually correlates to your to a month number.
`amount` | decimal | Yes | The amount this Instruction should collect or payout.<br/>Also used to filter available payment options.
`openDate` | date | Yes | The earliest date this payment can be executed.<br/><br/>Date format is `YYYY-MM-DD`.
`dueDate` | date | Yes | The latest date this payment can be executed.<br/><br/>Date format is `YYYY-MM-DD`.<br/><br/>After this date we could send you missed payment webhook notifications.

## Payment Order Setup
A Payment Order consists of a two components:

- Order
- Instruction(s)

The diagram below shows the three components that make up a Payment Order.

<img src="/assets/images/guides/getting-started/collection-scheme-breakdown.png" style="width:800px;" title="Collection Scheme" alt="Collection Scheme"/>

### Orders
The Order object specifies the currency, country, and the scheme id for the order. This information is used at execution time to filter the appropriate payment options. 

##### Adding Orders
An order must be given both a unique Customer Ref and Order Ref. Both of these values are created and owned by you. You can add as many orders for a specific customer as required.

### Instruction
An Order requires one or many Instructions to be set up. These Instructions act as a payment schedule and contain the amount to be collected, the open date and the due date of the payout or collection.

##### Adding Instructions
An instruction must be given a unique instruction Ref - unique to the customer's order). This reference can be used in the future to look up or make amendments to an instruction.

An example instruction reference could be the payment month - 01, 02, 03, and so forth.

##### Updating Instructions
An Instruction can be updated so long as it hasn't been processed.

##### Deleting Instructions
An Instruction can be deleted so long as it hasn't been processed.