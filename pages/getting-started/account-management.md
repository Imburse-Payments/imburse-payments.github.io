---
layout: default
title: Account Management
toc: getting-started-account-management
body_color: body-primary
section_name: Account Management
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Account Management
The Account Management API functions allow a user to perform both Account level and *limited* Tenant level administration tasks.

## Access Requirements
You will need an Account API Key to perform Account Management functions.

For more information on creating a Access Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Access Token](/pages/tutorials/get-access-token/)

## Functions
The Account functions can be broken down into to levels:

- Account level functions
- Tenant level functions

##### The Account level functions available are:

- Get Account details
- Create new Keys
- Get a list of all Keys
- Get a key by its Public Key value
- Update a Key
- Delete a Key
- Get License History

##### The Tenant functions available from your Account are:

- Create new Tenants
- Get a list of all Tenants
- Get a Tenant by its Id
- Update a Tenant
- Delete a Tenant
- Create new Tenant API Keys
- Get a list of all Tenant API Keys
- Get a Tenant API Key by its Public Key value
- Update a Tenant API Key
- Delete a Tenant API Key

**Note:** - The Tenant functions available to an Account are limited to Tenant creation / deletion and Tenant API Keys only.

For configuring Schemes, Apps, Reward Groups, and other Tenant objects, you must use a **Tenant API Key**.


## API Documentation
All the Account Management API functions are fully documented in the [Account API documentation](https://api-docs.imbursepayments.com/?version=latest#456e7322-a286-48bd-83ce-c60cb2a288dc).

## Models
The following models are used to define Accounts, Tenants, and API Keys.

### Account Model
```json
{
  "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "imburseAccountRef": "string",
  "companyName": "string",
  "billingContactFirstName": "string",
  "billingContactLastName": "string",
  "billingContactAddress": {
    "streetAddress": "string",
    "extendedAddress": "string",
    "locality": "string",
    "region": "string",
    "postCode": "string",
    "country": "string"
  },
  "license": {
    "licenseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "licenseName": "string",
    "maxTenants": 0,
    "maxTransactions": 0,
    "maxCollectApps": 0,
    "maxPayoutApps": 0
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
`tenantCreationRequiresApproval` | boolean | Yes | When set to `true`, new tenants will have to go through<br/>an approval process.<br/><br/>Users with the role `account-tenant-approval`<br/>can see and approve or reject the new tenant.
`license` | [License Model](#license-model) | n/a | Your organizations current license details.

### Address Model
```json
{
    "streetAddress": "string",
    "extendedStreetAddress": "string",
    "locality": "string",
    "region": "string",
    "postCode": "string",
    "country": "string",
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


### License Model
```json
{
	"licenseId": "string",
	"licenseName": "string",
	"maxTenants": 0,
	"maxTransactions": 0,
	"maxCollectApps": 0,
	"maxPayoutApps": 0
}
```

Property | Type | Description
-|-
`licenseId` | string | The license Id.
`licenseName` | string | The license name.
`maxTenants` | string |  Max number of tenants for this license.
`maxTransactions` | string | Max number of transactions your license entitles you to.<br/><br/>A value of `-1` indicates unlimited.
`maxCollectApps` | string | Max number of apps allowing collections your license entitles you to.<br/><br/>A value of `-1` indicates unlimited.
`maxPayoutApps` | string | Max number of apps allowing payouts your license entitles you to.<br/><br/>A value of `-1` indicates unlimited.

### API Key Model
This model applies to both Account API Keys and Tenant API Keys.

```json
{
	"accountId": "string",
	"tenantId": "string",
	"name": "string",
	"publicKey": "string",
	"privateKey": "string",
	"roles": [ "string" ]
}
```


Property | Type | Mandatory | Description
-|-
`accountId` | string | Yes | The Id of the Account that owns the key.<br/><br/>**<mark>Only applicable to Account API Keys.</mark>**
`tenantId` | string | No | The Id of the Tenant that owns the key.<br/><br/>**<mark>Only applicable to Tenant API Keys.</mark>**
`name` | string | Yes | A friendly name for this Key.<br/><br/>**<mark>If no name is specified a default name of `API Key` will be set.</mark>**
`publicKey` | string | Yes | The Public Key portion of the API Key.
`privateKey` | string | Yes | The Private Key portion of the API Key.<br/><br/>**<mark>The Private Key value cannot be retrieved after creation<br/>so it's important it is captured and stored somewhere safe.</mark>**
`roles` | Array of strings | Yes | The roles given to this Key.<br/>These will be either [Account Roles](#account-roles) or [Tenant Roles](#tenant-roles).

### Tenant Model
```json
{
	"id": "string",
	"accountId": "string",
	"name": "string",
	"address": {
		"streetAddress": "string",
		"extendedStreetAddress": "string",
		"locality": "string",
		"region": "string",
		"postCode": "string",
		"country": "string"
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

Your Account is set up by Imburse upon registration.

### Account API Keys
When your Account was initially set up you would have been issued with an Account API Key to allow you to access the APIs.

You can set up additional Account API Keys as you require.

**<mark>Important - Creating an Account API Key will generate your Public Key and Private Key values. The Private Key value cannot be retrieved after creation so it's important it is captured and stored somewhere safe.</mark>**

##### Account Roles
The capabilities of an Account API Key are dependent on the **Account Roles** that are assigned to it. The following table shows the **Account Roles** that are available:

Account Role Name | Description
-|-
`account-admin` | Account Admin - Read + write access to **all** aspects of an Account
`account-management-read` | Account Management read access
`account-management-write` | Account Management read + write access
`account-api-key-read` | API Key Management read access
`account-api-key-write` | API Key Management read + write access
`account-tenant-read` | Tenant Management read access
`account-tenant-write` | Tenant Management read + write access
`account-tenant-approval` | Users can approve new Tenant requests.<br/><br/>Only applies to Accounts that have `tenantCreationRequiresApproval` set to `true`

An Account API Key can have multiple roles assigned to provide the required access.

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

**<mark>Important - Creating a Tenant API Key will generate you Public Key and Private Key values. The Private Key value cannot be retrieved after creation so it's important it is captured and stored somewhere safe.</mark>**

##### Tenant Roles
The following **Tenant Roles** are available:

Tenant Role Name | Description
-|-
`tenant-admin` | Tenant Admin - Read + write access to **all** aspects of a Tenant
`tenant-management-read` | Tenant Information read access
`tenant-management-write` | Tenant Information read + write access
`tenant-app-read` | Apps read access
`tenant-app-write` | Apps read + write access
`tenant-collect-scheme-read` | Collect Schemes read access
`tenant-collect-scheme-write` | Collect Schemes read + write access
`tenant-payout-scheme-read` | Payout Schemes read access
`tenant-payout-scheme-write` | Payout Schemes read + write access
`tenant-api-key-read` | API Keys read access
`tenant-api-key-write` | API Keys read + write access
`tenant-webhook-read` | Webhooks read access
`tenant-webhook-write` | Webhooks read + write access
`tenant-reward-group-read` | Reward Groups read access
`tenant-reward-group-write` | Reward Groups write access
`tenant-catalog-read` | Catalog read access
`tenant-transaction-read` | Transactions read access
`tenant-transaction-write` | Transactions read + write access

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

Conversely, you could also create just one Tenant API Key that has permissions to create further Tenant API Keys; in effect making the Tenant fully independent from the Account holder and able to self provision within the Tenant.

