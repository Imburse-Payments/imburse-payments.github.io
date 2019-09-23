---
layout: default
title: Claiming a Reward
toc: tutorial-claiming-a-reward
body_color: body-orange
section_name: Claiming a Reward
last_updated: September 23rd, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Claiming a Reward
A reward needs to be claimed in order for you to allow your customers to redeem the reward value.

For more information see the [Claiming a Reward in Getting Started](/pages/getting-started/claiming-a-reward).

# Prerequisites
In addition to familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

 A valid `Management Bearer Token` derived from a `Tenant API Key`

# Steps to Claim a Reward
The act of claiming a reward ensures the reward is paid for and ready for redemption. The claim response will include the appropriate details needed to allow your customer to redeem their selected reward with the reward provider. ie. Amazon, etc.

The process to claim a reward is a 2 step procedure.

1. Claim a Reward
3. Get the Reward

## Step 1 - Claim the Reward
Using the `Management Bearer Token` we can claim the reward.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

Replace the `{orderRef}` placeholder value with the order ref.

Replace the `{instructionRef}` placeholder value with the instruction ref.

Replace the `{reward-id}` placeholder with the id of the reward you wish to claim.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/v1/order-management/{orderRef}/instruction/{instructionRef}" \
  --header "Authorization: Bearer {management-bearer-token}
  --header "Content-Type: application/json" \
  --data "{
      \"rewardId\": \"{reward-id}\"
  }"
```

#### Response
The response is `202 - Accepted` with the following custom header.

**Note: The `transactionId` on the end of the location header is unique to claiming this reward. Each claim will have a different `transactionId`.**

Header Name | Value
-|-
`location` | `https://sandbox-api.imbursepayments.com/v1/customer-vault/{customer-ref}/reward/{financial-instrument-id}/transaction/{transaction-id}`

The `{transactionId}` placeholder will be a GUID and will look something like this: `8f482020-965f-4e9b-afb2-1e6e4336e6da`.

We will use the header value in the next step.

## Step 2 - Get the Reward
If you received the `201 - Created` response from Step 1 then the your claim has been successfully submitted.

#### Request
We must now repeatedly poll the transaction endpoint, returned in the header response from Step 1, until the response `status` property changes from `SETTLING` to either `SETTLED` or `FAILED`.

The values for `customer-ref`, `financial-instrument-id`, and `transaction-id` will be pre-filled with appropriate values from Step 1.

We would recommend polling every 1 second until the status changes to `SETTLING` or `FAILED`.

**Note: There will be variances in processing times depending on your chosen reward provider.**

```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/customer-vault/{customer-ref}/reward/{financial-instrument-id}/transaction/{transaction-id}" \
  --header "Authorization: Bearer {management-bearer-token}"
```

#### Response
The response will contain the `status` and details needed to redeem the reward.

If the `status` is `SETTLED` then the `data` will contain the credentials to redeem a reward, in the example the claim code, expiration date, and the redemption instructions. These will need to be displayed or sent to your customer.

```json
{
    "status": "SETTLED",
    "data": 
      {
        "credentialList": [
            {
                "label": "Gutscheincode - Claim Code",
                "value": "2A28-HVZ86C-GABK",
                "rewardType": null,
                "credentialType": "cardNumber"
            },
            {
                "label": "Verfallsdatum - Expiration Date",
                "value": "2029-06-14T21:59:59Z",
                "rewardType": null,
                "credentialType": "expirationDate"
            }
        ],
        "redemptionInstructions": "<p><strong>Zur Einl&ouml;sung des Gutscheins gehen Sie bitte wie folgt vor:</strong></p><ol><li>Gehen Sie auf&nbsp;<a href=\\\"http://www.amazon.de/Geschenkgutscheine/b?ie=UTF8&amp;node=1571256031\\\">www.amazon.de/gp/gc</a>. Klicken Sie auf &bdquo;Gutschein einl&ouml;sen&ldquo; und geben Sie den Gutscheincode ein, wenn Sie dazu aufgefordert werden.</li><li>Gutscheinbetr&auml;ge werden w&auml;hrend des Abmeldevorgangs automatisch auf zur Teilnahme berechtigte Bestellungen angerechnet.</li><li>Verbleibende Differenzbetr&auml;ge Ihrer Bestellung sind mittels einer anderen Zahlungsmethode zu begleichen.</li></ol><p>Sie k&ouml;nnen die Gutscheincode auch eingeben, wenn Sie w&auml;hrend des Abmeldevorgangs dazu aufgefordert werden. Die Einl&ouml;sung Ihres Gutscheins ist bei der Nutzung des&nbsp;<a href=\\\"http://amazon.de/\\\">Amazon.de</a>&nbsp;1-Click&reg; Services jedoch nicht m&ouml;glich, es sei denn, Sie l&ouml;sen den Gutschein zun&auml;chst &uuml;ber Ihr Konto ein.</p><p><strong>To redeem the code, please proceed as follows:</strong></p><ol><li>Go to&nbsp;<a href=\\\"https://translate.google.com/translate?hl=en&amp;prev=_t&amp;sl=auto&amp;tl=en&amp;u=http://www.amazon.de/Geschenkgutscheine/b%3Fie%3DUTF8%26node%3D1571256031\\\">www.amazon.de/gp/gc</a>.&nbsp;Click &quot;Redeem Gift Card&quot; and enter the&nbsp;Claim Code when prompted.</li><li>Gift Card amounts will be applied automatically to eligible orders during the checkout process.</li><li>You must pay for any remaining balance on your order with another payment method.</li></ol><p>Your gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the&nbsp;<a href=\\\"http://amazon.de/\\\">Amazon.de</a>&nbsp;1-Click&reg; service or downloadable e-books unless you first redeem the gift card through Your Account.</p>"
      }
}
```

You would need to use the `credentialList` to help format the Claim Code etc. for you customer's UI and also display the `redemptionInstructions`, which instruct your customer on how to redeem the reward.