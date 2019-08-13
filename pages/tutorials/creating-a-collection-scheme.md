---
layout: default
title: Creating a Collection Scheme
toc: tutorial-creating-a-collection-scheme
body_color: body-pink
section_name: Creating a Collection Scheme
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Creating a Collection Scheme
If you are need to collect funds from your customer then your Tenant will need at least one Collection Scheme setup. Collection Schemes define the rules around which payment methods, such as Visa, Mastercard, PayPal, etc, are presented to your customers.

For more information on Collection Schemes, see the [Collection Schemes in Getting Started](/pages/getting-started/collection-schemes/).

# Prerequisites
As well as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Management Bearer Token` derived from a `Tenant API Key`
- The `appId` of an App you have previously installed that you want to add to this Collection Scheme.

# Create the Collection Scheme
Using your `Management Bearer Token` we can create a new Collection Scheme.

By default your new Collection Scheme will be in draft only. It will need to be Published before it can be used for collecting money.

#### Request
Use the following request to create a new Collection Scheme.

Note: The scheme we are creating has the following properties:
- The Rules are filtering for **EUR**, *any* country, and a value between **1** and **1000**.
- The available payments methods will be from the **BRAINTREE_SDK** App.


```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/schemes/collect" \
  --header "Authorization: Bearer {management-bearer-token}" \
  --header "Content-Type: application/json" \
  --data "{
	    \"name\": \"Motor Insurance - EUROPE\",
      \"code\": "",
      \"rules\": [
        {
          \"priority\": 0,
          \"currencies\": [
            \"EUR\"
          ],
          \"countries\": [],
          \"highValueInclusive\": 1000,
          \"lowValueInclusive\": 1,
          \"configurations\": [
            {
              \"priority\": 0,
              \"appId\": \"BRAINTREE_SDK\",
              \"excludedPaymentMethods\": [ "" ]
            }
          ]
        }
      ]
  ]
```

#### Response
The `schemeId` property will be the id of your newly created Collection Scheme.

```json
{
  "schemeId": "8a7f806f-782a-498d-9627-b742f0a89c40",
  "publishedDraftId": "",
  "drafts": [
    {
      "draftId": "5a8b5f84-a799-44ba-96c2-8006daa7088b",
      "name": "Motor Insurance - EUROPE",
      "code": "",
      "rules": [
        {
          "priority": 0,
          "currencies": [
            "EUR"
          ],
          "countries": [],
          "highValueInclusive": 1000,
          "lowValueInclusive": 1,
          "configurations": [
            {
              "priority": 0,
              "appId": "BRAINTREE_SDK",
              "availablePaymentMethods": [
                "VISA", "MASTERCARD", "DISCOVER", "MAESTRO", "AMERICAN-EXPRESS", "PAYPAL"
              ],
              "excludedPaymentMethods": []
            }
          ]
        }
      ]
    }
  ]
}
```

# Publishing the Draft
After creating a new Scheme we need to Publish the draft that was added.

In the previous step, the response included a `drafts` collection. We'll use the `draftId` from the first item in the collection when we call the Publish function.

#### Request
Call the endpoint below, replacing **`YOUR_SCHEME_ID`** and **`YOUR_DRAFT_ID`** with your actual values.

`POST https://sandbox-api.imburse.net/v1/schemes/collect/YOUR_SCHEME_ID/drafts/YOUR_DRAFT_ID/publish`

Using the example response from the previous step we will call the Publish endpoint with our values:

`POST https://sandbox-api.imburse.net/v1/schemes/collect/8a7f806f-782a-498d-9627-b742f0a89c40/drafts/5a8b5f84-a799-44ba-96c2-8006daa7088b/publish`


#### Response
You will see that the `publishedDraftId` property is now referencing the draft we created earlier.

```json
{
  "schemeId": "8a7f806f-782a-498d-9627-b742f0a89c40",
  "publishedDraftId": "5a8b5f84-a799-44ba-96c2-8006daa7088b",
  "drafts": [
    {
      "draftId": "5a8b5f84-a799-44ba-96c2-8006daa7088b",
      "name": "Motor Insurance - EUROPE",
      "code": "",
      "rules": [
        {
          "priority": 0,
          "currencies": [
            "EUR"
          ],
          "countries": [],
          "highValueInclusive": 1000,
          "lowValueInclusive": 1,
          "configurations": [
            {
              "priority": 0,
              "appId": "BRAINTREE_SDK",
              "availablePaymentMethods": [
                "VISA", "MASTERCARD", "DISCOVER", "MAESTRO", "AMERICAN-EXPRESS", "PAYPAL"
              ],
              "excludedPaymentMethods": []
            }
          ]
        }
      ]
    }
  ]
}
```

# What's Next?

- [Creating a Payout Scheme](/pages/tutorials/creating-a-payout-scheme)





