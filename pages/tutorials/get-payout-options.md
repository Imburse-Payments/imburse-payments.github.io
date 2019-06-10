---
layout: default
title: Quickstart Processing a Transaction API Tutorial
toc: tutorial-get-payout-options
body_color: body-orange
section_name: Tutorials
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Get Payout Options
The payout options are what you may need to present to your customer as part of the payout process you are developing.

For more information on the getting payout options, see the [Payout Options in Getting Started](/pages/getting-started/payment-options).

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Payout Bearer Token`

# How are Payout Options determined?
The payout options are determined by the following steps.
1. The Payout Bearer Token you created in the previous tutorial holds the customer ref, order ref, and instruction ref.
2. We lookup the payout instruction using the references from step 1 to give us the Scheme, Country, Currency, and instruction value.
3. Using the data from step 2, we then run through the Scheme Rules, looking for a match on Country, Currency, and value. We then return the payout reward options for the matching rule.

# Get the Payout Options
Using the `Payout Bearer Token` we can get the Payout Options.

#### Request
Replace the `{payout-bearer-token}` placeholder value with the `Payout Bearer Token` value.

```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/payout/options" \
  --header "Authorization: Bearer {payout-bearer-token}"
```

#### Response
The response will contain all the rewards appropriate for the customers payment instruction. Please note, for brevity in this tutorial we are only showing 1 result.

```json
{
    "rewards": [
        {
            "brand": {
                "brandKey": "B644898",
                "brandName": "Amazon.co.uk",
                "createdDate": "2016-07-12T23:53:33Z",
                "description": "<p>Amazon.co.uk Gift Cards* can be redeemed towards millions of items at www.amazon.co.uk. Amazon.co.uk&#39;s huge selection includes products in Books, Electronics, Music, MP3 Downloads, Film &amp; TV, Clothing, Video Games, Software, Sports &amp; Outdoors, Toys, Baby, Computers &amp; Office, Home &amp; Garden, Jewellery, Beauty, DIY &amp; Home Improvement, Office Products, Camera &amp; Photo, Pet Supplies, and more. Amazon.co.uk is the place to find and discover almost anything you want to buy online at a great price.</p>\r\n",
                "disclaimer": "<p>*Restrictions apply. For complete terms and conditions, visit:&nbsp;<a href=\"http://www.amazon.co.uk/gc-legal\">www.amazon.co.uk/gc-legal</a>.</p>\r\n",
                "imageUrls": [
                    {
                        "ppi": 326,
                        "ratioHeight": 5,
                        "ratioWidth": 8,
                        "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-80w-326ppi.png",
                        "width": 80
                    },
                    {
                        "ppi": 326,
                        "ratioHeight": 5,
                        "ratioWidth": 8,
                        "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-130w-326ppi.png",
                        "width": 130
                    },
                    {
                        "ppi": 326,
                        "ratioHeight": 5,
                        "ratioWidth": 8,
                        "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-200w-326ppi.png",
                        "width": 200
                    },
                    {
                        "ppi": 326,
                        "ratioHeight": 5,
                        "ratioWidth": 8,
                        "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-278w-326ppi.png",
                        "width": 278
                    },
                    {
                        "ppi": 326,
                        "ratioHeight": 5,
                        "ratioWidth": 8,
                        "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-300w-326ppi.png",
                        "width": 300
                    },
                    {
                        "ppi": 326,
                        "ratioHeight": 5,
                        "ratioWidth": 8,
                        "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-1200w-326ppi.png",
                        "width": 1200
                    }
                ],
                "lastUpdateDate": "2017-12-28T19:11:48Z",
                "requirements": {
                    "alwaysShowDisclaimer": false,
                    "disclaimerInstructions": "",
                    "displayInstructions": "<ol>\r\n\t<li><strong>Guidelines for use of the logo:&nbsp;</strong>&nbsp;The logos and graphics can not be changed in any way and must be used according to the&nbsp;usage&nbsp;guidelines available at&nbsp;<a href=\"https://www.amazon.co.uk/b?node=14235247031\">https://www.amazon.co.uk/b?node=14235247031</a>.&nbsp;&nbsp;Download our logos from the &quot;Additional Resources&quot; section.&nbsp; Please only use the logos provided on this page.</li>\r\n\t<li><strong>Use the correct product name:</strong>&nbsp; &quot;Amazon.co.uk Gift Card&quot; is our name.&nbsp; Our three-word product name is always capitalized and should not be broken up.&nbsp; It is not a gift certificate or e-gift card. If you are describing the gift card value display the pound amount first &ldquo;&pound;XX&nbsp;<a href=\"http://amazon.co.uk/\">Amazon.co.uk</a>&nbsp;Gift Card&rdquo;.</li>\r\n\t<li><strong>Display the disclaimer:&nbsp;</strong>&nbsp;When using our logo or product name, please always display the following disclaimer: &quot;*Restrictions apply. For complete terms and conditions, visit:&nbsp;<a href=\"https://www.amazon.de/gp/help/customer/display.html/ref=s9_acss_bw_cg_GCBCDTM_md1_w?nodeId=505028&amp;pf_rd_m=A3JWKAKR8XB7XF&amp;pf_rd_s=merchandised-search-1&amp;pf_rd_r=PYRMZX6Z9K41WE13H40E&amp;pf_rd_t=101&amp;pf_rd_p=bc3e74fb-34f0-4efb-b327-851efc3bddc4&amp;pf_rd_i=14235495031\">amazon.com/gc-legal</a>.&quot;</li>\r\n\t<li><strong>Amazon is not a sponsor:</strong>&nbsp;&nbsp;Your use of the Amazon brand should not imply partnership or sponsorship.&nbsp; You agree not to misrepresent the relationship between Amazon and your business.</li>\r\n\t<li><strong>Nothing is &quot;free&quot;:&nbsp;&nbsp;</strong>No statements can refer to the vouchers for free, free or for free as these terms have strong implications for customers.</li>\r\n\t<li><strong>Subject Line:</strong>&nbsp; If you deliver the Amazon.co.uk Gift Card by email, the&nbsp;Subject Line cannot&nbsp;imply that Amazon has sent the gift card.&nbsp; An example of a&nbsp;GOOD&nbsp;Subject Line is: &quot;MyCompany sent you an Amazon.co.uk Gift Card!&quot;&nbsp; An example of a&nbsp;BAD Subject Line is:&nbsp; &quot;Amazon.co.uk sent you a gift card!&quot;</li>\r\n</ol>\r\n",
                    "termsAndConditionsInstructions": ""
                },
                "shortDescription": "<p>Amazon.co.uk Gift Cards* can be redeemed towards millions of items at <a href=\"http://www.amazon.co.uk\">www.amazon.co.uk</a>.</p>\r\n",
                "status": "active",
                "terms": "<p>*<a href=\"http://amazon.co.uk/\">Amazon.co.uk</a>&nbsp;is not a sponsor of this promotion.&nbsp;<a href=\"http://amazon.co.uk/\">Amazon.co.uk</a>&nbsp;Gift Cards (&quot;GCs&quot;) may be redeemed on the&nbsp;<a href=\"http://amazon.co.uk/\">Amazon.co.uk</a>&nbsp;website towards the purchase of eligible products available on&nbsp;<a href=\"http://www.amazon.co.uk/\">www.amazon.co.uk</a>. GCs cannot be reloaded, resold, transferred for value, redeemed for cash or applied to any other account.&nbsp;<a href=\"http://amazon.co.uk/\">Amazon.co.uk</a>&nbsp;is not responsible if a GC is lost, stolen, destroyed or used without permission. See&nbsp;<a href=\"http://www.amazon.co.uk/gc-legal\">www.amazon.co.uk/gc-legal</a>for complete terms and conditions. GCs are issued by Amazon EU S.&agrave; r.l. All Amazon &reg;, &trade; &amp; &copy; are IP of&nbsp;<a href=\"http://amazon.com/\">Amazon.com</a>, Inc. or its affiliates.</p>\r\n"
            },
            "countries": [
                "GB",
                "IE"
            ],
            "createdDate": "2016-08-26T00:38:00.445Z",
            "credentialTypes": [
                "cardNumber",
                "expirationDate"
            ],
            "currencyCode": "GBP",
            "exchangeRateRule": "",
            "isWholeAmountValueRequired": false,
            "lastUpdateDate": "2018-03-22T00:19:38.988Z",
            "provider": {
                "id": "TANGOCARD",
                "name": "Tango Card"
            },
            "providerRewardId": "U139281",
            "redemptionInstructions": "<p>|&nbsp;&nbsp;<a href=\"https://www.amazon.co.uk/gp/css/gc/payment/view-gc-balance?claimCode=\">Apply to Account</a>&nbsp; |&nbsp;&nbsp;<a href=\"http://www.amazon.co.uk/gc-redeem\">How to Use</a>&nbsp; |</p>\r\n\r\n<p>To redeem your gift card, follow these steps:</p>\r\n\r\n<ol>\r\n\t<li>Visit <a href=\"http://www.amazon.co.uk/redeem\">www.amazon.co.uk/redeem</a></li>\r\n\t<li>Enter the claim code when prompted.</li>\r\n</ol>\r\n\r\n<p>Your gift card claim code may also be entered when prompted during the checkout process but you will not be able to redeem your gift card using the <a href=\"http://amazon.co.uk/\">Amazon.co.uk</a> 1-Click&reg; service or downloadable e-books unless you first redeem the gift card through Your Account.</p>\r\n\r\n<p>If you have questions about redeeming your gift card, please visit <a href=\"http://www.amazon.co.uk/gc-redeem\">www.amazon.co.uk/gc-redeem</a>.&nbsp;</p>\r\n",
            "rewardId": "ffdae9c9-1bfd-55d3-f6cc-9b1de1874241",
            "rewardName": "Amazon.co.uk Gift Card",
            "rewardType": "gift card",
            "status": "active",
            "tags": [
                ""
            ],
            "value": {
                "greaterThan": null,
                "greaterThanOrEqualTo": 0.01,
                "lessThan": null,
                "lessThanOrEqualTo": 1000
            },
            "valueType": "VARIABLE_VALUE",
            "maxValue": 1000,
            "minValue": 0.01
        }
    ]
}
```

# What's Next?
- [Processing a Reward](/pages/tutorials/processing-a-reward)





