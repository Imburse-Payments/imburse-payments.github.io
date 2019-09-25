---
layout: default
title: Rewards Catalog
toc: getting-started-rewards-catalog
body_color: body-primary
section_name: Rewards Catalog
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Rewards Catalog
The Rewards Catalog is a searchable catalog of the rewards, gift cards, and rewards offered by all Imburse's reward partners - in one place.

The API has calls that allow you to view the items in the Rewards Catalog, along with the details you will need for ordering items and displaying item information.


## Access Requirements
You will need a Tenant API Key to perform Reward Catalog functions.

For more information on creating a Access Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Access Token](/pages/tutorials/get-access-token/)

## Functions
The available authentication functions are:

- Get all Rewards
- Search Catalog

## API Documentation
All the Authentication API functions are fully documented in the [Reward Catalog API documentation](https://api-docs.imbursepayments.com/?version=latest#7fba9a88-e916-43b1-955e-dd2efb7645d6).

### Reward Model
```json
{
  "rewardId": "",
  "rewardName": "",
  "brandName": "",
  "appId": "",
  "appName": "",
  "countries": [
    ""
  ],
  "currencyCode": "",
  "isWholeAmountValueRequired": false,
  "valueType": "",
  "fixedValue": null,
  "maxValue": 0,
  "minValue": 0,
  "imageUrl": ""
}
```

Property | Type |  Description
-|-
`rewardId` | guid | The unique id for this reward.
`rewardName` | string | The name of this reward.
`brandName` | string | The name of the brand.
`appID` | string | The Id of the App that supplies the rewards.
`appName` | string | The name of the App that supplies the rewards.
`countries` | string array | An array of Country codes that this reward is supported in.
`currencyCode` | string | The currency code that this reward supports.
`isWholeAmountValueRequired` | bool | If `true` the amount must be a whole number. ie 1, 2, 5, 20, etc.<br/>If `false` then decimal values are allowed. ie. 2.50, 5.99, 20.40, etc.
`valueType` | string | Either `VARIABLE_VALUE` or `FIXED_VALUE`.<br/>Variable values will use the `minValue` and `maxValue` properties.<br/>Fixed values will use the `fixedValue` property
`fixedValue` | decimal | For `FIXED_VALUE` value types, this will be the reward amount; otherwise it will be empty.
`maxValue` | decimal | For `VARIABLE_VALUE` value types, this will be the maximum value the reward can payout; other it will be empty.
`minValue` | decimal | For `VARIABLE_VALUE` value types, this will be the minimum value the reward can payout; other it will be empty.
`imageUrl` | string | A url to the image for the reward.

#### The Reward Id
The Reward Id is a unique identifier for each reward.

If you're searching the catalog to find rewards to add to a Reward Group, the Reward Id value is what you will need to reference back to the correct reward.

#### The Reward value
Every reward in the catalog has three values associated with it:

- Fixed Value
- Min Value
- Max Value

A reward can be either a Variable value or a Fixed value. The `valueType` property determines this.

- **Fixed Value** - For rewards that are for a fixed value, the `fixedValue` value will be specified. For example a gift card that is only for €20.00.
- **Variable Value** - For rewards that are for variable value, the `minValue` will be the minimum allowed reward value and the `maxValue` will the maximum allowed reward value. For example Amazon Gift Cards can be from €1.00 to €1,000.00.

#### Searching the Catalog
You can search the Rewards Catalog using an App Id, and then optionally with brand name, country, currency, and amount. If you don't provide any optional filtering parameters then your will be returned all the rewards in the catalog that are supplied by the given App.

If you search by amount, we will return any rewards where the amount matches the `fixedValue` *or* where the amount falls within the `minValue` and `maxValue`.

The table below shows some examples and the results when searching for rewards that support a €15.00 value:

\# | Variable or Fixed | Min Value | Max Value | Reward is Valid?
-|-|-|-
1 | Variable | €1.00 | €500.00 | Yes
2 | Variable | €20.00 | €50.00 | No
3 | Fixed | €15.00 | €15.00 | Yes
4 | Fixed | €10.00 | €10.00 | No