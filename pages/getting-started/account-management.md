---
layout: default
title: Getting Started
toc: getting-started-account-management
body_color: body-primary
section_name: Getting Started
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Account Management
The Account Management API functions allow a user to perform both Account level and *limited* Tenant level administration tasks.

## Access Requirements
You will need an Account API Key to perform Account Management functions.

## Functions
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
- Create new Tenant API Keys
- Get a list of all Tenant API Keys
- Get a Tenant API Key by its Public Key value
- Delete a Tenant API Key

**Note:** - The Tenant functions available to an Account are limited to Tenant creation and Tenant API Keys only.

For configuring Schemes, Apps, and other Tenant objects, you must use a **Tenant API Key**.


## API Documentation
All the Account Management API functions are fully documented in the [Account API documentation](https://api-docs.imbursepayments.com/#d4a8fee4-7343-464f-9b3f-bf42e81619e2).

## Models
The following models are used to define Accounts, Tenants, and API Keys.

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

### API Key Model
This model applies to both Account API Keys and Tenant API Keys.

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
`accountId` | string | Yes | The Id of the Account that owns the key.<br/><br/>**<mark>Only applicable to Account API Keys.</mark>**
`tenantId` | string | No | The Id of the Tenant that owns the key.<br/><br/>**<mark>Only applicable to Tenant API Keys.</mark>**
`publicKey` | string | Yes | The Public Key portion of the API Key.
`privateKey` | string | Yes | The Private Key portion of the API Key.<br/><br/>**<mark>The Private Key value cannot be retrived once created<br/>so it's important this is captured and stored somewhere safely.</mark>**
`roles` | Array of strings | Yes | The roles given to this Key.<br/>These will be either [Account Roles](#account-roles) or [Tenant Roles](#tenant-roles).

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
`accountId` | Guid | Yes | The Id of the Account this Tenant is owned by.
`name` | string | Yes | The Tenant name.
`address` | [Address](#address-model) model | Yes | The Tenants address.

## Account Setup
An Account has access to four main components:

- Account
- Account API Keys
- Tenants
- Tenant API Keys

The diagram below shows the relationship between these four components.

<img src="/assets/images/guides/getting-started/account-breakdown.png" style="width:600px;" title="Account" alt="Account"/>

### Account
The Account is the root of the system. The Account API Keys and Tenants are child objects of the Account.

Your Account is setup by Imburse upon registration.

### Account API Keys
When your Account was initially setup you would have been issued with an Account API Key to allow you to access the APIs.

You can setup additional Account API Keys as you require.

**<mark>Important - Creating an Account API Key will generate your Public Key and Private Key values. The Private Key value cannot be retrived after creation so it's important this is safely stored.</mark>**

##### Account Roles
The capabilies of an Account API Key are dependent on the **Account Roles** that are assigned to it. The following table shows the **Account Roles** that are available:

Account Role Name | Description
-|-
`acc.g.super` | Account Gobal Admin - Global read + write access to all aspects of Accounts
`acc.r` | Account Management read access
`acc.a` | Account Management read + write access
`acc.key.r` | API Key Management read access
`acc.key.a` | API Key Management read + write access
`acc.t.r` | Tenant Management read access
`acc.t.a` | Tenant Management read + write access

An Account API Key can have multiple roles assigned to provide the access needed.

##### Adding an Account API Key
When adding an API Key, the response from the API will contain the new Private Key value. This Private Key will only be issued once and should be stored securely.

When choosing the roles to apply to an API Key, only select the minimum to satisfy the requirements of the intended purpose.


##### Deleting an Account API Key
Deleting a Key will immediately revoke access to ALL APIs.

**<mark>This action cannot be undone.</mark>**

### Tenants
You can consider a Tenant as either a company, department, or organization.

You can add as many Tenants to your Account as you require.

A Tenant cannot be deleted once created.

##### Tenant API Keys
A Tenant can have as many Tenant API Keys as you require.

**<mark>Important - Creating a Tenant API Key will generate you Public Key and Private Key values. The Private Key value cannot be retrived after creation so it's important this is stored somewhere safe.</mark>**

##### Tenant Roles
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
`t.key.r` | API Key Management read access
`t.key.a` | API Key read + write access
`t.whk.r` | Webhook Management read access
`t.whk.a` | Webhook read + write access
`t.cat.r` | Catalog Management read access
`t.col.a` | Collection Management read + write access
`t.col.r` | Collection Management read access
`t.po.a` | Payout Management read + write access
`t.po.r` | Payout Management read access

A Tenant API Key can have multiple roles assigned to it as are deemed necessary for the capabilities your require.

##### Adding a Tenant API Key
When adding an API Key, the response from the API will contain the new Private Key value. This Private Key will only be issued once and should be stored securely.

When choosing the roles to apply to an API Key, only select the minimum to satisfy the requirements of the API Keys intended purpose.

##### Deleting a Tenant API Key
Deleting a Key will immediately revoke access to ALL APIs.

**<mark>This action cannot be undone.</mark>**

## Key Management Strategy
As the Account holder, you can control the creation of Tenant API Keys and the permissions they have.

Depending upon the nature of your business, you may want to restrict what your Tenants can do by only creating Tenant API Keys with limited functionality; including restricting a Tenant from creating their own keys.

Conversly, you could also create just one Tenant API Key that has permissions to create further Tenant API Keys; in effect making the Tenant fully independent from the Account holder and able to self provision within the Tenant.

