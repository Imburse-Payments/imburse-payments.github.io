---
layout: default
title: Getting Started
toc: getting-started-payout-schemes
body_color: body-primary
section_name: Getting Started
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Payout Schemes
The Payout Scheme API functions allows you to setup and configure a Payout Scheme that define the available payout options available to your customers.

## Access Requirements
You will need a Tenant Security Key to perform Payout Scheme Management functions.

## Functions
The available Payout Scheme functions are:

- Get Scheme
- Get list of Schemes
- Get published draft
- Create a Scheme
- Add Draft
- Get a Draft
- Update Draft
- Publish a Draft
- Delete a Scheme

## API Documentation
All the Payout Scheme API functions are fully documented in the [Payout Scheme API documentation](https://api-docs.imbursepayments.com/?version=latest#57551b22-20a1-4c0a-874c-9243c4a9eb10).

## Models
The following models are used to define a Payout Scheme.

### Scheme Model
```json
{
  "schemeId": "string",
  "publishedDraftId": "string",
  "drafts": [
    {
      "draftId": "string",
      "name": "string",
      "code": "string",
      "rules": [
        {
          "priority": 0,
          "currencies": [
            "string"
          ],
          "countries": [
            "string"
          ],
          "highValueInclusive": 0,
          "lowValueInclusive": 0,
          "configurations": [
            {
              "priority": 0,
              "appId": "string",
              "availablePaymentMethods": [
                "string"
              ],
              "excludedPaymentMethods": [
                "string"
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

Property | Type | Mandatory | Description
-|-
`schemeId` | guid | Yes | Auto generated upon creation.
`publishedDraftId` | Guid | No | When a draft is published, the `publishedDraftId` will<br/>be the id of the draft. It will be empty until a draft is published.
`drafts` | Array of [Draft models](#rule-model) | Yes | Drafts for this scheme.


### Draft Model
```json
{
	"draftId": "string",
	"name": "string",
	"code": "string",
	"rules": [
	{
		"priority": 0,
		"currencies": [
		"string"
		],
		"countries": [
		"string"
		],
		"highValueInclusive": 0,
		"lowValueInclusive": 0,
		"configurations": [
		{
			"priority": 0,
			"appId": "string",
			"availablePaymentMethods": [
			"string"
			],
			"excludedPaymentMethods": [
			"string"
			]
		}
		]
	}
	]
}
```

Property | Type | Mandatory | Description
-|-
`draftId` | guid | Yes | Auto generated upon creation.
`name` | string | Yes | A unique name for this draft.
`code` | string | No | An optional code for this draft to uniquely identify later in webhook notifications etc.
`rules` | Array of [Rule models](#rule-model) | Yes | Rules for this scheme


### Rule Model
```json
{
	"priority": 0,
	"currencies": [
	"string"
	],
	"countries": [
	"string"
	],
	"highValueInclusive": 0,
	"lowValueInclusive": 0,
	"configurations": [
	{
		"appId": "string",
		"paymentMethodExclusions": [
		"string"
		]
	}
	]
}
```

Property | Type | Mandatory | Description
-|-
`priority` | integer | Yes | The priority order in which the rules are evaluated.<br/>**Note: Priority 0 is a default that will take<br/>affect when no other rule is matched.**
`currencies` | string | No | An array of `Currency Codes`.<br/>Leave blank to apply this rule to any currency.
`countries` | string | No | An array of `Country Codes`.<br/>Leave blank to apply this rule to any country.
`highValueInclusive` | decimal | Yes | The upper value limit this rule would apply to.<br/>Leave empty for any value.
`lowValueInclusive` | decimal | Yes | The lower value limit this rule would apply to.<br/>Leave empty for any value.
`configurations` | Array of [Configuration models](#configuration-models) | Yes | The configurations for this rule.

### Configuration Model
```json
{
	"appId": "string",
	"paymentMethodExclusions": [
	"string"
	]
}
```

Property | Type | Mandatory | Description
-|-
`appId` | string | Yes | The `AppId` of one of you installed Apps that you<br/>want to include in this rule.
`paymentMethodExclusions` | Array of strings | No | An array of `paymentMethods` that<br/>you want to exclude from the rule.<br/><br/>Leave blank to allow all payment methods<br/>offered by the matching `appId` above.

## Scheme Setup
A Scheme consists of a three main components:

- Drafts
- Rules
- Configurations

The diagram below shows the three components that make up a Payout Scheme.

<img src="/assets/images/guides/getting-started/payout-scheme-breakdown.png" style="width:800px;" title="Payout Scheme" alt="Payout Scheme"/>

### Drafts
The Drafts component allows for multiple draft scheme versions to be added. Only one draft scheme will be published at any one time.

Allowing multiple draft schemes allows you to work on setting a new scheme *before* you publish it.

A scenario where this would be useful is if you have a scheme that is currently live and you want to make a change to it. You can create a new draft scheme, configure it exactly how you want, and then publish it sometime in the future - maybe at an off-peak time or during a weekend for example.

##### Adding Drafts
You can add as many drafts in your scheme as required.

##### Publishing a Draft
Publishing a draft scheme will make the draft scheme live for the scheme. If the scheme is being used in your live platform, the effect is that the new rules and configurations etc. will apply immediately to the next payout that occurs for the scheme.

##### Updating Drafts
You can add update any draft **except** the published Draft.

If you need to update the published draft you should add a new draft that is a mirror of the published draft and then publish the new draft.

##### Deleting Drafts
You can add delete any Draft except the published draft.

### Rules
Add Rules to your draft scheme to explicitly control the payout options available in your scheme.

A Rule defines filters for currencies, countries, and a value range, and then explicitly defines (using the [configuration model](#configuration-model)) which App to use when this Rule is matched.

You can add as many Rules to your draft scheme as necessary in order to refine the available payout options to meet your requirements.

### Configurations
The Configuration components in a Rule describes the Apps, and by extension the payout methods from those Apps, that will be available when the Rule is matched - see [How and when are Rules matched?](#how-and-when-are-rules-matched) below.

The `appId` property should be set to the App Id of an *installed* App in your Tenant - for example `BRAINTREE_SDK`.

All the payment methods from the specified App will be available to your customers if the Rule is matched. If you want to exclude some payment method from your App, then set the `paymentMethodExclusions` property accordingly. For example, to exclude PayPal and Visa, set `paymentMethodExclusions` property to `PAYPAL, VISA`.

Leaving the `paymentMethodExclusions` property blank will not exclude any payment methods.

## How and when are Rules matched?
Rules are only evaluated when requesting the Payment Options for a Payment Instruction - usually when you are looking to present the available payout options in a UI for your customer to select from.

Each Rule has a `priority` property. The `priority` should be set according to the order in which you want the rules evaluated.

The Rules should go from having the narrowest set of filters to the broadest, with 1 being the lowest priority and evaluated first.


**Example 1**

Assume we have a payment instruction request with the following details:
- Country: **DE - Germany**
- Currency: **EUR**
- Payout value: **€120.00**

And we have 2 Voucher Groups configured as follows. **Note that the Vouchers we add are only applicable in certain countries:
Voucher Group name | Vouchers
-|-
Amazon | amazon.co.uk (**UK**), amazon.de (**DE**), amazon.fr (**FR**)
Coffee Shops | Starbucks, Nero, Costa

And a scheme with the following Rules configured:

Priority # | Currencies | Countries | Low Value | High Value | Configured Voucher Groups
-|-|-|-|-|-
1 | **EUR** | (any) | **1** | **20** | Amazon and Cofee Shops
2 | **EUR** | (any) | **21** | (any) | Amazon

When the API request to get the available payout options is executed for the payment instruction, the rules will be evaluated in **Priority** order.

Priority **1** rule is **ignored** as the value filter is outside the range of payout value.

Priority **2** rule is **matched** on currency, country, and value range. The payment options returned would be those configured in the matching rule - the Amazon voucher matching the payment instruction country which in this example is DE - Germany.