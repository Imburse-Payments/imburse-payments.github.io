---
layout: default
title: Claiming and Redeeming a Reward
toc: tutorial-claiming-and-redeeming-a-reward
body_color: body-orange
section_name: Claiming and Redeeming a Reward
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Claiming and Redeeming a Reward
A reward needs to be claimed and then redeemed in order for you to allow your customers to redeem the reward value.

For more information see the [Claiming a Reward in Getting Started](/pages/getting-started/claiming-and-redeeming-a-reward).

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Payout Bearer Token`


# Steps to Redeem a Reward
The act of claiming and redeeming a reward ensures the reward is paid for and ready for redemption. The redeem response will include the appropriate details needed to allow your customer to redeem their selected reward with the reward provider. ie. Amazon, etc.

The process to redeem a reward is a 3 step procedure.

1. Claim a Reward
2. Check if the claim is successful
3. Redeem the Reward

## Step 1 - Claim the Reward
Using the `Payout Bearer Token` we can claim the reward.

#### Request
Replace the `{payout-bearer-token}` placeholder value with the `Payout Bearer Token` value.

Replace the `{reward-id}` placeholder with the id of the reward you want to claim.

```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/transaction/reward/claim" \
  --header "Authorization: Bearer {payout-bearer-token}
  --header "Content-Type: application/json" \
  --data "{
    \"rewardId\": \"{reward-id}\"
  }"
```

#### Response
The response is `201 - Accpted` with the following custom header.

**Note: The `taskId` on the end of the location header is unique to claiming this reward. Each claim will have a different `taskId`.**

Header Name | Value
-|-
`location` | `https://sandbox-api.imbursepayments.com/v1/transaction/check/{task-id}`

The `{taskId}` placeholder will be a GUID and will look like this: `8f482020-965f-4e9b-afb2-1e6e4336e6da`.

We will use the header value in the next step.

## Step 2 - Check if the claim is successful
Repeatedly call the `check` endpoint, returned in the header response from Step 1, until the reward has been succesfully claimed.

#### Request
Replace the `{payout-bearer-token}` placeholder value with the `Payout Bearer Token` value.

Replace the `{check-claim-url}` placeholder with the `location` header value from Step 1.

```curl
curl --location --request GET "{check-claim-url}" \
  --header "Authorization: Bearer {payout-bearer-token}"
```

#### Response
Expect the following responses:

Response Code | Action to take
-|-
`200 - OK` | Claim still being processed, continue polling this endpoint. Repeat Step 2.
`201 - Created` | Reward has been claimed successfully. You can now call the `Redeem a Reward` endpoint - see Step 3.

We would recommend polling every 250ms (1/4 of a second) until the `201 - Created` response is returned.

**Note: There will be variances in processing times depending on your rewards provider.**

## Step 3 - Redeem the Reward
If you received the `201 - Created` response from Step 2 then the your reward has been successfully claimed.

#### Request
Replace the `{payout-bearer-token}` placeholder value with the `Payout Bearer Token` value.

```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/transaction/reward/redeem" \
  --header "Authorization: Bearer {payout-bearer-token}"
```

#### Response
The response will contain the credentials to redeem a reward, in the example the claim code, expiration date, and the redemption instructions.

These will need to be displayed or sent to your customer.

```json
{
    "credentials": {
        "Gutscheincode - Claim Code": "2A28-HVZ86C-GABK",
        "Verfallsdatum - Expiration Date": "2029-06-14T21:59:59Z"
    },
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
```

Mandatory information to provide your customer would be the `credentials` and the `redemptionInstructions`, which instucts your customer on how to redeem the reward.