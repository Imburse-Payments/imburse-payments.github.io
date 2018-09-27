---
layout: bt
title: White Label Workflows
---
# White Label Workflows

Imburse's White Label Workflows are your entry points to using the White Label solution. The available workflows allow collection as well as paying out of money. Depending on your use cases, you could use either or both workflows in your solution.


## Collect Workflow 

The Collect workflow is used to initiate collection of money. The Collect workflow follows these steps:

1.	**Select Payment Method** - User selects the payment method they would like to use
2.	**Submit Payment Details** - Depending on the payment method chosen, a relevent work flow will be initiated ie. `Credit Card entry`, `PayPal authentication`, `PayDirekt logon`, etc.

### Parameters
Parameter | Description
---------------|-------------
workflow | Use `collect` for the *Collect Workflow*.
bearerToken  | The `bearerToken` parameter value is obtained by calling the Transaction API. Refer to the [Transaction API](Transaction-API) for further details.
language       | The `language` parameter can be used to localize the site to the language of your choice. If the `language` parameter is not specified, localization will default to **English**. Refer to the [Localization](#localization) section for valid language parameter values.

### Usage

`https://whitelabel.imbursepayments.com/workflow=collect?bearerToken={bearerToken}&language={language}`

### Events

The Collect workflow will raise Events during its lifecycle. Users would need to [add an event listener](#setting-up-an-event-listener) for these events and take appropriate action.

Event name | Trigger |  Description
-----------|---------|---------|------------
**imburse:payment_succeeded** | Successful payment submission. | Raised to indicate successful payment submission.<br/><br/>See [imburse:payment_succeeded](#imburse-payment_succeeded).
**imburse:payment_failed** | Failed payment submission. | Raised to indicate an unsuccessful payment submission. The `messageDescription` property contains the failure reason or reasons.<br/><br/>See [imburse:payment_failed](#imburse-payment_failed).
**imburse:invalid_token** | Bearer Token Invalid | The bearer token had expired, was invalid, or had already been submitted.<br/><br/>See [imburse:invalid_token](#imburse-invalid_token).
**imburse:internal_server_error** | Unexpected Error | An error occurred internally when submitting the payment.<br/><br/>See [imburse:internal_server_error](#imburse-internal_server_error).
**imburse:braintree_tokenization_error** | Tokenization error on Braintree server | Occurs when there is a tokenisation failure on Braintree server.<br/><br/>See [imburse:braintree_tokenization_error](#imburse-braintree_tokenization_error).
**imburse:braintree_gateway_error** | Gateway error on Braintree server | Occurs when the Braintree gateway cannot be contacted.<br/><br/>See [imburse:braintree_gateway_error](#imburse-braintree_gateway_error).
**imburse:braintree_unexpected_error** | Unexpected error on Braintree server | Occurs when there is an unexpected failure on Braintree server.<br/><br/>See [imburse:braintree_unexpected_error](#imburse-braintree_unexpected_error).



#### imburse:payment_succeeded

> Example Payment Succeeded Message

```json
{ 
	"bearerToken": "{bearerToken}", 
	"messageType": "imburse:payment_succeeded" 
}
```

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
messageType | Value will be `imburse:payment_succeeded`.


#### imburse:payment_failed

> Example Payment Failed Message

```json
{ 
	"bearerToken": "{bearerToken}", 
	"messageType": "imburse:payment_failed", 
	"messageDescription": "{error message}" 
}
```

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
messageType | Value will be `imburse:payment_failed`.
messageDescription | The failure reason or reasons.


#### imburse:invalid_token

> Example Invalid Token Message

```json
{ 
	"bearerToken": "{bearerToken}", 
	"messageType": "imburse:invalid_token" 
}
```

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
messageType | Value will be `imburse:invalid_token`.



#### imburse:internal_server_error

> Example Internal Server Error Message

```json
{ 
	"bearerToken": "{bearerToken}", 
	"messageType": "imburse:internal_server_error" 
}
```

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
messageType | Value will be `imburse:internal_server_error`.



#### imburse:braintree_tokenization_error

> Example Braintree Tokenization Error Message

```json
{ 
	"bearerToken": "{bearerToken}", 
	"messageType": "imburse:braintree_tokenization_error" 
}
```

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
messageType | Value will be `imburse:braintree_tokenization_error`.


#### imburse:braintree_gateway_error

> Example Braintree Gateway Error Message

```json
{ 
	"bearerToken": "{bearerToken}", 
	"messageType": "imburse:braintree_gateway_error" 
}
```

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
messageType | Value will be `imburse:braintree_gateway_error`.


#### imburse:braintree_unexpected_error

> Example Braintree Unexpected Error Message

```json
{ 
	"bearerToken": "{bearerToken}", 
	"messageType": "imburse:braintree_unexpected_error" 
}
```

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
messageType | Value will be `imburse:braintree_unexpected_error`.

