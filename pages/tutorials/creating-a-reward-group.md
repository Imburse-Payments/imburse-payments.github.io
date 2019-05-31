---
layout: default
title: Creating a Reward Group
toc: tutorial-creating-a-reward-group
body_color: body-pink
section_name: Tutorials
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Creating a Reward Group
If you are want to payout money to your customer then your Tenant will need at least one Payout Scheme setup. Payout Schemes define the rules around which rewards, ie. Amazon, etc., are presented to your customers.

For this tutorial we will create a Payout Scheme for a Tenant using the REST API's. 

For more information on Payout Schemes, see the [Payout Schemes in Core Concepts](/pages/guides/core-concepts/#payout-schemes).

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Management Bearer Token` derived from a `Tenant Security Key`. If you don't have one, see the tutorial [Aquiring a Management Bearer Token](#aquire-management-bearer-token).
- The `rewardId` of one or more Rewards from the Rewards Catalog. If you don't have any, see the tutorial [Searching the Rewards Catalog](/pages/tutorials/searching-the-rewards-catalog) first.

# Creat the Reward Group
Using the `Management Bearer Token` we can create a new Reward Group.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

The `name` property can be anything you like in order for you to identify this Reward Group later.

The `rewards` property is an array of the Reward Ids of the Rewards you want to this Reward Group. At least one Reward Id is required.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/reward-groups" \
  --header "Authorization: Bearer {management-token}" \
  --header "Content-Type: application/json" \
  --data "{
	\"name\": \"\",
	\"rewards\": [ \"\" ]
}"
```

#### Response
The `id` property will be the id of your newly created Reward Group

You will need this `id` value in any future operations relating to this Reward Group.

```json
{
  "id": "",
  "name": "",
  "rewards": []
}
```

# What's Next?
- [Creating a Collection Scheme](/pages/tutorials/creating-a-collection-scheme)
