---
layout: default
title: Tenant API Keys
toc: getting-started-tenant-api-keys
body_color: body-primary
section_name: Tenant API Keys
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Tenant API Keys
The Tenant API Key API functions allow a user to perform Tenant API Key administration tasks.

## Access Requirements
You will need a Tenant API Key to perform Tenant Management functions.

For more information on creating a Management Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token/)

## Functions
The available functions are:

- Create new Keys
- Get a list of all Keys
- Get a key by its Public Key value
- Delete a Key

## API Documentation
All the Account Management API functions are fully documented in the [Tenant API documentation](https://api-docs.imbursepayments.com/#2db95add-3a76-4424-ada5-fa1fc865011c).

## Models
The following models are used to manage Tenant API Keys.

### API Key Model
```json
{
	"accountId": "string",
	"tenantId": "string",
	"publicKey": "string",
	"privateKey": "string",
	"roles": [ "string" ]
}
```

Property | Type | Mandatory | Description
-|-
`accountId` | string | Yes | The Id of the Account that owns the Tenant.
`tenantId` | string | No | The Tenant Id this Key belongs to.
`publicKey` | string | Yes | The Public Key portion of the API Key.
`privateKey` | string | Yes | The Private Key portion of the API Key.<br/><br/>**<mark>The Private Key value cannot be retrieved once created<br/>so it's important this is stored somewhere safe.</mark>**
`roles` | Array of strings | Yes | The roles given to this Key.


**Creating New Keys**<br/>
Creating a new key will return the Private Key value in the response object.

<mark>This Private Key value cannot be retrieved again so it's imperative you store the Private Key value somewhere safe once created.</mark>


**Deleting a Key**<br/>
Deleting a Key will immediately prohibit that keys access to ALL APIS.

<mark>This action cannot be undone.</mark>