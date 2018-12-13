---
layout: default
title: White Label Integration
toc: wl_integration
body_color: body-green
section_name: Guides
last_updated: October 1st, 2018
icon_class: icon_documents_alt icon
---
# Overview

Imburse's White Label integration offloads the need to provide your own payment collection features yourself. We do all the heavy lifting. It's the easiest way to integrate into Imburse. 

## Getting Started

Before you can successfully integrate the White Label solution into your site, you will need the following:

- **Client Account and configuration**

	Configure your White Label settings using the Client Portal or the API. See the [Customization](#customization) section for details.

- **BearerToken**

	Each time you call the White Label URL, you will need to pass a valid `bearerToken` parameter. 
	
    The `bearerToken` is a secure token representing the payment instruction (ie. `amount`, `currency`, `payment scheme`, etc). 
    
    See the [Create Payment Token(https://api-docs.imbursepayments.com/#d306ef84-da1b-4970-91b1-403f178c0af7)] API method for details of how to create this.

## Whitelabel Endpoints

The Imburse White Label interface can be reached via the following URL:

`https://whitelabel.imbursepayments.com/`

To test the interface, a sandbox test environment with the following endpoint is available. 

`https://sandbox-whitelabel.imbursepayments.com/`

## Localization

The White Label solution is designed with localization in mind and supports multiple languages. 

Each White Label workflow allows users to specify a `language` parameter to set the localized language, 
seen below in the `Language parameter` column.

### Supported Languages

Language | Language parameter
---------|---------------
English  | en-GB
German   | de-DE

## Hosting Options

The White Label solution can be hosted in an **IFrame** element 

The example below shows an `IFrame` hosting the sandbox whitelabel site. 

``` html
 <iframe src='https://sandbox-whitelabel.imbursepayments.com?bearerToken={bearerToken}&language=en-GB' />
```

## Endpoint Usage

`https://whitelabel.imbursepayments.com/bearerToken={bearerToken}&language={language}`

### Parameters

Parameter | Description
-|-
bearerToken  | The `bearerToken` parameter value is obtained by calling the Transaction API. Refer to the [Transaction API](Transaction-API) for further details.
language       | The `language` parameter can be used to localize the site to the language of your choice. If the `language` parameter is not specified, localization will default to **English**. Refer to the [Localization](#localization) section for valid language parameter values.

## Callbacks

The White Label solution will redirect back to your specified callback urls during a workflows' lifecycle. 

You configure the callback addresses within in the payment instruction request. See [Create Payment Token(https://api-docs.imbursepayments.com/#d306ef84-da1b-4970-91b1-403f178c0af7)] for details.

The table below shows the callback urls that would need to be configued in your payment instruction.

Type | Description
-|-
Success | If the payment is sucessfull then we will redirect to this endpoint.
Failed | If the payment has failed then we will redirect to this endpoint.
Cancelled | If the payment is cancelled then we will redirect to this endpoint.

### Failed Events

When a payment fails, we will redirect to your given `Failed` endpoint and additionally attach a base64 encoded json object to the querystring giving you the reason why the payment failed. 

The querystring parameter will look like this:

`{your failed endpoint url}?payload=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

Example:

`www.mycompany.com/callbacks/failed?payload=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

The table below shows the failure reasons that we will send in the querystring.

Event name | Trigger |  Description
-|-|-
**imburse_payment_failed** | Failed payment submission. | Raised to indicate an unsuccessful payment submission. The `messageDescription` property contains the failure reason or reasons.<br/><br/>See [imburse_payment_failed](#imburse_payment_failed).
**imburse_invalid_token** | Bearer Token Invalid | The bearer token had expired, was invalid, or had already been submitted.<br/><br/>See [imburse_invalid_token](#imburse_invalid_token).
**imburse_internal_server_error** | Unexpected Error | An error occurred internally when submitting the payment.<br/><br/>See [imburse_internal_server_error](#imburse_internal_server_error).
**imburse_tokenization_error** | Tokenization error on PSPs' server | Occurs when there is a tokenisation failure on the PSP server.<br/><br/>See [imburse_tokenization_error](#imburse_tokenization_error).
**imburse_gateway_error** | Gateway error on PSPs' server | Occurs when the PSP gateway cannot be contacted.<br/><br/>See [imburse_gateway_error](#imburse_gateway_error).
**imburse_unexpected_error** | Unexpected error on the PSPs server | Occurs when there is an unexpected failure on PSP server.<br/><br/>See [imburse_unexpected_error](#imburse_unexpected_error).


#### imburse_payment_failed

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
providerName | The `providerName` will be the name of the PSP connected to the selected payment method.
messageType | Value will be `imburse_payment_failed`.
messageDescription | The failure reason or reasons.

##### Example Payment Failed Message

```json
{ 
	"bearerToken": "{bearerToken}", 
    "providerName": "{providerName}",
	"messageType": "imburse_payment_failed", 
	"messageDescription": "{error message}" 
}
```

#### imburse_invalid_token

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
providerName | The `providerName` will be the name of the PSP connected to the selected payment method.
messageType | Value will be `imburse_invalid_token`.

##### Example Invalid Token Message

```json
{ 
	"bearerToken": "{bearerToken}", 
    "providerName": "{providerName}",
	"messageType": "imburse_invalid_token" 
}
```

#### imburse_internal_server_error

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
providerName | The `providerName` will be the name of the PSP connected to the selected payment method.
messageType | Value will be `imburse_internal_server_error`.

##### Example Internal Server Error Message

```json
{ 
	"bearerToken": "{bearerToken}", 
    "providerName": "{providerName}",
	"messageType": "imburse_internal_server_error" 
}
```

#### imburse_tokenization_error

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
providerName | The `providerName` will be the name of the PSP connected to the selected payment method.
messageType | Value will be `imburse_tokenization_error`.

##### Example Tokenization Error Message

```json
{ 
	"bearerToken": "{bearerToken}", 
    "providerName": "{providerName}",
	"messageType": "imburse_tokenization_error" 
}
```

#### imburse_gateway_error

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
providerName | The `providerName` will be the name of the PSP connected to the selected payment method.
messageType | Value will be `imburse_gateway_error`.

##### Example Gateway Error Message

```json
{ 
	"bearerToken": "{bearerToken}", 
    "providerName": "{providerName}",
	"messageType": "imburse_gateway_error" 
}
```

#### imburse_unexpected_error

Property | Description
---------|------------
bearerToken | The `bearerToken` that was passed into the White Label url. Use this to correlate events to specific transactions in your host system.
providerName | The `providerName` will be the name of the PSP connected to the selected payment method.
messageType | Value will be `imburse_unexpected_error`.

##### Example Unexpected Error Message

```json
{ 
	"bearerToken": "{bearerToken}", 
    "providerName": "{providerName}",
	"messageType": "imburse_unexpected_error" 
}
```

## Customization

Our White Label solution is built using `Bootstrap v4.1.3`, using the `container-fluid` container class. 

Our Client Portal and API provides the ability to upload a document containing a JSON formatted [White Label document object](#white-label-document). This object contains all the customization required by the White Label solution. Log on to the Client Portal and use the White Label settings menu option to manage this.

## White Label document

The White Label document is a JSON formatted document containing the following properties:

Property | Type | Required |Description
---------|------|----------|------------
styleSheet | string | Optional | A complete CSS stylesheet. Once uploaded, this property will be minified for increased performance.
inputFieldStyles | object array | Optional | An array of [InputFieldStyle](#inputFieldStyle object) objects. Only used for Credit Cards payment options.
ccDataCollectionOptions | object | Optional | A list of options for controlling which Credit Card data is to be collected.   


### Stylesheet

The `styleSheet` can override all, or a subset of, the CSS classes used by the White Label solution. Using this property allows users to match the styling of the White Label solution to that of the host system.

### InputFieldStyles

The `inputFieldStyles` property is only used for internal styling (ie. text) for the credit card fields (see field list below). You would typically use this to match the styling of these fields to the other fields in your page. If you're not collecting credit card details then this property is not used.

- Card Number
- CVV
- Expiry Month and Year

The `inputFieldStyles` object is an `array` of `inputFieldStyle` objects.

#### InputFieldStyle object

The Input Field Style object contains following properties:

Property | Type | Required | Description
---------|------|----------|------------
styleName | string | Yes | A valid value of any of the following: `input` (for styling all fields), `.number`, `.css`, `.expiration-month`, `.expiration-year` (for styling specific fields)
styles | object array| Yes | An array of key value pair objects. Valid style key values are: `color`, `font`, `font-family`, `font-size`, `font-size-adjust`, `font-stretch`, `font-style`, `font-variant`, `font-variant-alternates`, `font-variant-caps`, `font-variant-east-asian`, `font-variant-ligatures`, `font-variant-numeric`, `font-weight`, `line-height`, `outline`, `opacity`, `text-shadow`, `transition-moz-osx-font-smoothing`, `-moz-transition`, `-webkit-font-smoothing`, `-webkit-transition`

### ccDataCollectionOptions

For Credit Card payments, the minimum information your customers will be required to enter would be `card number`, `CVV`, and `expiration date`.

Depending on specific use case scenarios, use the `ccDataCollectionOptions` parameter to optionally collect more or  information from your customers.

Key Name | Type | Description
---------|------|------------
cardholderName | bool | `true` to collect the Cardholder Name, `false` to hide.  
billingAddress | bool | `true` to collect the Billing Address details, `false` to hide.<br/><br/>**Note**: The Billing Address details include `First name`, `Last name`, `Company name`, `Street`, `Locality`, `Region`, `Postcode`, and `Country`.

<aside class="notice">
Imburse will never store credit card details or any personal information from your customers. These details are only collected in your customers' browser and then securely transmitted directly to your PCI DSS compliant PSP partner.
</aside>

##### Example White Label document

```json
{
    "stylesheet": "body{padding-top:20px;padding-bottom:20px}.header{margin-bottom:20px}.header img{float:left;height:50px}.header h1{position:relative;top:10px;left:10px;font-family:'Open Sans',sans-serif;color:#4c4e56}.form{background-color:#fff;overflow:hidden;color:#4c4e56;width:100%;float:left;font-size:14px;position:relative}label{white-space:nowrap}#cancel-button{margin-top:3px;font-size:20px;background-color:#808080;color:#fff}#continue-button{margin-top:3px;font-size:20px;background-color:#808080;color:#fff}#paynow-button{margin-top:3px;font-size:20px;background-color:#2ec4a5;color:#fff}.form-group{float:left;margin-bottom:10px}.form-control{line-height:30px;height:30px;padding:0 10px}.number{width:100%}.cvv{width:82px}.expiration-month{width:62px}.expiration-year{width:82px}.payment-methods{display:flex;flex-flow:row wrap;justify-content:center}.payment-method{padding:5px 5px;display:flex;justify-content:center;align-items:center}.payment-method img{max-height:60px;max-width:90px;height:auto;width:auto}.invalid{border-color:#dc3545 !important}#postalCode{border:1px solid #ced4da;-webkit-transition:border-color 160ms;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}#postalCode.braintree-hosted-fields-focused{border:1px solid #80bdff !important}#postalCode.braintree-hosted-fields-invalid{border:1px solid #dc3545 !important}#postalCode.braintree-hosted-fields-valid{border:1px solid #28a745 !important}#number{border:1px solid #ced4da;-webkit-transition:border-color 160ms;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}#number.braintree-hosted-fields-focused{border:1px solid #80bdff !important}#number.braintree-hosted-fields-invalid{border:1px solid #dc3545 !important}#number.braintree-hosted-fields-valid{border:1px solid #28a745 !important}#cvv{border:1px solid #ced4da;-webkit-transition:border-color 160ms;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}#cvv.braintree-hosted-fields-focused{border:1px solid #80bdff !important}#cvv.braintree-hosted-fields-invalid{border:1px solid #dc3545 !important}#cvv.braintree-hosted-fields-valid{border:1px solid #28a745 !important}#expirationMonth{border:1px solid #ced4da;-webkit-transition:border-color 160ms;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}#expirationMonth.braintree-hosted-fields-focused{border:1px solid #80bdff !important}#expirationMonth.braintree-hosted-fields-invalid{border:1px solid #dc3545 !important}#expirationMonth.braintree-hosted-fields-valid{border:1px solid #28a745 !important}#expirationYear{border:1px solid #ced4da;-webkit-transition:border-color 160ms;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}#expirationYear.braintree-hosted-fields-focused{border:1px solid #80bdff !important}#expirationYear.braintree-hosted-fields-invalid{border:1px solid #dc3545 !important}#expirationYear.braintree-hosted-fields-valid{border:1px solid #28a745 !important}",
    "inputFieldStyles": [
        {
            "styleName": "input",
            "styles": [
                {
                    "key": "font-family",
                    "value": "Helvetica Neue, Helvetica, Arial, sans-serif"
                },
                {
                    "key": "font-size",
                    "value": "1rem"
                }
            ]
        }
    ],
    "ccDataCollectionOptions": {
        "cardholderName": true,
        "billingAddress": true
    }
}
```

## Stylesheet Classes

The White Label solution loads a generic Stylesheet by default, but this can be overridden. 

The following classes and identifiers can be overridden in your own Stylesheet. 

##### Default CSS

```css
body {
    padding-top: 20px;
    padding-bottom: 20px;
}

.header {
    margin-bottom: 20px;
}

.header img {
    float: left;
    height: 50px;
}

.header h1 {
    position: relative;
    top: 10px;
    left: 10px;
    font-family: 'Open Sans', sans-serif;
    color: #4c4e56;
}

.form {
    background-color: #fff;
    overflow: hidden;
    color: #4c4e56;
    width: 100%;
    float: left;
    font-size: 14px;
    position: relative;
}

label {
    white-space: nowrap;
}

#cancel-button {
    margin-top: 3px;
    font-size: 20px;
    background-color: grey;
    color: white;
}

#continue-button {
    margin-top: 3px;
    font-size: 20px;
    background-color: grey;
    color: white;
}

#paynow-button {
    margin-top: 3px;
    font-size: 20px;
    background-color: #2ec4a5;
    color: white;
}

.form-group {
    float: left;
    margin-bottom: 10px;
}

.form-control {
    line-height: 30px;
    height: 30px; /* height for hosted fields needs to be explicit */
    padding: 0 10px;
}

.first-name {
}

.last-name {
}

.company-name {
}

.street-address {
}

.extended-address {
}

.locality {
}

.region {
}

.postal-code {
}

.country-name {
}

.cardholder-name {
}

.number {
    width: 100%;
}

.cvv {
    width: 82px;
}

.expiration-month {
    width: 62px;
}

.expiration-year {
    width: 82px;
}

.payment-methods {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.payment-method {
    padding: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.payment-method img {
    max-height: 60px;
    max-width: 90px;
    height: auto;
    width: auto;
}

/* 
Payment method specific styles can also be used:
    
    .payment-method-logo-{payment method name}

ie. .payment-method-logo-visa-debit 
*/

.invalid {
    border-color: #dc3545 !important;
}

#postalCode {
    border: 1px solid #ced4da;
    -webkit-transition: border-color 160ms;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

#postalCode.braintree-hosted-fields-focused {
    border: 1px solid #80bdff !important;
}

#postalCode.braintree-hosted-fields-invalid {
    border: 1px solid #dc3545 !important;
}

#postalCode.braintree-hosted-fields-valid {
    border: 1px solid #28a745 !important;
}

#number {
    border: 1px solid #ced4da;
    -webkit-transition: border-color 160ms;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

#number.braintree-hosted-fields-focused {
    border: 1px solid #80bdff !important;
}

#number.braintree-hosted-fields-invalid {
    border: 1px solid #dc3545 !important;
}

#number.braintree-hosted-fields-valid {
    border: 1px solid #28a745 !important;
}

#cvv {
    border: 1px solid #ced4da;
    -webkit-transition: border-color 160ms;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

#cvv.braintree-hosted-fields-focused {
    border: 1px solid #80bdff !important;
}

#cvv.braintree-hosted-fields-invalid {
    border: 1px solid #dc3545 !important;
}

#cvv.braintree-hosted-fields-valid {
    border: 1px solid #28a745 !important;
}

#expirationMonth {
    border: 1px solid #ced4da;
    -webkit-transition: border-color 160ms;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

#expirationMonth.braintree-hosted-fields-focused {
    border: 1px solid #80bdff !important;
}

#expirationMonth.braintree-hosted-fields-invalid {
    border: 1px solid #dc3545 !important;
}

#expirationMonth.braintree-hosted-fields-valid {
    border: 1px solid #28a745 !important;
}

#expirationYear {
    border: 1px solid #ced4da;
    -webkit-transition: border-color 160ms;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

#expirationYear.braintree-hosted-fields-focused {
    border: 1px solid #80bdff !important;
}

#expirationYear.braintree-hosted-fields-invalid {
    border: 1px solid #dc3545 !important;
}

#expirationYear.braintree-hosted-fields-valid {
    border: 1px solid #28a745 !important;
}
```

CSS Property | Description
-|-
`.body` | Body tag
`.header` | Logo and title container styling
`.header img` | Logo styling
`.header h1`  | Title styling
`.form`  | Container class applied to to all steps in the White Label process
`label` | Label styling
`#cancel-button` | Cancel button styling
`#continue-button` | Continue button styling 
`#paynow-button`  | Pay Now button styling
`.form-group` | The `form-group` style is used to group the label and corresponding `input` or `select` boxes together  
`.form-control` | Each `input` or `select` tag will have the `form-control` style applied
`.first-name` |First name field and label styling
`.last-name`  | Last name field and label styling
`.company-name` | Company name field and label styling
`.street-address` | Street address field and label styling
`.extended-address` | First name field styling
`.locality`  | Locality field and label styling
`.region`  | Region field and label styling
`.postal-code`  | Post code field and label styling
`.country-name`  | Country name field and label styling
`.cardholder-name` | Cardholder name field and label styling
`.number` | Credit card number field and label styling
`.cvv` | Credit card CVV number field and label styling
`.expiration-month` | Expiration month field and label styling
`.expiration-year`  | Expiration year field styling
`.payment-methods` | List of available payment method icons styling 
`.payment-method`  | Styling for the payment method icon<br/><br/>Payment method specific styles are also available; just append the payment method name to the end of this class name.<br/><br/>ie. `payment-method-visa-debit`, `payment-method-paypal`, etc.<br/><br/>For a complete list of available payment methods, see the [Payment Method Specific Styles](#payment-method-specific-styles) section below.
`.payment-method img`  | Payment method styling for the `img` tag
`.invalid` | Styling applied when a field has an invalid value

The following CSS properties are also used for styling the validation functionality of the following fields:

- postalCode
- number
- css
- expirationMonth
- expirationYear

The table below shows the CSS properties for the `#postalCode`. Add CSS properties for any of the other fields by using the appropriate named field listed above as a prefix, ie.  `#number`, `number.braintree-hosted-fields-focused`, etc.

CSS Property | Description
-|-
`#postalCode` | Generic styling for the `postalCode` field
`#postalCode.braintree-hosted-fields-focused` | Styling to apply when field has the focus
`#postalCode.braintree-hosted-fields-invalid` | Styling applied when the field has an invalid value
`#postalCode.braintree-hosted-fields-valid` | Styling applied when the field has a valid value


### Payment Method Specific Styles

Imburse currently support the following Payment Methods. Use the specific `class suffix` for payment method specific styling if required.

Payment Method |  Class suffix
-|-|-
Discover	| discover
Maestro		| maestro
Mastercard	| mastercard
PayPal		| paypal
Visa		| visa
Visa Debit	| visa-debit
