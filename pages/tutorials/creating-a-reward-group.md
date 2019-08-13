---
layout: default
title: Creating a Reward Group
toc: tutorial-creating-a-reward-group
body_color: body-pink
section_name: Creating a Reward Group
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Creating a Reward Group
If you are want to payout money to your customer then your Tenant will need at least one Payout Scheme set up. Payout Schemes define the rules around which rewards, ie. Amazon, etc., are presented to your customers.

For more information on Reward Groups, see the [Reward Groups in Getting Started](/pages/getting-started/reward-groups).

# Prerequisites
In addition to familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Management Bearer Token` derived from a `Tenant API Key`
- The `rewardId` of one or more Rewards from the Rewards Catalog.

# Create the Reward Group
Using the `Management Bearer Token` we can create a new Reward Group.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

The `name` property can be anything you like in order for you to identify this Reward Group later.

The `rewards` property is an array of the Reward Ids of the Rewards you want to this Reward Group. At least one Reward Id is required.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/reward-groups" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
	\"name\": \"Amazon Rewards - Germany and France\",
	\"rewards\": [ \"44a7b4a2-35f3-4a99-a189-ec6ea5265be6\", \"96b83d27-cbb4-46e5-aa14-260c09e27494\" ]
}"
```

#### Response
The `id` property will be the id of your newly created Reward Group

You will need this `id` value in any future operations relating to this Reward Group.

```json
{
  "id": "3704a0c2-519a-4905-94eb-ade50f85e360",
  "name": "Amazon Rewards - Germany and France",
  "rewards": [
    "44a7b4a2-35f3-4a99-a189-ec6ea5265be6",
    "96b83d27-cbb4-46e5-aa14-260c09e27494"
  ]
}
```

# What's Next?
- [Creating a Collection Scheme](/pages/tutorials/creating-a-collection-scheme)
