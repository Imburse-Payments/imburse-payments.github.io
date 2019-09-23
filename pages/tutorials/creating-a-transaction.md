---
layout: default
title: Creating a Transaction
toc: tutorial-creating-a-transaction
body_color: body-pink
section_name: Creating a Transaction
last_updated: September 23rd, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Creating a Transaction
To payout money to your customers, you need to generate a Transaction object. A Transaction tells Imburse when and how much to payout to your customer.

For more information on the Transactions, see the [Transactions in Getting Started](/pages/getting-started/transactions).

# Prerequisites
In addition to familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:
- A valid `Management Bearer Token` derived from a `Tenant API Key`

# Steps
The steps involved to create a Transaction are:

1. Create an Order
2. Create an Instruction for the Order

Each Order can have multiple Instructions. In this tutorial we will only create 1 instruction. You can repeat Step 2 for as many instructions you need to add to the order. Just change the Instruction Ref to make sure they are unique per instruction in an order. You can optionally create the instructions during the creation of the order too. For our example we'll seperate the requests.


## Step 1 - Create the Order
Using the `Management Bearer Token` we can create an Order.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

Replace the `orderRef` property value ((REF1 in the example below) with the a suitable value to identity this order. Usually this would be the order reference you have from your internal systems.

The `metadata` property can be filled with arbitrary key-value-pairs that help contextualize the order for you. We will pass the metadata back to you in the webhook notifications for you internal systems to disseminate.


```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/order-management" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
  \"orderRef\": \"REF1\",
  \"instructions\": [],
  \"metadata\": {
    \"someInternalRef1\": \"my-internal-ref\",
    \"someInternalRef2\": \"another-internal-ref\"
  }
}"
```

#### Response
The response will be `201 - Created`

## Step 2 - Create the Instruction
Using the `Management Bearer Token` we can create an Instruction.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

Replace the `{orderRef}` placeholder value with the same Order Ref value you gave in Step 1.

Replace the `instructionRef`, `amount`, and `{settled_by_date}` properties with more relevant data. Date format is `yyy-mm-dd`.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/order-management/{orderRef}/instruction" \
  --header "Authorization: Bearer {{management-bearer-token}}" \
  --header "Content-Type: application/json" \
  --data "{
	\"instructionRef\": \"I01\",
	\"customerRef\": \"C01\",
	\"direction\": \"01\",
	\"instrumentId\": \"a1ab5f63-3f3a-4562-b3fc-98963f66af12\",
	\"amount\": \"210.00\",
    \"currency\": \"EUR\",
    \"country\": \"DE\",
	\"settledByDate\": \"{settled_by_date}\"
    \"scheme\": \"3fa85f64-5717-4562-b3fc-2c963f66afa6\",
    \"metadata\": []
    }"
```

#### Response
The response will be `201 - Created`


```json
{
    "direction": "",
    "status": "",
    "customerRef": "C01",
    "financialInstrument": {
        "financialInstrumentId": "a1ab5f63-3f3a-4562-b3fc-98963f66af12",
        "source": "",
        "canUpdate": true
    },
    "amount": 210,
    "currency": "EUR",
    "country": "DE",
    "settledByDate": "2020-12-31T00:00:00.000Z",
    "Scheme": {
        "schemeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "source": "",
        "canUpdate": true
    },
    "metaData": []
}
```

# What's Next?
- [Get Payout Bearer Token](/pages/tutorials/get-payout-bearer-token)





