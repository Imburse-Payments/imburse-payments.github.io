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
# Account Management
The Account Management API functions allow a user to perform both Account level and Tenant level administration tasks.

## Access Requirements
You will need an Account Security Key to perform Account Management functions.

## Account functions
The Account functions can be broken down into to levels:

- Account level functions
- Tenant level functions

##### The Account level functions available are:

- Get Account details
- Create new Keys
- Get a list of all Keys
- Get a key by its Public Key value
- Delete a Key

##### The Tenant functions available from your Account are:

- Create new Tenants
- Get a list of all Tenants
- Get a Tenant by its Id
- Update a Tenant
- Create new Tenant Security Keys
- Get a list of all Tenant Security Keys
- Get a Tenant Security Key by its Public Key value
- Delete a Tenant Security Key

**Note:** - The Tenant functions available to an Account are limited to Tenant creation and Tenant Security Keys only.
For Collection and Payout Schemes, Provider Configurations, and other Tenant configuration management you must use a Tenant Security Key.


## Account API Documentation
All the Account Management API functions are fully documented in the [Account API documentation](https://api-docs.imbursepayments.com/#d4a8fee4-7343-464f-9b3f-bf42e81619e2).

## Models
The following models are used to define a Accounts, Tenants, and Security Keys.

### Account Model
```json
{
	"accountId": "",
	"imburseAccountRef": "",
	"companyName": "",
	"billingContactFirstName": "",
	"billingContactLastName": "",
	"billingContactAddress": {
		"streetAddress": "",
		"extendedStreetAddress": "",
		"locality": "",
		"region": "",
		"postCode": "",
		"country": "",
	}
}
```

Property | Type | Mandatory | Description
-|-
`accountId` | Guid | Yes | The Id for the Account.
`imburseAccountRef` | string | Yes | Your Imburse account reference.
`companyName` | string | Yes | Your organizations name.
`billingContactFirstName` | string | Yes | First name of your billing contact name.
`billingContactLastName` | string | Yes | Last name of your billing contact name.
`billingContactAddress` | [Address](#address-model) model | Yes | Your organizations billing address.

### Address Model
```json
{
    "streetAddress": "",
    "extendedStreetAddress": "",
    "locality": "",
    "region": "",
    "postCode": "",
    "country": "",
}
```

Property | Type | Mandatory | Description
-|-
`streetAddress` | string | Yes | Street address of your organization.
`extendedStreetAddress` | string | No | Extended / 2nd line of the street address of your organization.
`locality` | string | Yes | Town or City of your organizations address.
`region` | string | Yes | Region / Country / State of your organizations address.
`postCode` | string | Yes | Post Code / Zip Code of your organizations address.
`country` | string | Yes | The country of your organizations address.

### Security Key Model
This model applies to both Account Security Keys and Tenant Security Keys.

```json
{
	"accountId": "",
	"tenantId": "",
	"publicKey": "",
	"privateKey": "",
	"roles": []
}
```

Property | Type | Mandatory | Description
-|-
`accountId` | string | Yes | The Id of the Account that created the Key.
`tenantId` | string | No | The Tenant Id this Key belongs to.<br/><br/>**<mark>Only applicable to Tenant Security Keys.</mark>**
`publicKey` | string | Yes | The Public Key portion of the Security Key.
`privateKey` | string | Yes | The Private Key portion of the Security Key.<br/><br/>**<mark>The Private Key value cannot be retrived once created<br/>so it's importantthis stored somewhere safe.</mark>**
`roles` | Array of strings | Yes | The roles given to this Key.

### Tenant Model
```json
{
	"id": "",
	"accountId": "",
	"name": "",
	"address": {
		"streetAddress": "",
		"extendedStreetAddress": "",
		"locality": "",
		"region": "",
		"postCode": "",
		"country": ""
	}
}
```

Property | Type | Mandatory | Description
-|-
`id` | Guid | Yes | The Tenant Id.
`accountId` | Guid | Yes | The Account Id this Tenant is owned by.
`name` | string | Yes | The Tenant name.
`address` | [Address](#address-model) model | Yes | The Tenants address.

## Account Setup
An Account has access to four main components:

- Account
- Account Security Keys
- Tenants
- Tenant Security Keys

The diagram below shows the relationship between these four components.

<img src="/assets/images/guides/getting-started/account-breakdown.png" style="width:600px;" title="Account" alt="Account"/>

### Account
The Account is the root of the system. The Account Security Keys and Tenants are child objects of the Account.

Your Account is setup by Imburse upon registration.

### Account Security Keys
When your Account was initially setup by Imburse you would have been issued with an Account Security Keys to allow you to access the APIs.

You can setup as many additional Account Security Keys as you require.

**<mark>Important - Creating an Account Security Key will generate you Public Key and Private Key values. The Private Key value cannot be retrived after creation<br/>so it's important this is stored somewhere safe.</mark>**

##### Deleting an Account Security Key
Deleting a Key will immediately revoke access to ALL APIS.

**<mark>This action cannot be undone.</mark>**

### Tenants
You can consider a Tenant as either a company, department, or organisation.

You can add as many Tenants to your Account as you require.

A Tenant cannot be deleted once created.

### Tenant Security Keys
A Tenant can have as many Tenant Security Keys as you require.

**<mark>Important - Creating a Tenant Security Key will generate you Public Key and Private Key values. The Private Key value cannot be retrived after creation<br/>so it's important this is stored somewhere safe.</mark>**

##### Deleting a Tenant Security Key
Deleting a Key will immediately revoke access to ALL APIS.

**<mark>This action cannot be undone.</mark>**


## Key Management Strategy
As the Account holder, you can control the creation of Tenant Security Keys and the permissions they have.

Depending upon the nature of your business, you may want to restrict what your Tenants can do by only creating Tenant Security Keys with limited functionality; including restricting a Tenant from creating their own keys.

Conversly, you could also create just one Tenant Security Key that has permissions to create further Tenant Security Keys; in effect making the Tenant fully independent from the Account holder and able to self provision within the Tenant.