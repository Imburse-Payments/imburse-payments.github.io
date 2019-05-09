---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 12, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started-setting-up-schemes
nextsection_label: Setting up Schemes
---
# Setting up Provider Configurations

Provider Configuration allows you to specify the connection details for a given provider ie. Braintree, Tangocard, etc.

The Provider Configuration permits Imburse to transact with that provider on your behalf.

As an example, if you wanted to create a Provider Configuration for you Braintree account you would use the following API call:

`POST /management/v1/payment-provider-configurations/braintree-sdk`

Similarly, for Tangocard:

`POST /management/v1/reward-provider-configurations/tangocard`

Different providers have different requirements. The provider specific API calls are all documented in our [Provider Configurations](https://api-docs.imbursepayments.com/#898cf1d0-5846-4398-82aa-901094e172f9)

For more information on managing `Provider Configurations`, see our [Provider Configurations API Reference](https://api-docs.imbursepayments.com/#898cf1d0-5846-4398-82aa-901094e172f9)
