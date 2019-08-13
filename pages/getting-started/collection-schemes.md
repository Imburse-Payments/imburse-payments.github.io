---
layout: default
title: Collection Schemes
toc: getting-started-collection-schemes
body_color: body-primary
section_name: Collection Schemes
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Collection Schemes
The Collection Scheme API functions allows you to setup and configure a Collection Scheme that define the available payment options available to your customers.

## Access Requirements
You will need a Tenant API Key to perform Collection Scheme Management functions.

For more information on creating a Management Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token/)

## Functions
The available Collection Scheme functions are:

- Get Scheme
- Get list of Schemes
- Get published draft
- Create a Scheme
- Add Draft
- Get a Draft
- Update Draft
- Publish a Draft
- Delete a Draft
- Delete a Scheme

## API Documentation
All the Collection Scheme API functions are fully documented in the [Collection Scheme API documentation](https://api-docs.imbursepayments.com/#8ad29eec-f6ef-4c78-ad91-d57dba5f3843).

## Models
The following models are used to define a Collection Scheme.

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
          "currencies": [
            "string"
          ],
          "countries": [
            "string"
          ],
          "highValueInclusive": 0,
          "lowValueInclusive": 0,
          "apps": [
            {
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
      ],
	  "lastModified": ""
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
		"currencies": [
		  "string"
		],
		"countries": [
		  "string"
		],
		"highValueInclusive": 0,
		"lowValueInclusive": 0,
		"apps": [
		  {
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
	],
	"lastModified": ""
}
```

Property | Type | Mandatory | Description
-|-
`draftId` | guid | Yes | Auto generated upon creation.
`name` | string | Yes | A unique name for this draft.
`code` | string | No | An optional code for this draft to uniquely<br/>identify later in webhook notifications etc.
`rules` | Array of [Rule models](#rule-model) | Yes | Rules for this scheme.
`lastModified` | datetime | - | The date and time the draft was last modified.

### Rule Model
```json
{
	"currencies": [
	"string"
	],
	"countries": [
	"string"
	],
	"highValueInclusive": 0,
	"lowValueInclusive": 0,
	"apps": [
	  {
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
```

Property | Type | Mandatory | Description
-|-
`currencies` | string | No | An array of `Currency Codes`.<br/>Leave blank to apply this rule to any currency.
`countries` | string | No | An array of `Country Codes`.<br/>Leave blank to apply this rule to any country.
`highValueInclusive` | decimal | Yes | The upper value limit this rule would apply to.<br/>Leave empty for any value.<br/>If an explicit value is specified it must be greater than or equal to `lowValueInclusive`.
`lowValueInclusive` | decimal | Yes | The lower value limit this rule would apply to.<br/>Leave empty for any value.<br/>If an explicit value is specified it must be greater than 0 and less than or equal to `highValueInclusive`.
`apps` | Array of [App models](#app-model) | Yes | The apps configured for this rule.

### App Model
```json
{
	"appId": "string",
	"availablePaymentMethods": [
		"string"
	],
	"excludedPaymentMethods": [
		"string"
	]
}
```

Property | Type | Mandatory | Description
-|-
`appId` | string | Yes | The `AppId` of one of you installed Apps that you<br/>want to include in this rule.
`availablePaymentMethods` | Array of strings | No | An array of `paymentMethods` that are available from the<br/>matching `appId` above.
`excludedPaymentMethods` | Array of strings | No | An array of `paymentMethods` that<br/>you want to exclude from the rule.

## Scheme Setup
A Scheme consists of a three main components:

- Drafts
- Rules
- Apps

The diagram below shows the three components that make up a Collection Scheme.

<img src="/assets/images/guides/getting-started/collect-scheme-hierarchy.png" style="width:500px;" title="Collection Scheme" alt="Collection Scheme"/>

### Drafts
The Drafts component allows for multiple draft scheme versions to be added. Only one draft scheme will be published at any one time.

Allowing multiple draft schemes allows you to work on setting a new scheme *before* you publish it.

A scenario where this would be useful is if you have a scheme that is currently live and you want to make a change to it. You can create a new draft scheme, configure it exactly how you want, and then publish it sometime in the future - maybe at an off-peak time or during a weekend for example.

##### Adding Drafts
You can add as many drafts in your scheme as required.

##### Publishing a Draft
Publishing a draft scheme will make the draft scheme live for the scheme. If the scheme is being used in your live platform, the effect is that the new rules and apps etc. will apply immediately to the next collection that occurs for the scheme.

##### Updating Drafts
You can add update any draft **except** the published Draft.

If you need to update the published draft you should add a new draft that is a mirror of the published draft and then publish the new draft.

##### Deleting Drafts
You can add delete any Draft except the published draft.

### Rules
Add Rules to your draft scheme to explicitly control the collection options available in your scheme.

A Rule defines filters for currencies, countries, and a value range, and then explicitly defines (using the [App Model](#app-model)) which App to use when this Rule is matched.

You can add as many Rules to your draft scheme as necessary in order to refine the available collection options to meet your requirements.

### Apps
The App components in a Rule describes the Apps, and by extension the payment methods, that will be available when the Rule is matched - see [How and when are Rules matched?](#how-and-when-are-rules-matched) below.

The `appId` property should be set to the App Id of an **installed** App in your Tenant - for example `BRAINTREE_SDK`.

All the payment methods from the specified App will be available to your customers if the Rule is matched. If you want to exclude some payment method from your App, then set the `excludedPaymentMethods` property accordingly. For example, to exclude PayPal and Visa, set `excludedPaymentMethods` property to `PAYPAL, VISA`.

Leaving the `excludedPaymentMethods` property blank will not exclude any payment methods.

The order the Apps are saved is used as a decider when multiple apps provide overlapping payment options. For example, if you add 2 apps offering Visa payments then the app with the lowest `priority` would be selected to provide Visa payments.

## How and when are Rules matched?
Rules are only evaluated when requesting the Collect Options for an Order. This is typically called when you are looking to present the available collection options in a UI for your customer to select from.

The Rules should be saved with the first Rule having the narrowest set of filters to the last Rule having the broadest. When Rules are evaluated, the first Rule is  evaluated first.

**Example 1**

Assume we have a payment instruction request with the following details:
- Country: **DE - Germany**
- Currency: **EUR**
- Collection value: **€200.00**

And a scheme with the following Rules configured:

Rule # | Currencies | Countries | Low Value | High Value | Configured Apps
-|-|-|-|-|-
1 | **EUR** | (any) | **1** | **100** | Braintree - Credit Cards only
2 | **EUR** | **DE, FR** | **101** | (any) | Braintree - Credits Cards + PayPal
3 | **EUR** | (any) | (any) | (any) | Braintree - Paypal only

When the API request to get the available collection options is executed for the payment instruction, the rules will be evaluated in the order they are saved.

Rule **1** rule is **ignored** as the value filter is outside the range of collection value.

Rule **2** rule is **matched** on currency, country, and value range. The payment options returned would be those configured in the matching rule - Credit Cards and PayPal in this example.

**Example 2**

Assume we have a payment instruction request with the following details:
- Country: **ES - Spain**
- Currency: **EUR**
- Collection value: **€200.00**

And a scheme with the following Rules configured:

Rule # | Currencies | Countries | Low Value | High Value | Configured Apps
-|-|-|-|-|-
1 | **EUR** | (any) | **1** | **100** | Braintree - Credit Cards only
2 | **EUR** | **DE, FR** | **101** | (any) | Braintree - Credits Cards + PayPal
3 | **EUR** | (any) | (any) | (any) | Braintree - Paypal only

When the API request to get the available collection options is executed for the payment instruction, the rules will be evaluated in the order they are saved.

Rule **1** rule is **ignored** as the value filter is outside the range of collection value.

Rule **2** rule is **ignored** as the country filter does not include our country.

Rule **3** rule  is **matched** on as currencies, countries, and value are any. The payment options returned would be those configured in the matching rule - PayPal only in this example.