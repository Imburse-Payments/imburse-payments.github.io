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
# Creating a Management Token

Tenant configuration, setting up customer collections, and customer payout payments are all executed with a Management bearer token. 

In order to generate a Management bearer token you must first generate a Tenant API key. This can be done at an Account level with an Account bearer token.

To create a new public and private key use the following api call. 

`POST /management/v1/tenant/{tenantId}/keys`

The `roles` that would be specified in the body are used to API access control. We recommend you generate multiple Tenant API keys with different roles rather than reuse the same key for all operations.

**<mark>Note: The private key is only ever returned once during creation. You will need need to save in a secure place. It will never be revealed again</mark>**