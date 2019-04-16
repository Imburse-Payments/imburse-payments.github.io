---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 12, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started-setting-up-provider-configurations
nextsection_label: Setting up Provider Configurations
---
# Creating a Tenant Security Key
After creating your new `Tenant`, you now need to create a `Tenant Security Key`. This will allow you to setup your tenant configuration. ie. Schemes, Provider Configurations, etc.

Use the bearer token you aquired in the [Authentication step](/pages/guides/getting-started-authentication) to generate a `Tenant Security Key`. 

To create a `Tenant Security Key` use the following api call. 

`POST /management/v1/tenant/{tenantId}/keys`

The `roles` that would be specified in the body are used for API access control. We recommend you generate multiple `Tenant Security Keys` with different roles rather than have one that has access to everything.

**<mark>Note: The private key is only ever returned once during creation. You will need need to save in a secure place. It will never be revealed again</mark>**

For more information on managing `Tenant Security Keys`, see our [Security Key API Reference](https://api-docs.imbursepayments.com/#b195ab08-dd5a-4639-b975-f9842b87e7b5)
