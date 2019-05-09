---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 20, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started/authentication
nextsection_label: Authentication
---
# What is a Collection Scheme?
A Collection Scheme is an arrangement of [Provider Configurations](/pages/guides/getting-started/what-is-a-provider-configuration) and associated settings that dictate the available collection options available to your customers.

A scheme can be configured to concurrently use multiple [Provider Configurations](/pages/guides/getting-started/what-is-a-provider-configuration) such as Braintree and PayDirekt, as well as supporting multiple countries and multiple currencies.

When you create a Collection Scheme, you specify the Provider Configurations you want the scheme to use. 
The implication of adding Provider Configurations to your scheme is that you want **ALL** the payment options that the providers offer to be available to your customers in any country that the providers operate in. 

For granular control over available payment options, either globally or country specific, you can configure one or more Scheme Overrides.

#### Collection Scheme Overrides
Scheme Overrides give you fine grained, flexible control to tune the payment options for specific countries.

A Scheme Override can be configured to turn **on** or **off** a particuar payment option for a specific country or even globally.

Using Braintree as an example, we've outlined some sample scenarios below where Scheme Overrides could be used. Braintree are a provider that offer the `American Express`,`Discover`,`Maestro`,`Mastercard`,and `Visa`. They operate globally.

#### Scenarios
- I want to offer to my customers **all** the Braintree payment options **except** `Discover` cards 
- I want to offer to my customers **all** the Braintree payment options **except** `Discover` cards, which I want to offer in **Germany only**

You can add as many Scheme Overrides to your Scheme as necessary to refine the available payment options.

