---
layout: default
title: Creating a Voucher Group
toc: tutorial-creating-a-voucher-group
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Creating a Voucher Group
If you are want to payout money to your customer then your Tenant will need at least one Payout Scheme setup. Payout Schemes define the rules around which vouchers, ie. Amazon, etc., are presented to your customers.

For this tutorial we will create a Payout Scheme for a Tenant using the REST API's. 

For more information on Payout Schemes, see the [Payout Schemes in Core Concepts](/pages/guides/core-concepts/#payout-schemes).

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Management Bearer Token` derived from a `Tenant Security Key`. If you don't have one, see the tutorial [Aquiring a Management Bearer Token](#aquire-management-bearer-token).
- The `voucherId` of one or more Vouchers from the Vouchers Catalog. If you don't have any, see the tutorial [Searching the Vouchers Catalog](/pages/tutorials/searching-the-vouchers-catalog) first.

# Creat the Voucher Group
Using the `Management Bearer Token` we can create a new Voucher Group.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

The `name` property can be anything you like in order for you to identify this Voucher Group later.

The `vouchers` property is an array of Id of the Vouchers you want to this Voucher Group. At least one Vouchers Id is required.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/voucher-groups" \
  --header "Authorization: Bearer {management-token}" \
  --header "Content-Type: application/json" \
  --data "{
	\"name\": \"\",
	\"vouchers\": [ \"\" ]
}"
```

#### Response
The `id` property will be the id of your newly created Voucher Group

You will need this `id` value in any future operations relating to this Voucher Group.

```json
{
  "id": "",
  "name": "",
  "vouchers": []
}
```

# What's Next?
- [Creating a Collection Scheme](/pages/tutorials/creating-a-collection-scheme)
