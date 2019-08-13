---
layout: default
title: Transactions
toc: getting-started-transactions
body_color: body-primary
section_name: Transactions
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Transactions
A Transaction consists of an Order object and one or more Instruction objects. The instruction objects enable Imburse to collect or payout money. The relationship between these objects is explained below.

For more information on creating a Management Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token/)

## Access Requirements
You will need a Tenant API Key to perform Transaction functions.

## Functions
The available Transaction functions are:

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
All the Payment Order API functions are fully documented in the [Transaction API documentation](https://api-docs.imbursepayments.com/?version=latest#36db645f-b09a-4ef1-9275-d6011cba3ae1).

## Models
The following models are used to define a Transaction:

### Order Model
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
`metadata` | Array of key-value pairs | No | Use this parameter to attach key-value data to the Order.<br/><br/>You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long.<br/><br/>Metadata is useful for storing additional, structured information on an object. As an example, you could store your user's full name and corresponding unique identifier from your system. The metadata is not used by Imburse. We will simply return your metadata to you in webhook responses relating to the Order. You can then use this to give you added context to the webhook response.

### Instruction Model
```json
{
  "instructionRef": "string",
  "amount": 0,
  "openDate": "string",
  "dueDate": "string"
}
```

Property | Type | Mandatory | Description
-|-
`instructionRef` | string | Yes | A unique reference for an Instruction.<br/>Usually correlates to your to a month number.
`amount` | decimal | Yes | The amount this Instruction should collect or payout.<br/>Also used to filter available payment options.
`openDate` | date | Yes | The earliest date this payment can be executed.<br/><br/>Date format is `YYYY-MM-DD`.
`dueDate` | date | Yes | The date in which a manual payment is to be settled by, or if automated, will be taken on.<br/><br/>Date format is `YYYY-MM-DD`.<br/><br/>After this date we could send you missed payment webhook notifications.

## Transaction Setup
A Transaction consists of a two components:

- Order
- Instructions

The diagram below shows the two components that make up a Transaction.

<img src="/assets/images/guides/getting-started/transactions-hierarchy.png" style="width:400px;" title="Transactions" alt="Transactions"/>

### Orders
The Order object specifies the currency, country, and the scheme id for the order. This information is used at execution time to filter the appropriate payment options.

##### Adding Orders
An order must be given both a unique Customer Ref and Order Ref. Both of these values are created and owned by you. 

You can add as many orders for a customer as required.

##### Validation Errors
One or many of the following errors may be returned if there were issues validating a new Order request.

Code | Description
- | - 
`CUSTOMER_REF_IS_REQUIRED` | Reference is required.
`CUSTOMER_REF_LENGTH_OUT_OF_RANGE` | Reference has a maximum of 50 characters.
`CUSTOMER_REF_CONTAINS_INVALID_CHARACTERS` | Reference can only contain the following characters `a-z0-9-_.`.
`ORDER_REF_IS_REQUIRED` | Reference is required.
`ORDER_REF_LENGTH_OUT_OF_RANGE` | Reference has a maximum of 50 characters.
`ORDER_REF_CONTAINS_INVALID_CHARACTERS` | Reference can only contain the following characters `a-z0-9-_.`.
`CURRENCY_IS_REQUIRED` | Currency is required.
`CURRENCY_LENGTH_OUT_OF_RANGE` | Reference has a maximum of 3 characters.
`COUNTRY_IS_REQUIRED` | Reference can only contain the following characters `a-z0-9-_.`.
`COUNTRY_LENGTH_OUT_OF_RANGE` | Reference has a maximum of 2 characters.
`SCHEME_IS_REQUIRED` | Scheme is required.
`SCHEME_FORMAT_NOT_RECOGNISED` | Scheme was not recognised as a valid `GUID`.

### Instruction
An Order requires one or more Instructions to be set up. These Instructions act as a *payment schedule* and contain the amount to be paid out or collected, the open date, and the due date of the payout or collection.

##### Adding Instructions
An instruction must be given a unique instruction Ref - unique to the customer's order. This reference can be used in the future to look up or make amendments to an instruction.

An example instruction reference could be the payment month - 01, 02, 03, and so forth.

You can add as many Instructions to an Order as required.

##### Validation errors
One or many of the following errors may be returned if there were issues validating a new Instruction request.

Code | Description
- | - 
`CUSTOMER_REF_IS_REQUIRED` | Reference is required.
`CUSTOMER_REF_LENGTH_OUT_OF_RANGE` | Reference has a maximum of 50 characters.
`CUSTOMER_REF_CONTAINS_INVALID_CHARACTERS` | Reference can only contain the following characters `a-z0-9-_.`.
`ORDER_REF_IS_REQUIRED` | Reference is required.
`ORDER_REF_LENGTH_OUT_OF_RANGE` | Reference has a maximum of 50 characters.
`ORDER_REF_CONTAINS_INVALID_CHARACTERS` | Reference can only contain the following characters `a-z0-9-_.`.
`INSTRUCTION_REF_IS_REQUIRED` | Reference is required.
`INSTRUCTION_REF_LENGTH_OUT_OF_RANGE` | Reference has a maximum of 50 characters.
`INSTRUCTION_REF_CONTAINS_INVALID_CHARACTERS` | Reference can only contain the following characters `a-z0-9-_.`.
`AMOUNT_IS_REQUIRED` | Amount is required.
`AMOUNT_FORMAT_NOT_RECOGNISED` | Amount must be in decimal form.
`AMOUNT_OUT_OF_RANGE` | Amount must be greater than zero.
`OPEN_DATE_IS_REQUIRED` | Open Date is required.
`OPEN_DATE_FORMAT_NOT_RECOGNISED` | Due Date could not be read as a valid date.
`DUE_DATE_IS_REQUIRED` | Due Date is required.
`DUE_DATE_FORMAT_NOT_RECOGNISED` | Due Date could not be read as a valid date.

##### Updating Instructions
An Instruction can be updated so long as it hasn't been processed.

##### Deleting Instructions
An Instruction can be deleted so long as it hasn't been processed.