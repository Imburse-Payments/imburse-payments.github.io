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
An Account can have many Tenants. You can consider a Tenant as either a company, department, or organisation. The example below shows the relationship between an `Account` and `Tenant`.

```
Account
   --> Tenant 1
   --> Tenant 2
   ...
   --> Tenant X
```

A Tenant holds the configuration for its' `Schemes`, `Provider Configurations`, `Webhooks`, `White label Settings`, etc.

Companies looking to resell our service should treat a `Tenant` within Imburse as a client within their own systems. 
Tenants do not share information with each other and should be seen as a self contained entity within a multi-tenancy system. 
Only a `Tenant Security Key` can directly manage a Tenant.

New Tenants can be created using the following API call:

`POST /management/v1/account/tenants`

For more information on managing `Tenant`, see our [Tenant API Reference](https://api-docs.imbursepayments.com/#b195ab08-dd5a-4639-b975-f9842b87e7b5)
