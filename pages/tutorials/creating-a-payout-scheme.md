---
layout: default
title: Creating a Payout Scheme
toc: tutorial-creating-a-payout-scheme
body_color: body-pink
section_name: Tutorials
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Creating a Payout Scheme
If you are want to payout money to your customer then your Tenant will need at least one Payout Scheme setup. Payout Schemes define the rules around which rewards, ie. Amazon, etc., are presented to your customers.

For this tutorial we will create a Payout Scheme for a Tenant using the REST API's. 

For more information on Payout Schemes, see the [Payout Schemes in Core Concepts](/pages/guides/core-concepts/#payout-schemes).

## Prerequisites

You'll need the following:

- Familiarity with the [Core Concepts](/pages/guides/core-concepts).
- Familiar with creating an HMAC token using a Security Key.

In addition, you should also have:
- The Tenant Security Key created from the previous step. If you don't have one, see the tutorial [Creating a Tenant Security Key](/pages/tutorials/creating-a-tenant-security-key) first.
- The `rewardId` of one or more Rewards from the Rewards Catalog. If you don't have any, see the tutorial [Searching the Rewards Catalog](/pages/tutorials/searching-the-rewards-catalog) first.

## Steps
Follow these steps to create a new Payout Scheme for one of your Tenants.

### 1 - Aquire a Management Bearer Token
You will need to generate an HMAC token for the following following request using a `Tenant Security Key`; not an `Account Security Key`.

**Note: If you already have a valid `Tenant Security Key` derived `Management Bearer Token` then you can use this rather than creating a new one. Skip to Step 2 if you have one.**


#### Request
Replace the `{hmac-token}` placeholder value with your actual HMAC token.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/identity/v1/hmac/management" \
  --header "Authorization: Hmac {hmac-token}"
```

#### Response
The `Management Bearer Token` will be contained in the `accessToken` property of the response body:

```json
{
    "accessToken": "",
    "expires": ""
}
```


### 2 - Create a new Payout Scheme
Using the `Management Bearer Token` aquired in Step 1, we can now create a new Payout Scheme.


#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

The `name` property can be anything you like in order for you to identify this Collection Scheme later.

The `rewardProviders` property is an array of Id of your Provider Configurations. You created a Tangocard Provider Configuration in the [Creating a Provider Configuration](/pages/tutorials/creating-a-provider-configuration) tutorial.


```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/schemes/payout" \
  --header "Authorization: Bearer {management-token}" \
  --header "Content-Type: application/json" \
  --data "{ 
	\"name\": \"\",
	\"currencies\": [""],
	\"rewardProviders\": [],
	\"rewards\": [
		{
			\"currency\": \"\",
			\"generalRewards\": [],
			\"countryRewards\": [
				{
					\"country\": \"\",
					\"rewards\": []
				}
			]
		}
	]
}"
```

#### Response
The `id` property will be the id of your newly created Payout Scheme.

You will need this `id` value in any future operations relating to this Payout Scheme.

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




