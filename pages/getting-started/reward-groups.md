---
layout: default
title: Reward Groups
toc: getting-started-reward-groups
body_color: body-primary
section_name: Reward Groups
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Reward Groups
Reward Groups are named collections of rewards that you can reference in your Payout Collection Rules. You can add as many Reward Groups as you need.

An example of a Reward Group could be all the country specific Amazon Gift Card rewards - ie. Amazon.co.uk, Amazon.de, and so forth.

## Access Requirements
You will need a Tenant API Key to perform Reward Group functions.

For more information on creating a Management Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token/)

## Functions
The available authentication functions are:

- Add a Reward Group
- Get all Reward Groups
- Get a Reward Group
- Update a Reward Group
- Delete a Reward Group

## API Documentation
All the Authentication API functions are fully documented in the [Reward Group API documentation](https://api-docs.imbursepayments.com/?version=latest#f6bf99b9-ca03-47b5-a667-8e1a5a625b0e).

## Models
The following models are used to define a Reward Group.

### Reward Group Model
```json
{
  "rewardGroupId": "string",
  "name": "string",
  "rewards": [
    {
      "rewardId": "string",
      "enabled": true
    }
  ]
}
```

Property | Type | Mandatory | Description
-|-
`rewardGroupId` | guid | Yes | Auto generated upon creation.
`name` | string | Yes | A unique name for this Reward Group.
`rewards` | Array of [Reward Item Models](#reward-item-model) | Yes | An array of Reward Items representing<br/>the Rewards available in this Reward Group.


### Reward Item Model
```json
{
  "rewardId": "string",
  "enabled": true
}
```

Property | Type | Mandatory | Description
-|-
`rewardId` | string | Yes | A Reward Id from the Rewards Catalog.
`enabled` | boolean | Yes | Toggles if the reward is available in the reward group.

### Adding Reward Groups
When adding a new Reward Group, the name must be unique. The name is displayed in the Client Portal UI to identify the Reward Groups added to a Payout Collection Rule.

### Enabling & Disabling a Reward
An alternative to permantly removing a Reward from the Reward Group is to `disable` it. Use this functionality when particular rewards should not be available to your customers.

Set the `enabled` property of the applicable [Reward Item Model](#reward-item-model) to `false` to disable the reward. Set it back to `true` re-enable it.

### Deleting Reward Groups
A Reward Group can only be deleted if the the Reward Group is not being referenced in any **published draft** of a Payout Scheme. If it is being referenced we will return a `400 - Bad Request` response with error code `REWARD_GROUP_IN_USE`.

