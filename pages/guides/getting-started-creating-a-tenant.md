---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 12, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started-creating-a-management-token
nextsection_label: Creating a Management Token
---
# Creating a Tenant

An Account can have many Tenants. You can consider a Tenant as either a company, department, or organisation. 
It's an entity used for administering collection and payout schemes, payment provider configurations, webhooks and other aspects of configuration. 

Companies looking to resell our service should treat a Tenant within Imburse as a client within their own systems. Tenants do not share information with each other and should be seen as a self contained entity within a multi-tenancy system. 
Only an `Tenant Security Key` can directly manage a Tenant.

You are able to create new Tenants using the following API call:

`POST /management/v1/account/tenants`

**Importantly, an `Account Security Key` is required to create Tenants but this key cannot be used to manage any Tenant configuration; a `Tenant Security Key` would be required for this.**

