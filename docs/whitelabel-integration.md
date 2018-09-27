---
layout: slate
title: White Label Integration
---
# White Label Integration

Imburse's White Label integration offloads the need to provide payment method selection and collection features yourself. We do all the heavy lifting. It's the easiest way to integrate into Imburse. 

## Getting Started

Before you can successfully integrate the White Label solution into your site, you will need the following:

- **Client Account and configuration**

	Configure your White Label settings using the Client Portal or the API. See the [Customization](#customization) section for details.

- **BearerToken**

	Each time you call the White Label URL, you will need to pass a valid `bearerToken` parameter. 
	The `bearerToken` is a secure token representing the requirements of the transaction (ie. `amount`, `currency`, `payment scheme`, etc). Please refer to the [Transaction API documentation](TransactionApi) for details of how to create this.

## API Endpoints

The Imburse White Label interface can be reached via the following URL:

`https://whitelabel.imbursepayments.com`

To test the interface, a sandbox test environment with the following endpoint is available. 

`https://sandbox-whitelabel.imbursepayments.com`

<aside class="notice">
The sandbox will not trigger any postings to any bank accounts, even with a test bank account.
</aside>

### Transport Layer Security
Imburse can only be accessed via encrypted endpoints (HTTPS). The Payment Card Industry Security Standards Council already recommends the use of TLS 1.2 for API connections. The following cipher suites are recommended for TLS 1.2: ECDHE-RSA-AES256-GCM-SHA384

Statement:

- This cipher suite is recommended by the BSI and can still be used until at least 2021 and beyond.
- ECDHE offers Perfect Forward Secrecy.
- ECDHE needs fewer resources than DHE.
- AES256 is a strong encryption.
- RSA is the underlying process for the private / public-key material.
- SHA384 is a secure fast hash function for signatures.
- SHA384 also provides protection against length extension attacks (as opposed to SHA256).
- GCM is a modern cipher block mode for AES that prevents certain attack vectors that are possible with the alternative CBC.
- GCM establishes Authenticated Encryption.

## Localization

The White Label solution is designed with localization in mind and supports multiple languages. 

Each White Label workflow allows users to specify a `language` parameter to set the localized language, 
seen below in the `Language parameter` column.

### Supported Languages

Language | Language parameter
---------|---------------
English  | en-GB
German   | de-DE

## How to host the White Label page

Users should host the White Label page within an **IFrame** element. 

The example below will shows an `IFrame` hosting the sandbox site targeting the `collect` workflow. 

```
 <iframe src='https://sandbox.whitelabel.imbursepayments.com/?workflow=collect&bearerToken={bearerToken}&language=en-gb' />
```

## Events

> Example of an Event Listener

```javascript
<script> 
	window.addEventListener("message", function (e) {
        // replace {url} in the line below with either the sandbox or production endpoint.
 		if (e.origin !== '{url}') {
  			return;
        }

        // e.data will contain the appropriate message object
        console.log(e.data);

	},false); 
</script>
```

The White Label solution will raise Events during the workflow lifecycle. The API documentation for individual workflows, ie. `collect`, will cover the specific events. Listen for these events and take appropriate action in the host system. See the example on the right hand panel.

## Customization

Our White Label solution is built using `Bootstrap v4.1.3`, using the `container-fluid` container class. 

Our Client Portal and API provides the ability to upload a document containing a JSON formatted [White Label document object](#white-label-document). This object contains all the customization required by the White Label solution. Log on to the Client Portal and use the White Label settings menu option to manage this.

## White Label document

> Example White Label document

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

## Stylesheet Classes

> Sample Stylesheet

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
The White Label solution loads a generic Stylesheet by default but this can be overridden. 

The following classes and identifiers can be overridden in your own Stylesheet. See the example to the right for our default implementation of the CSS.

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
`.payment-method`  | Styling for the payment method icon<br/><br/>Payment method specific styles are also available; just append the payment method name to the end of this class name.<br/></br>ie. `payment-method-visa-debit`, `payment-method-paypal`, etc.<br/><br/>For a complete list of available payment methods, see the [Payment Method Specific Styles](#payment-method-specific-styles) section below.
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
