---
layout: default
title: Quickstart Developer Tutorial
toc: tutorial-creating-a-transaction
body_color: body-pink
section_name: Tutorials
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Creating a Transaction
To payout money to your customers, you need to generate a Transaction object. A Transaction tells Imburse when and how much to payout to your customer.

For more information on the Transactions, see the [Transactions in Getting Started](/pages/getting-started/transactions).

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:
- A valid `Management Bearer Token` derived from a `Tenant API Key`

# Steps
The steps involved to create a Transaction are:

1. Create an Order
2. Create an Instruction for the Order

Each Order can have multiple Instructions. In this tutorial we will only create 1 instruction. You can repeat Step 2 for as many instructions you need to add to the order. Just change the Instruction Ref to make sure they are unique per instruction.

## Step 1 - Create the Order
Using the `Management Bearer Token` we can create an Order.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.
Replace the `{customerRef}` placeholder value with the a suitable value to indentity this customer. Usually this would be the customer reference you have from your internal systems.
The `metadata` property can be filled with arbitary key-value-pairs that help contextualize the order for you. We will pass the metadata back to you in the webhook notifications for you internal systems to disseminate.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/collect/customer/{customerRef}/order" \
  --header "Authorization: Bearer {management-token}" \
  --header "Content-Type: application/json" \
  --data "{
  \"orderRef\": \"REF1\",
  \"currency\": \"EUR\",
  \"country\": \"DE\",
  \"scheme\": \"string\",
  \"metadata\": {
    \"someInternalRef1\": \"my-internal-ref\",
    \"someInternalRef2\": \"another-internal-ref\"
  }
}"
```

#### Response
The response will be `200 - OK`

## Step 2 - Create the Instruction
Using the `Payout Bearer Token` we can create an Instruction.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

Replace the `{customerRef}` and `{orderRef}` placeholder values with the suiteable value to indentity the customer and order respectively. Usually this would be the customer reference and order reference you have in your internal systems.

Replace the the `{open_date}` and `{due_date}` properties with more relevant dates. Date format is `yyy-mm-dd`. The Due Date needs to be on or after the Open Date.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/collect/customer/{customerRef}/order/{orderRef}/instruction" \
  --header "Authorization: Bearer {{management-token}}" \
  --header "Content-Type: application/json" \
  --data "{
	\"instructionRef\": \"PI01\",
	\"amount\": \"210.00\",
	\"openDate\": \"{open_date}\",
	\"dueDate\": \"{due_date}\"
    }"
```

#### Response
The response will be `200 - OK`

# What's Next?
- [Get Payout Bearer Token](/pages/tutorials/get-payout-bearer-token)





