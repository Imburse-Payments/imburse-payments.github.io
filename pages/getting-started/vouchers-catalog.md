---
layout: default
title: Getting Started
toc: getting-started-vouchers-catalog
body_color: body-primary
section_name: Getting Started
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started/authentication
nextsection_label: Authentication
---
# Vouchers Catalog
The Vouchers Catalog is a searchable catalog of the vouchers, gift cards, and rewards offered by all Imburses' voucher partners - in one place.

The API has calls that allow you to view the items in the Vouchers Catalog, along with the details you will need for ordering items and displaying item information.

#### What information does the catalog contain?
Below is a summary of the key data that an individual reward item from the catalog contains:

- Brand details
    - Name
    - Description of brand
    - Image urls of various sizes
    - Brand requirements such as disclaimer instructions, terms and conditions
- Supported Countries - one or many
- Currency Code - always a single currency
- Provider details - such as Tangocard etc.
- Reward Name - A friendly name for the reward such as "Amazon Gift Card", "€5.00 Gift Card" etc.
- Reward Id - See [here for more information](#the-reward-id)
- Min Value / Max Value - See [here for more information](#the-reward-value)


#### The Reward Id
The Reward Id is a unique identifier for each reward. 

If you're searching the catalog to find rewards to add to a Payout Scheme, the Reward Id value is what you will need in the scheme to reference back to the correct reward.


#### The Reward value
Every reward in the catalog has two values associated with it:

- Min Value
- Max Value

A reward can be either a Range value or a Fixed value. 

- **Fixed Value** - For rewards that are for a specific value only the Min Value and Max Value will be the same. For example a gift card that is only for €20.00.
- **Range Value** - For rewards that are for range of values the Min Value will be the minimum reward value and the Max Value will the maximum reward value. For example Amazon Gift Cards can be from €5.00 to €1,000.00.


#### Searching the Catalog
You can search the Vouchers Catalog by provider name, brand name, countries, currency, and amount. If you don't provide any filtering parameters then your will be returned all the items in the catalog.

If you search by amount, we will search for any vouchers that are of a fixed value of the amount specified or where the amount falls with a vouchers' min and max values.

The table below shows some examples and the results when searching for vouchers that support a €15.00 value:

\# | Range or Fixed | Min Value | Max Value | Voucher is Valid?
-|-|-|-
1 | Range | €1.00 | €500.00 | Yes
2 | Range | €20.00 | €50.00 | No
3 | Fixed | €15.00 | €15.00 | Yes
4 | Fixed | €10.00 | €10.00 | No