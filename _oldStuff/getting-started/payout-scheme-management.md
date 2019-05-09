---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 20, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started/authentication
nextsection_label: Authentication
---
# Payout Scheme Management
The Payout Scheme Management API functions allows you to setup and configure a Payout Scheme that define the available payout options available to your customers.

## Access Requirements
You will need a Tenant Security Key to perform Collection Scheme Management functions.

## Payout Scheme API functions
The available Payout Scheme functions are:

- Create a Scheme
- Get a list of Schemes
- Get a Scheme
- Update a Scheme
- Delete a Scheme

## Payout Scheme API Documentation
All the Payout Scheme Management API functions are fully documented in the [Payout Scheme API documentation](https://api-docs.imbursepayments.com/#57551b22-20a1-4c0a-874c-9243c4a9eb10).

## Models
The following models are used to define a Payout Scheme.

### Scheme Model
```json
{
    "id": "",
    "name": "",
    "providers": [],
    "countrySettings": [
        {
            "country": "",
            "defaultCurrency": "",
            "rewardSettings": {
                "rewardIds": []
            }
        }
    ]
}
```

Property | Type | Mandatory | Description
-|-
`id` | Guid | Yes | The Id for the Scheme.<br/>This is generated for you when<br/>creating a new Scheme.
`name` | string | Yes | A unique name for this scheme.
`providers` | Guid array | Yes | The Id's of the Provider Configurations<br/>this Scheme uses.
`countrySettings` | Array of [Country Setting models](#country-setting-model) | Yes | An Array of Country Setting models that specify the<br/>payment options available for specific countries.

### Country Setting Model
```json
 {
    "country": "",
    "defaultCurrency": "",
    "rewardSettings": {
        "rewardIds": []
    }
}
```

Property | Type | Mandatory | Description
-|-
`country` | string | Yes | A Country Code
`defaultCurrency` | string | Yes | The default Currency Code for the Country.<br/>**Not currently used**.
`rewardSettings` | Array of [Reward Setting models](#reward-setting-model) | Yes | An array of Reward Setting models that<br/>define the rewards available for this country.


### Reward Setting Model
```json
 {
    "rewardIds": []
}
```

Property | Type | Mandatory | Description
-|-
`rewardIds` | Array of Guids | Yes | An array of Reward Ids that define the rewards available for this country.<br/>The rewards Id's come from searching the Reward Catalog.


## Scheme Setup
A Scheme consists of a two main components:

- Provider Configurations
- Country Settings

The diagram below shows these two components that make up a Payout Scheme.

<img src="/assets/images/guides/getting-started/payout-scheme-breakdown.png" style="width:800px;" title="Payout Scheme" alt="Payout Scheme"/>

### Providers 
The Providers component tells the Scheme which Providers from your Provider Configurations to use.

##### Adding Providers
Each Provider Configuration you have defined, such as Tangocard, has one or more Products.
Each of those Products has an **Id** property. Use the Id property to build up your list of `providers` that the Scheme has access to.

Duplicate Provider Ids are not permitted in a Scheme.

You can have as many Provider in your Scheme as you need.

##### Removing Providers
You can remove a Provider Id from the `providers` property at anytime.

When removed, it will automatically remove any `rewardIds` associated with the Provider.

### Country Settings
Add Country Settings to your Scheme to control the payout options available to countries.

Duplicate Country Settings with the same Country are not permitted.

You can add as many Country Settings to your Scheme as necessary to define the available payout options to meet your requirements.

### Reward Settings
Add to the `rewardIds` property by searching for applicable rewards from the Rewards Catalog.