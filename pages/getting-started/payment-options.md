---
layout: default
title: Getting Started
toc: getting-started-payout-payment-options
body_color: body-primary
section_name: Getting Started
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Payout Payment Options
The Payout Payment Options are a list of payment options that you can present to your customers. This could be rewards or cash payment options.

## Access Requirements
You will need a Tenant Security Key to perform Payment Instruction and related object functions.

## Functions
The available Collection Scheme functions are:

- Get Payout Payment Options

## API Documentation
All the Payment Order API functions are fully documented in the [Transaction API documentation](https://api-docs.imbursepayments.com/?version=latest#09f68806-2b90-433d-9f6d-684cfef1d890).

## Models
The following models are used to for Payout Payment Options:

### Payout Payment Options Model
```json
{
	"rewards": [
    {
	    "brand": {
	        "brandKey": "",
	        "brandName": "",
	        "createdDate": "",
	        "description": "",
	        "disclaimer": "",
	        "imageUrls": [
	            {
	                "ppi": 326,
	                "ratioHeight": 5,
	                "ratioWidth": 8,
	                "url": "",
	                "width": 80
	            },
	            {
	                "ppi": 326,
	                "ratioHeight": 5,
	                "ratioWidth": 8,
	                "url": "",
	                "width": 130
	            },
	            {
	                "ppi": 326,
	                "ratioHeight": 5,
	                "ratioWidth": 8,
	                "url": "",
	                "width": 200
	            },
	            {
	                "ppi": 326,
	                "ratioHeight": 5,
	                "ratioWidth": 8,
	                "url": "",
	                "width": 278
	            },
	            {
	                "ppi": 326,
	                "ratioHeight": 5,
	                "ratioWidth": 8,
	                "url": "",
	                "width": 300
	            },
	            {
	                "ppi": 326,
	                "ratioHeight": 5,
	                "ratioWidth": 8,
	                "url": "",
	                "width": 1200
	            }
	        ],
	        "lastUpdateDate": "",
	        "requirements": {
	            "alwaysShowDisclaimer": false,
	            "disclaimerInstructions": "",
	            "displayInstructions": "",
	            "termsAndConditionsInstructions": ""
	        },
	        "shortDescription": "",
	        "status": "",
	        "terms": ""
	    },
	    "countries": [],
	    "createdDate": "",
	    "credentialTypes": [],
	    "currencyCode": "",
	    "exchangeRateRule": "",
	    "isWholeAmountValueRequired": false,
	    "lastUpdateDate": "",
	    "provider": {
	        "id": "",
	        "name": ""
	    },
	    "redemptionInstructions": "",
	    "rewardId": "",
	    "rewardName": "",
	    "rewardType": "",
	    "status": "",
	    "tags": [],
	    "value": {
	        "greaterThan": null,
	        "greaterThanOrEqualTo": 0,
	        "lessThan": null,
	        "lessThanOrEqualTo": 0
	    },
	    "valueType": ""
    }
  ]
}
```

The [API documentation](#api-documentation) documents each of the properties from the response object.

## Payment Options
The payment options that are selected to return in the response come from processsing through the scheme rules engine. This is documented in [Payout Schemes - How and when are Rules matched?](/pages/getting-started/payout-schemes/#how-and-when-are-rules-matched).

The resultant list of Reward objects can then be displayed in your UI to your customer. Important Reward object properties you will use would be `rewardId`, `redemptionInstructions`, `description`, `imageUrls`, `disclaimer`, `termsAndConditions`, `displayInstructions`.