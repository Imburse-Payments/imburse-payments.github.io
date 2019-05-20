---
layout: default
title: Core Concepts
toc: core-concepts
body_color: body-green
section_name: Core Concepts
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Overview
The diagram below shows an overview of how the various components relate to one another.

The components are:

- [Accounts](#accounts)
- [Security Keys](#security-keys)
- [Tenants](#tenants)
- [Marketplace](#marketplace)
- [Apps](#apps)
- [Collecion Schemes](#collection-schemes)
- [Payout Schemes](#payout-schemes)
- [Notifications](#webhooks)

<img src="/assets/images/guides/getting-started/concept-overview.png" style="width:800px;" title="Overview" alt="Overview"/>





# Accounts
As an organisation signed up to the Imburse Platform you will have been setup with an Account.

This Account is where Imburse will direct any invoices to aswell as using your Account contact details to connect with you.

Your Account is also the administrative root of your Imburse Platform and it will hold one or more of your [Tenants](/pages/guides/getting-started/what-is-a-tenant/).





# Tenants
You can consider a Tenant as either a company, department, or organisation.

If you are looking to resell our service you should treat a Tenant within Imburse as a client within your own systems.

Your [Account](/pages/guides/getting-started/what-is-an-account/) can have many Tenants.

**The diagram belows shows the relationship between an Account and its Tenants:**

<img src="/assets/images/guides/getting-started/account-tenant-relationship.png" style="width:600px;" title="Account and Tenant heirarchy" alt="Account and Tenant heirarchy"/>

A Tenant is where you will store configuration for:
- [Schemes](/pages/guides/getting-started/what-is-a-scheme/)
- [Provider Configurations](/pages/guides/getting-started/what-is-a-provider-configuration/)
- [Webhooks](/pages/guides/getting-started/what-is-a-webhook/)
- [Tenant Security Keys](/pages/guides/getting-started/what-are-security-keys/#what-is-a-tenant-security-key)

Tenants do not share information with each other and are a completely self contained, isolated, entity within a multi-tenancy system.






# Security Keys
A Security Key is a **Public and Private key set** and is used as a means of securing your request during the authenticaion process.
The Security Key has one or more Roles attributed to it and these roles govern the Security Keys' capabilities.

Security Keys can be held by both [Accounts](/pages/guides/getting-started/what-is-an-account/) and [Tenants](/pages/guides/getting-started/what-is-a-tenant/).




#### What is an Account Security Key
At a high level, Account Security Keys have the ability to manage the Account and, in a **limited** capacity, manage the Tenants that the Account owns too.

The capabilies of an Account Security Key are dependent on the **Account Roles** that are assigned to it. The following table shows the **Account Roles** that are available:

Account Role Name | Description
-|-
`acc.g.super` | Account Gobal Admin - Global read + write access to all aspects of Accounts
`acc.r` | Account Management read access
`acc.a` | Account Management read + write access
`acc.key.r` | Security Key Management read access
`acc.key.a` | Security Key Management read + write access
`acc.t.r` | Tenant Management read access
`acc.t.a` | Tenant Management read + write access

An Account Security Key can have multiple roles assigned to it as are deemed necessary for the capabilities your require.

Some example scenarios are shown below but you can add which ever role combinations you require.

Scenario | Roles required
-|-
Administer new Tenants | `acc.t.a`
Administer new Tenants and Security Keys | `acc.t.a` and `acc.key.a`
Read Tenant and Tenant Security Keys only | `acc.t.r` and `acc.key.r`

**<mark>When your Account was initially setup you would have been provided with an Account Security Key</mark>**


#### What is a Tenant Security Key
Tenant Security Keys have the ability to manage everything for the Tenant.
The actual capabilies of a Tenant Security Key are dependent on the **Tenant Roles** that are assigned to it.

The following **Tenant Roles** are available:

Tenant Role Name | Description
-|-
`t.g.super` | Tenant Gobal Admin - Global read + write access to all aspects of Tenant
`t.comp.a` | Tenant Information Management read + write access
`t.comp.r` | Tenant Information Management read access
`t.psp.r` | Provider Management read access
`t.psp.a` | Provider Management read + write access
`t.sch.r` | Scheme Management read access
`t.sch.a` | Scheme Management read + write access
`t.key.r` | Security Key Management read access
`t.key.a` | Security Key read + write access
`t.whk.r` | Webhook Management read access
`t.whk.a` | Webhook read + write access
`t.cat.r` | Catalog Management read access
`t.col.a` | Collection Management read + write access
`t.col.r` | Collection Management read access
`t.po.a` | Payout Management read + write access
`t.po.r` | Payout Management read access


A Tenant Security Key can have multiple roles assigned to it as are deemed necessary for the capabilities your require.

Some example scenarios are shown below but you can add which ever role combinations you require.

Scenario | Roles required 
-|-
Manage Schemes | `t.sch.a`
Manage Provider Configurations | `t.psp.a`
Read only access to Schemes | `t.sch.r`


#### Adding a Security Key
When adding a Security Key, the response from the API will contain the new Private Key value. This Private Key will only be issued once and should be stored securely.

When choosing the roles to apply to a Security Key, only select the minimum to satisfy the requirements of the Security Keys intented purpose.

This applies to both Account and Tenant Security Keys.



#### Revoking a Security Key
If a Security Key is no longer used or required, or if you know or suspect a Security Key has been compromised then you can delete the Security Key.
Access will be blocked immediately. 

This applies to both Account and Tenant Security Keys.



#### Multiple Security Keys
Both Accounts and Tenants can have multiple Security Keys attributed to them.

You should setup and use multiple Security Keys if you have many applications accessing the Imburse Platform. 

Multiple Security Keys will give you granular control over the capabilities the Keys have. 
For example one application my need to **create** Tenants whilst another may only need to **read** the Tenants.


# Marketplace
The Marketplace is the place to go to find, add, and configure the various App integrations your Tenant needs.

Current App integrations include:

##### Collections

- **Braintree Payments** - Credit card and PayPal
- **Paydirekt** - Germany only payment method

##### Payouts
- **Tango Card** - Worldwide gift card rewards


# Apps
The [Marketplace](#marketplace) contains many Apps integrations and you will need to add at least one App integration into your Tenant to start collecting or paying out money.

Only one instance of an App integration can be configured per Tenant.

An App configuration, in most cases, will hold a set of credentials that grant Imburse the permission to connect to the provider and transact on your behalf.

The exact requirements for each App will vary from App to App. See the [Marketplace API](/pages/guides/marketplace) for more details.


# Rewards Catalog
The Rewards Catalog is a searchable catalog of the gift cards and rewards offered by all Imburses' reward partners - in one place. 

The API has calls that allow you to view the items in the rewards catalog, along with the details you will need for ordering items and displaying item information.

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
You can search the Rewards Catalog by provider name, brand name, countries, currency, and amount. If you don't provide any filtering parameters then your will be returned all the items in the catalog.

If you search by amount, we will search for any rewards that are of a fixed value of your amount specified or where your amount falls with a rewards' min and max values. 

The table below shows some examples and the results when searching for rewards that support a €15.00 value:

\# | Range or Fixed | Min Value | Max Value | Reward is Valid?
-|-|-|-
1 | Range | €1.00 | €500.00 | Yes
2 | Range | €20.00 | €50.00 | No
3 | Fixed | €15.00 | €15.00 | Yes
4 | Fixed | €10.00 | €10.00 | No





# Collection Schemes
A Collection Scheme is an arrangement of Rules that dictate the collection options available to your customers.

#### Structure of a Collection Scheme

<img src="/assets/images/guides/getting-started/collection-scheme-hierarchy.png" style="width:450px;" title="Collection Scheme heirarchy" alt="Collection Scheme heirarchy"/>

A Collection Scheme is made up of one or more **Rules**. A Rule describes the **countries**, **currencies**, and **value** range the configured Apps will be valid for.

Within each Rule are **Configurations** that further describe which Apps to use in the Rule and any optional payment methods that should be excluded from the results.

Rules give you fine grained, flexible control to tune the available payment methods to your customers.

A Collection Scheme can be configured to have many Rules.

We've outlined some sample rules below that could be configured. Our scenarios assume the Braintree App has been added to a Tenant.

#### Sample Rules
- I want to offer all Braintree payment options to customers in any country, any currency, and any value
- I want to offer all Braintree payment options, **except** `Amex` card, to customers in any country, any currency, and values from 1 to 999
- I want to offer only `Amex` card to customers in any country, any currency, and values from 1000 upwards
- I want to offer only `PayPal` card to customers in any country, only `EUR` currency, and any value




# Payout Schemes
A Payout Scheme is an arrangement of [Provider Configurations](/pages/guides/getting-started/what-is-a-provider-configuration) and associated settings that dictate the payout options available to your customers.

A Payout Scheme can be configured to concurrently use multiple [Provider Configurations](/pages/guides/getting-started/what-is-a-provider-configuration) such as Tangocard as well as supporting multiple countries and multiple currencies.

When you create a Payout Scheme, you specify the Provider Configurations you want the scheme to use. 

To control the payment options for each country you configure one or more Country Settings.

#### Country Settings
Country Settings give you fine grained, flexible control to tune the payment options for specific countries.

For example, use a Country Setting to configure specific Rewards for customers in a particular country.




# Webhooks
Webhooks, also known as Web Callbacks or an HTTP push API, is a way for an application to provide other applications with near real-time information.

Imburse use Webhooks to allow us to provide real-time alerting to your systems. 

For example, you could create a webhook that will subscribe to `Payment Settled` event. Everytime that event occurs in the Imburse platform, Imburse will perform a callback to your specified webhook url.

We have many events that you can subscribe, all are documented in the [Webhook API documentation](https://api-docs.imbursepayments.com/#2d3ce1f5-408c-461c-ab73-f2ffb2f3cf35).
