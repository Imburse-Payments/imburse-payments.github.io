---
layout: default
title: Getting Started
toc: getting-started-reward-groups
body_color: body-primary
section_name: Reward Groups
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Reward Groups
Reward Groups are named collections of rewards that you can reference in your Payout Collection Rules. You can add as many Reward Groups as you need.

An example of a Reward Group could be all the country specific Amazon Gift Card rewards - ie. Amazon.co.uk, Amazon.de, and so forth.

## Access Requirements
You will need a Tenant Security Key to perform Reward Group functions.

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
  "rewardGroupId": "",
  "name": "",
  "rewards": [ "" ]
}

```

Property | Type | Mandatory | Description
-|-
`rewardGroupId` | guid | Yes | Auto generated upon creation.
`name` | string | Yes | A unique name for this Reward Group.
`rewards` | Array of strings | Yes | An array of Reward Ids from the Rewards Catalog.

### Adding Reward Groups
When adding a new Reward Group, the name must be unique. The name is displayed in the Client Portal UI to identify the Reward Groups added to a Payout Collection Rule.

### Deleting Reward Groups
A Reward Group can only be deleted if it is first removed from any Payout Collection Rule it has been added to. The API will respond with a `400 - Bad Request` response if Reward Group is still being referenced.

