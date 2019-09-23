---
layout: default
title: Transactions
toc: getting-started-transactions
body_color: body-primary
section_name: Transactions
last_updated: September 23rd, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Transactions
A Transaction consists of an Order object and one or more Instruction objects. The instruction objects enable Imburse to collect or payout money. The relationship between these objects is explained below.

## Access Requirements
You will need a Tenant API Key to perform Transaction functions.

For more information on creating a Management Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token/)

## Functions
The available Transaction functions are:

- Create an Order
- Get an Order
- Update an Order
- Create a Payment Instruction
- Get a Payment Instruction
- Update a Payment Instruction


## API Documentation
All the Payment Order API functions are fully documented in the [Transaction API documentation](https://api-docs.imbursepayments.com/?version=latest#36db645f-b09a-4ef1-9275-d6011cba3ae1).

## Models
The following models are used to define a Transaction:

### Order Model
```json
{
  "orderRef": "string",
  "instructions": [
    {
      "instructionRef": "string",
      "customerRef": "string",
      "direction": "string",
      "instrumentId": "string",
      "amount": 0,
      "currency": "string",
      "country": "string",
      "settledByDate": "string",
      "schemeId": "string"
    }
  ],
  "metadata": [
    { "key_value_pair_1": "string" }
  ]
}
```

Property | Type | Mandatory | Description
-|-
`orderRef` | string | Yes | A unique reference for an Order.<br/>Usually correlates to your customers order reference<br/>in you own internal systems.
`instructions` | Array of [Instruction models](#instruction-model) | No | Use this parameter to add any instructions to the order.<br/>Instructions can also be added after the order is created by<br/>using additional endpoint calls.
`metadata` | Array of key-value pairs | No | Use this parameter to attach key-value data to the Order.<br/><br/>You can specify up to 50 keys, with key names up to<br/>40 characters long and values up to 500 characters long.<br/><br/>Metadata is useful for storing additional, structured<br/>information on an object.<br/><br/>As an example, you could store your user's full name and <br/> corresponding unique identifier from your system.<br/><br/>The metadata is not used by Imburse. We will simply return<br/>your metadata to you in webhook responses<br/>relating to the Order.<br/><br/>You can then use this to give you added<br/>context to the webhook response.

### Instruction Model
```json
{
  "instructionRef": "string",
  "customerRef": "string",
  "direction": "string",
  "instrumentId": "string",
  "amount": 0,
  "currency": "string",
  "country": "string",
  "settledByDate": "string",
  "schemeId": "string"
}
```

Property | Type | Mandatory | Description
-|-
`instructionRef` | string | Yes | A unique reference for an Instruction.<br/>Usually correlates to your to a month number.
`customerRef` | string | Yes | A reference for your customer
`direction` | string | Yes | Either `CREDIT` or `DEBIT`.
`instrumentId` | string | Yes | The Id of the financial instruction to use for this instruction.
`amount` | decimal | Yes | The amount this Instruction should collect or payout.<br/>Also used to filter available payment options.
`currency` | string | Yes | The currency this Order should be processed in.<br/>Used to filter available payment options.
`country` | string | Yes | The country this Order is related to.<br/>Used to filter available payment options.
`schemeId` | guid | Yes | The `schemeId` this order should use to<br/>filter available payment options.
`settledByDate` | date | No | The date in which a payment is to be settled by,<br/>or if automated, will be taken on.<br/><br/>Date format is `YYYY-MM-DD`.<br/><br/>After this date we would send you missed payment<br/>webhook notifications.
`metadata` | Array of key-value pairs | No | Metadata is useful for storing additional, structured<br/>information on an object.<br/><br/>The metadata is not used by Imburse. We will simply return<br/>your metadata to you in webhook responses<br/>relating to the instruction.<br/><br/>You can then use this to give you added<br/>context to the webhook response.



## Transaction Setup
A Transaction consists of a two components:

- Order
- Instructions

The diagram below shows the two components that make up a Transaction.

<img src="/assets/images/guides/getting-started/transactions-hierarchy.png" style="width:400px;" title="Transactions" alt="Transactions"/>

### Orders
The Order object specifies the order reference, metadata, and also holds any instructions for the order. 

##### Adding Orders
An order must be given a unique order ref.

You can add as many orders into the system as required.

### Instructions
An Order requires one or more Instructions to be set up. These Instructions act as a *payment schedule* and contain the amount to be transacted, the direction of payment (either payout or collection), the currency and country and the scheme id. 

The currency, country, and scheme id will be used to at execution time to filter the appropriate payout or collection payment methods.

##### Adding Instructions
An instruction must be given a unique instruction Ref - unique to the order. This reference can be used in the future to look up or make amendments to an instruction.

An example instruction reference could be the payment month - 01, 02, 03, and so forth.

You can add as many Instructions to an Order as required.

##### Updating Instructions
An Instruction can be updated so long as it hasn't been processed.