---
layout: default
title: Order Management
toc: getting-started-order-management
body_color: body-primary
section_name: Order Management
last_updated: September 23rd, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Order Management
Managing Orders consists of Order objects and one or more child Instruction objects. The instruction objects enable Imburse to collect or payout money. The relationship between these objects is explained below.

## Access Requirements
You will need a Tenant API Key to perform Order Management functions.

For more information on creating a Management Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token/)

## Functions
The available Order Management functions are:

- Create an Order
- Get an Order
- Update an Order
- Create a Instruction
- Get a Instruction
- Update a Instruction


## API Documentation
All the Order Management API functions are fully documented in the [Order Management API documentation](https://api-docs.imbursepayments.com/?version=latest#8b8ed054-a91c-4295-9eca-e2a0a396ed9a).

## Models
The following models are used to manage Orders and Instructions.

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
      "schemeId": "string",
      "metadata": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    }
  ],
  "metadata": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  },
  "customerDefaults": {
        "customerRef1": {
            "financialInstrumentId": "string",
            "schemeId": "string",
            "metadata": {
                "additionalProp1": "string",
                "additionalProp2": "string",
                "additionalProp3": "string"
            }
        },
        "customerRef2": {
            "financialInstrumentId": "string",
            "schemeId": "string",
            "metadata": {
                "additionalProp1": "string",
                "additionalProp2": "string",
                "additionalProp3": "string"
            }
        }
    }
  }
}
```

Property | Type | Mandatory | Description
-|-
`orderRef` | string | Yes | A unique reference for an Order.<br/>Usually correlates to your customers order reference<br/>in you own internal systems.
`instructions` | Array of [Instruction models](#instruction-model) | No | Use this parameter to add any instructions to the order.<br/>Instructions can also be added after the order is created by<br/>using additional endpoint calls.
`metadata` | Array of key-value pairs | No | Use this parameter to attach key-value data to the Order.<br/><br/>You can specify up to 50 keys, with key names up to<br/>40 characters long and values up to 500 characters long.<br/><br/>Metadata is useful for storing additional, structured<br/>information on an object.<br/><br/>As an example, you could store your user's full name and <br/> corresponding unique identifier from your system.<br/><br/>The metadata is not used by Imburse. We will simply return<br/>your metadata to you in webhook responses<br/>relating to the Order.<br/><br/>You can then use this to give you added<br/>context to the webhook response.
`customerDefaults` | Key values pairs | Allow you set default properties for a given `customerRef` value<br/>for your instructions.<br/><br/>See [Customer Defaults](#customer-defaults) below.

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



## Order Setup
Managing orders consists of managing two components:

- Orders
- Instructions

The diagram below shows the two components that make up a an Order.

<img src="/assets/images/guides/getting-started/transactions-hierarchy.png" style="width:400px;" title="Orders" alt="Orders"/>

### Orders
The Order object specifies the order reference, metadata, and also holds any instructions for the order.

##### Adding Orders
An order must be given a unique order ref.

You can add as many orders into the system as required.

##### Customer Defaults
The `customerDefaults` property allows you to set some default properties for a given `customerRef`. You can set the `financialInstrumentId`, the `schemeId` and any `metadata` once per order.

All instructions that do not have the corresponding property set will inherit from the customer default - matching the `customerRef` property on the order to the `customerRef` property on the instruction.

Using a customer default gives you the following benefits:

- Modify the order once to only impact unprocessed instructions.
- Override the customer defaults for individual instruction. For example if the `financialInstrumentId` needed to be different.

You can also decide not to set any customer defaults and set the properties explicitly on each instruction.

The effect of different settings can be seen in the table below, using the `schemeId` as an example:

Customer Default SchemeId | Instruction SchemeId  | Value the instruction would use
-|-|-
null | 4fca9f45-948a-40cd-80bd-1be8e1a0c040 | 4fca9f45-948a-40cd-80bd-1be8e1a0c040<br/>(from instruction)
4fca9f45-948a-40cd-80bd-1be8e1a0c040 | null | 4fca9f45-948a-40cd-80bd-1be8e1a0c040<br/>(from order)
null | null | null

The `metadata` in the `customerDefaults` works slightly differently. The instruction will inherit the customer default metadata if the `key` does not already exists in the instruction metadata.

### Instructions
An Order requires one or more Instructions to be set up. These Instructions act as a *payment schedule* and contain the amount to be transacted, the direction of payment (either payout or collection), the currency and country and the scheme id.

The currency, country, and scheme id will be used to at execution time to filter the appropriate payout or collection payment methods.

##### Adding Instructions
An instruction must be given a unique instruction Ref - unique to the order. This reference can be used in the future to look up or make amendments to an instruction.

An example instruction reference could be the payment month - 01, 02, 03, and so forth.

You can add as many Instructions to an Order as required.

##### Updating Instructions
An Instruction can be updated so long as it hasn't been processed.