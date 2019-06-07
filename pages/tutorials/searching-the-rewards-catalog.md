---
layout: default
title: Quickstart Developer Tutorial
toc: tutorial-searching-the-rewards-catalog
body_color: body-pink
section_name: Tutorials
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Searching the Rewards Catalog
If you are looking to create a Payout Scheme that offers Rewards, Gift cards, etc. to your customers, you will need to search the Rewards Catalog to store the resultant `rewardId` against your Reward Group.

For this tutorial we will search the Rewards Catalog using the REST API's. 

For more information on the Rewards Catalog, see the [Rewards Catalog in Core Concepts](/pages/guides/core-concepts/#rewards-catalog).

# Prerequisites
Aswell as familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A valid `Management Bearer Token` derived from a `Tenant API Key`. If you don't have one, see the tutorial [Aquiring a Management Bearer Token](#aquire-management-bearer-token).

# Search the Rewards Catalog
Using the `Management Bearer Token` aquired in Step 1, we can now search the Rewards Catalog.

#### Request
Replace the `{management-bearer-token}` placeholder value with the `Management Bearer Token` value.

You can filter the results by supplying parameters in the request.

**If you do not specify any parameters the Rewards Catalog will return all results.**

- `providerId` - Filter by a particular Provider. ie. `TANGOCARD`
- `brandName` - Filter by a brand, ie. Amazon, Mastercard, etc.
- `countries` - Filter by country where the reward can be redeemded. You can specify multiple countries by separating with a comma. ie. `GB` or `GB,DE,FR` etc.
- `currencies` - Filter by the currency the reward can by redeemed in. You can specify multiple currencies by separating with a comma. ie. `EUR` or `GBP,EUR` etc.
- `tags` - Not currently used.
- `amount` - Filter by the amount the reward is for. Some rewards are fixed value, ie. `5.00`; others are valid for any amount within a range. Specify the amount the you want to payout to filter the rewards accordingly.

In the example request below we have specified `TANGOCARD` as the provider, `Amazon` as the brand, and countries as `GB`. The amount is `5.00`.


```curl
curl --location --request GET "https://sandbox-api.imbursepayments.com/v1/catalog?providerId=TANGOCARD&brandName=&countries=GB&currencies=&tags=&amount=5.0" \
  --header "Authorization: Bearer {management-token}"
```

#### Response
The response will contain all the rewards that match our filter parameters. Please note that for brevity in this tutorial we are only showing 2 of the 10+ results that would otherwise return for this request.

The `rewardId` property value is what you will need to save for referencing this rewards later in a Reward Group.

Each Reward in the response array returns everything you would need to present the reward to your customers:

- Reward Id
- Brand name
- Description
- Image urls of various sizes
- Terms of use
- Countries of use
- Currency
- Redemption instructions
- Value (fixed or variable)

```json
[
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
    },
    {
        "brand": {
            "brandKey": "B719673",
            "brandName": "Argos",
            "createdDate": "2017-08-21T22:21:04Z",
            "description": "<p>50,000 products, 1 eGift Card The new Argos eGift Card is the perfect way to get your hands on shiny new stuff. Fast. Delivered to you by email, you can spend your eGift Card online at argos.co.uk. Letting you shop from your sofa. Or the pub. Or anywhere you like really. We don&#39;t mind. Or you can use it in any of our 840 stores. Perfect if you fancy a bit of fresh air and a stroll. Either way, just enjoy spending it. With over 50,000 products to choose from at Argos, you&#39;ve got some decisions to make. We have all the latest must have items. From tech to toys, furniture to jewellery, there&lsquo;s bound to be a great gift for you. Want it today? With Argos Fast Track Delivery available on many items, Argos can deliver to your door the same day! Just check for the Fast Track badge on your selected product at <a href=\"http://www.argos.co.uk\">argos.co.uk</a>. Select Argos eGift Card. Go Argos.</p>\r\n\r\n<p>Argos codes will be valid for 12 Months.</p>\r\n",
            "disclaimer": "<p>Argos is not a sponsor of the rewards or otherwise affliated with this company. The logos and other identifying marks attached are trademarks of and owned by each represented company and/or its affliates. Please visit each company&#39;s website for additional terms and conditions.</p>\r\n",
            "imageUrls": [
                {
                    "ppi": 326,
                    "ratioHeight": 5,
                    "ratioWidth": 8,
                    "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b719673-80w-326ppi.png",
                    "width": 80
                },
                {
                    "ppi": 326,
                    "ratioHeight": 5,
                    "ratioWidth": 8,
                    "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b719673-130w-326ppi.png",
                    "width": 130
                },
                {
                    "ppi": 326,
                    "ratioHeight": 5,
                    "ratioWidth": 8,
                    "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b719673-200w-326ppi.png",
                    "width": 200
                },
                {
                    "ppi": 326,
                    "ratioHeight": 5,
                    "ratioWidth": 8,
                    "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b719673-278w-326ppi.png",
                    "width": 278
                },
                {
                    "ppi": 326,
                    "ratioHeight": 5,
                    "ratioWidth": 8,
                    "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b719673-300w-326ppi.png",
                    "width": 300
                },
                {
                    "ppi": 326,
                    "ratioHeight": 5,
                    "ratioWidth": 8,
                    "url": "https://dwwvg90koz96l.cloudfront.net/images/brands/b719673-1200w-326ppi.png",
                    "width": 1200
                }
            ],
            "lastUpdateDate": "2019-05-02T17:36:36Z",
            "requirements": {
                "alwaysShowDisclaimer": false,
                "disclaimerInstructions": "",
                "displayInstructions": "",
                "termsAndConditionsInstructions": ""
            },
            "shortDescription": "<p>With over 50,000 products to choose from at Argos, you&#39;ve got some decisions to make. We have all the latest must have items. From tech to toys, furniture to jewellery, there&lsquo;s bound to be a great gift for you. Want it today? With Argos Fast Track Delivery available on many items, Argos can deliver to your door the same day! Just check for the Fast Track badge on your selected product at <a href=\"http://www.argos.co.uk\">argos.co.uk</a>. Select Argos eGift Card. Go Argos.</p>\r\n\r\n<p>Argos codes will be valid for 12 Months.</p>\r\n",
            "status": "active",
            "terms": "<p>eGift Cards may be redeemed in full or part payment for goods in any UK Argos store or online at <a href=\"http://www.argos.co.uk\">http://www.argos.co.uk</a>, including current promotional offers, at the prevailing prices listed. eGift Cards cannot be used for purchases made over the phone. eGift Cards cannot be used for the purchase of other gift cards or vouchers. GBP &pound; eGift Cards cannot be redeemed in ROI. This eGift Card is not a credit, debit or cheque guarantee card, cannot be redeemed for cash or returned under the Argos 30 Day Guarantee and cannot be re-sold or re-tendered. This will not affect your statutory rights. Please see expiry date on the eGift Card. Argos Ltd reserve the right to decline or withdraw the eGift Card at any time. Treat this eGift Card like cash, Argos Ltd cannot be held liable for lost, stolen or damaged eGift Cards and they will not be replaced. To check your balance at any time please sign into your account at <a href=\"http://www.argos.co.uk\">http://www.argos.co.uk</a> and use the balance checker provided.</p>\r\n"
        },
        "countries": [
            "GB"
        ],
        "createdDate": "2018-03-22T21:42:48.457Z",
        "credentialTypes": [
            "expirationDate",
            "redemptionUrl"
        ],
        "currencyCode": "GBP",
        "exchangeRateRule": "",
        "isWholeAmountValueRequired": false,
        "lastUpdateDate": "2019-03-11T19:20:16.965Z",
        "provider": {
            "id": "TANGOCARD",
            "name": "Tango Card"
        },
        "providerRewardId": "U324815",
        "redemptionInstructions": "<ol>\r\n\t<li>Click on the above link to access your eGift Card.</li>\r\n\t<li>Spend online at&nbsp;<a href=\"http://www.argos.co.uk/\">argos.co.uk</a>, via the&nbsp;Argos app, or in any UK Argos store.</li>\r\n</ol>\r\n",
        "rewardId": "21d3b106-4b3b-7006-7608-5b5d3cff1d04",
        "rewardName": "Argos eGift Card",
        "rewardType": "gift card",
        "status": "active",
        "tags": [
            ""
        ],
        "value": {
            "greaterThan": null,
            "greaterThanOrEqualTo": 5,
            "lessThan": null,
            "lessThanOrEqualTo": 100
        },
        "valueType": "VARIABLE_VALUE",
        "maxValue": 100,
        "minValue": 5
    }
]
```

# What's Next?
- [Create a Reward Group](/pages/tutorials/creating-a-reward-group)





