---
layout: default
title: Getting Started
toc: getting-started
body_color: body-orange
section_name: Getting Started
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Account Management
The Account Management API functions allow a user to perform both Account level and Tenant level administration tasks.

## Access Requirements
You will need an Account API Key to perform Account Management functions.

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
- Create new Tenant API Keys
- Get a list of all Tenant API Keys
- Get a Tenant API Key by its Public Key value
- Delete a Tenant API Key

**Note:** - The Tenant functions available to an Account are limited to Tenant creation and Tenant API Keys only.
For Collection and Payout Schemes, Provider Configurations, and other Tenant configuration management you must use a Tenant API Key.


## Account API Documentation
All the Account Management API functions are fully documented in the [Account API documentation](https://api-docs.imbursepayments.com/#d4a8fee4-7343-464f-9b3f-bf42e81619e2).

## Models
The following models are used to define a Accounts, Tenants, and API Keys.

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
`accountId` | string | Yes | The Id of the Account that created the Key.
`tenantId` | string | No | The Tenant Id this Key belongs to.<br/><br/>**<mark>Only applicable to Tenant API Keys.</mark>**
`publicKey` | string | Yes | The Public Key portion of the API Key.
`privateKey` | string | Yes | The Private Key portion of the API Key.<br/><br/>**<mark>The Private Key value cannot be retrived once created<br/>so it's importantthis stored somewhere safe.</mark>**
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
- Account API Keys
- Tenants
- Tenant API Keys

The diagram below shows the relationship between these four components.

<img src="/assets/images/guides/getting-started/account-breakdown.png" style="width:600px;" title="Account" alt="Account"/>

### Account
The Account is the root of the system. The Account API Keys and Tenants are child objects of the Account.

Your Account is setup by Imburse upon registration.

### Account API Keys
When your Account was initially setup by Imburse you would have been issued with an Account API Keys to allow you to access the APIs.

You can setup as many additional Account API Keys as you require.

**<mark>Important - Creating an Account API Key will generate you Public Key and Private Key values. The Private Key value cannot be retrived after creation<br/>so it's important this is stored somewhere safe.</mark>**

##### Deleting an Account API Key
Deleting a Key will immediately revoke access to ALL APIS.

**<mark>This action cannot be undone.</mark>**

### Tenants
You can consider a Tenant as either a company, department, or organisation.

You can add as many Tenants to your Account as you require.

A Tenant cannot be deleted once created.

### Tenant API Keys
A Tenant can have as many Tenant API Keys as you require.

**<mark>Important - Creating a Tenant API Key will generate you Public Key and Private Key values. The Private Key value cannot be retrived after creation<br/>so it's important this is stored somewhere safe.</mark>**

##### Deleting a Tenant API Key
Deleting a Key will immediately revoke access to ALL APIS.

**<mark>This action cannot be undone.</mark>**


## Key Management Strategy
As the Account holder, you can control the creation of Tenant API Keys and the permissions they have.

Depending upon the nature of your business, you may want to restrict what your Tenants can do by only creating Tenant API Keys with limited functionality; including restricting a Tenant from creating their own keys.

Conversly, you could also create just one Tenant API Key that has permissions to create further Tenant API Keys; in effect making the Tenant fully independent from the Account holder and able to self provision within the Tenant.





# Tenant Management
The Tenant Management API functions allow a user to perform Tenant API Key administration tasks only.

For Collection and Payout Schemes, Provider Configurations, and other Tenant configuration management, see the appropriate Management documentation on the right.

## Access Requirements
You will need a Tenant API Key to perform Tenant Management functions.

## Tenant API Keys functions
The Tenant API Key functions available are:

- Create new Keys
- Get a list of all Keys
- Get a key by its Public Key value
- Delete a Key

## Tenant API Documentation
All the Account Management API functions are fully documented in the [Tenant API documentation](https://api-docs.imbursepayments.com/#2db95add-3a76-4424-ada5-fa1fc865011c).

## Models
The following models are used to manage Tenant API Keys.

### API Key Model
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
`accountId` | string | Yes | The Id of the Account that owns the Tenant.
`tenantId` | string | No | The Tenant Id this Key belongs to.
`publicKey` | string | Yes | The Public Key portion of the API Key.
`privateKey` | string | Yes | The Private Key portion of the API Key.<br/><br/>**<mark>The Private Key value cannot be retrived once created<br/>so it's important this is stored somewhere safe.</mark>**
`roles` | Array of strings | Yes | The roles given to this Key.


**Creating New Keys**<br/>
Creating a new key will return the Private Key value in the response object.

<mark>This Private Key value cannot be retrived again so it's imperitive you store the Private Key value somewhere safe once created.</mark>


**Deleting a Key**<br/>
Deleting a Key will immediately prohibit that keys access to ALL APIS.

<mark>This action cannot be undone.</mark>






# App Management
The App Management API functions allow you to install and configure Apps for various integrations.

App integrations permit Imburse to transact with the Apps provider on your behalf.

## Access Requirements
You will need a Tenant API Key to perform Provider Configuration Management functions.

## App integration functions
Each App supported by Imburse has its own unique API endpoints. Some Apps have additional App specific functionality.
The App functions are:

### Braintree
- Install app
- Configure app
- Get an installed app
- Update an installed app

### Tango Card
- Install app
- Configure app
- Get an installed app
- Update an installed app

Additionally functions available for this App:

- Get the Tango Card account details inc. account balance

### General
- Get a List of Installed Apps


## Provider Configuration Setup

The diagram below shows the relationship between the components that make up a Provider Configuration. Using an example Braintree Provider Configuration configured with Credit Card and PayPal products and with a couple of Currency Settings.

<img src="/assets/images/guides/getting-started/provider-configuration-breakdown.png" style="width:600px;" title="Provider Configuration Components" alt="Provider Configuration Components"/>

Each Provider Configuration consists of three components in a heirarchy: **Provider Configuration**, **Product Settings**, and **Currency Settings**.

### Provider Configuration Component
Holds properties such as name, the provider, the list of products, and the configurations' unique Id

###### Provider Configuration Id
The Id is a unique identifier for each Provider Configuration. 

If you're getting or updating the Provider Configuration you will use the Id value as the key.

### Product Settings Component
Holds the connection details for a Product.

Some Providers, such as Braintree and Paydirekt support multiple products. ie. Braintree support Credit Cards and PayPal.

###### Product Id
The Id is a unique identifier for each product. 

If you're creating or updating a Scheme, the Id value is what you will need in the Schemes' Provider Configuration property to reference back to the correct Provider Product.

###### Naming your Products
The **Name** property of a Product you are configuring should be human readable. The name will appear in the Client Portal.


###### Enabling and Disabling a Product
An individual Product for a Provider Configuration can be enabled and disabled by setting the **Enabled** property to `true` or `false`.

When a Provider Configuration is Created or Updated, an enabled Product will be validated; a disabled product will not. 

A Product that is referenced in any Scheme cannot be disabled. First remove the Product from the list of Providers in the Scheme, then disable the Product.


### Currency Settings Component
Holds properties such as Currency Code and a list of countries the currency can be used in.

Each Product can have one or more Currency Settings attributed to it.


## Supported Providers
Imburse supports the following Providers:

Provider Name | Description
-|-
Braintree | Provids Credit Card and PayPal collection payment options. Operates in most countries
PayDirekt | Provides PayDireckt collection payment option. Operates in Germany only
Tango Card | Provider rewards / gift card payout options. Operates in most countries


## API Documentation
Different Providers have different requirements. The provider specific API calls are all documented in our [Provider Configurations](https://api-docs.imbursepayments.com/#898cf1d0-5846-4398-82aa-901094e172f9)

For more information on managing Provider Configurations, see our [Provider Configurations API Reference](https://api-docs.imbursepayments.com/#898cf1d0-5846-4398-82aa-901094e172f9)





# Collection Scheme Management
The Collection Scheme Management API functions allows you to setup and configure a Collection Scheme that define the available payment options available to your customers.

## Access Requirements
You will need a Tenant API Key to perform Collection Scheme Management functions.

## Collection Scheme API functions
The available Collection Scheme functions are:

- Create a Scheme
- Get a list of Schemes
- Get a Scheme
- Update a Scheme
- Delete a Scheme

## Collection Scheme API Documentation
All the Collection Scheme Management API functions are fully documented in the [Collection Scheme API documentation](https://api-docs.imbursepayments.com/#8ad29eec-f6ef-4c78-ad91-d57dba5f3843).

## Models
The following models are used to define a Collection Scheme.

### Scheme Model
```json
{ 
    "id": "",
	"name": "",
	"paymentProviderConfigurations": [],
	"overrides": [
		{
			"isGlobal": "",
			"country": "",
			"paymentProviderConfigurationId": "",
			"paymentMethod": "",
			"enabled": ""
		}
	]
}
```

Property | Type | Mandatory | Description
-|-
`id` | Guid | Yes | The Id for the Scheme.<br/>This is generated for you when<br/>creating a new Scheme.
`name` | string | Yes | A unique name for this scheme.
`paymentProviderConfigurations` | Guid array | Yes | The Id's of the Provider Configurations<br/>this Scheme uses.
`overrides` | Array of [Override models](#override-model) | No | Optional Overrides.

### Override Model
```json
{
    "isGlobal": "",
    "country": "",
    "paymentProviderConfigurationId": "",
    "paymentMethod": "",
    "enabled": ""
}
```

Property | Type | Mandatory | Description
-|-
`isGlobal` | boolean | Yes | `true` for Global Override. `false` for a Country Specific Override.
`country` | string | Yes | A Country Code for a Country Specific Override.<br/>Leave blank for a Global Override.
`paymentProviderConfigurationId` | Guid | Yes | The Id of the Provider Configuration this Override relates to.
`paymentMethod` | string | Yes | The payment method name ie. `visa`, `paypal`, etc.
`enabled` | boolean | Yes | Set to `true` to enable the payment option; set to `false` to disable the payment option.


## Scheme Setup
A Scheme consists of a two main components:

- Products
- Overrides

The diagram below shows these two components that make up a Collection Scheme.

<img src="/assets/images/guides/getting-started/collect-scheme-hierarchy.png" style="width:500px;" title="Collection Scheme" alt="Collection Scheme"/>

### Products
The Products component tells the Scheme which Products from your Provider Configurations to use.

##### Adding Products
Each Provider Configuration that you have has one or more Products. ie. A Braintree Configuration has two; Credit Cards and PayPal.
Each of those Products has an **Id** property. Use the Id property to build up your list of `paymentProviderConfigurations` that the Scheme has access to.

Duplicate Product Ids are not permitted in a Scheme.

You can have as many Products in your Scheme as you need.

##### Removing Products
You can remove a Product Id from the `paymentProviderConfigurations` property at anytime.

When removed, it will automatically remove any Overrides associated with the Product.

### Overrides
Add Overrides to your Scheme to explicitly control the payout options available to countries.

There are two types of Override:

Type | Purpose
-|-
Country Specific | Used to to set a payout option for a Specific Country. ie. Germany, GB, etc.
Global | Used to to set a payout option globally. ie. for any country.

An Override can be configured to turn **on** or **off** a particuar payment option, either for a Country Specific or Globally, by setting the `Enabled` property accordingly.

You can add as many Scheme Overrides to your Scheme as necessary to refine the available payment options to meet your requirements.


#### Override Evaluations
Overrides are evaluated in two stages:

1. Global Overides first
2. Country Specific Overrides second

This means you could add a Global Override to disable a payment option and then add another Country Specific Override to enable the same payment option back on.

The sequence you add the Overrides is not important; they can be added in any order.

##### Scenarios
Using Braintree as an example, we've outlined some sample scenarios below where Scheme Overrides could be used.

Scenario | Override Configuration
-|-
I want to offer to my customers **all** payment options<br/>**except** `Discover` cards | Create a Global Override with the following settings:<br/><br/>`isGlobal` set to `true`<br/>`paymentMethod` set to `discover`<br/>`enabled` set to `true`
 I want to offer to my customers **all** payment options<br/>**except** `Discover` cards, which I want to offer in **Germany only** | Create a Global Override with the following settings:<br/><br/>`isGlobal` set to `true`<br/>`paymentMethod` set to `discover`<br/>`enabled` set to `true`<br/><br/>Create a Country Specific Override with the following settings:<br/><br/>`isGlobal` set to `false`<br/>`country` set to `de`<br/>`paymentMethod` set to `discover`<br/>`enabled` set to `true`





# Payout Scheme Management
The Payout Scheme Management API functions allows you to setup and configure a Payout Scheme that define the available payout options available to your customers.

## Access Requirements
You will need a Tenant API Key to perform Collection Scheme Management functions.

## Payout Scheme API functions
The available Payout Scheme functions are:

- Create a Scheme
- Get a list of Schemes
- Get a Scheme
- Update a Scheme
- Delete a Scheme

## Payout Scheme API Documentation
All the Payout Scheme Management API functions are fully documented in the [Payout Scheme API documentation](https://api-docs.imbursepayments.com/#57551b22-20a1-4c0a-874c-9243c4a9eb10).

## Models
The following models are used to define a Payout Scheme.

### Scheme Model
```json
{
    "id": "",
    "name": "",
    "providers": [],
    "countrySettings": [
        {
            "country": "",
            "defaultCurrency": "",
            "rewardSettings": {
                "rewardIds": []
            }
        }
    ]
}
```

Property | Type | Mandatory | Description
-|-
`id` | Guid | Yes | The Id for the Scheme.<br/>This is generated for you when<br/>creating a new Scheme.
`name` | string | Yes | A unique name for this scheme.
`providers` | Guid array | Yes | The Id's of the Provider Configurations<br/>this Scheme uses.
`countrySettings` | Array of [Country Setting models](#country-setting-model) | Yes | An Array of Country Setting models that specify the<br/>payment options available for specific countries.

### Country Setting Model
```json
 {
    "country": "",
    "defaultCurrency": "",
    "rewardSettings": {
        "rewardIds": []
    }
}
```

Property | Type | Mandatory | Description
-|-
`country` | string | Yes | A Country Code
`defaultCurrency` | string | Yes | The default Currency Code for the Country.<br/>**Not currently used**.
`rewardSettings` | Array of [Reward Setting models](#reward-setting-model) | Yes | An array of Reward Setting models that<br/>define the rewards available for this country.


### Reward Setting Model
```json
 {
    "rewardIds": []
}
```

Property | Type | Mandatory | Description
-|-
`rewardIds` | Array of Guids | Yes | An array of Reward Ids that define the rewards available for this country.<br/>The rewards Id's come from searching the Reward Catalog.


## Scheme Setup
A Scheme consists of a two main components:

- Provider Configurations
- Country Settings

The diagram below shows these two components that make up a Payout Scheme.

<img src="/assets/images/guides/getting-started/payout-scheme-breakdown.png" style="width:800px;" title="Payout Scheme" alt="Payout Scheme"/>

### Providers 
The Providers component tells the Scheme which Providers from your Provider Configurations to use.

##### Adding Providers
Each Provider Configuration you have defined, such as Tangocard, has one or more Products.
Each of those Products has an **Id** property. Use the Id property to build up your list of `providers` that the Scheme has access to.

Duplicate Provider Ids are not permitted in a Scheme.

You can have as many Provider in your Scheme as you need.

##### Removing Providers
You can remove a Provider Id from the `providers` property at anytime.

When removed, it will automatically remove any `rewardIds` associated with the Provider.

### Country Settings
Add Country Settings to your Scheme to control the payout options available to countries.

Duplicate Country Settings with the same Country are not permitted.

You can add as many Country Settings to your Scheme as necessary to define the available payout options to meet your requirements.

### Reward Settings
Add to the `rewardIds` property by searching for applicable rewards from the Rewards Catalog.