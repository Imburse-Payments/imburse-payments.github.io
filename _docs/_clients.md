# Clients

Client objects allow you to perform updates to clients. The API allows you to create, delete, and update your clients. You can retrieve individual clients as well as a list of all your clients.

## The client object

Attribute | Type | Description
-|-|-
id | guid | The unique identifier of the object
name | string | The clients name 
address | [address](#the-address-object) object | The client address
whiteLabelSettings | [White Label document](#the-white-label-settings-object) object | The white label settings for the client. ie. logo, styling document etc.

## The address object

Attribute | Type | Description
-|-|-
streetAddress | string | First line of address
extendedAddress | string | Second line of an address if requried
locality | string | The locality / city
region | string | The region / state / county
postCode | string | The post code / zip code
country | string | The ISO 3166-1 alpha-2 country code

## Retrieve a client

> Example Request

```shell
$ curl "https://imbursepayments.com/api/client/v1/clients/{clientId}" \
  -H "Authorization: Hmac {token}"
```

> Example Response

```json
{
  "id": "d929d6e2-0b43-4b24-87ef-0dd6c3bcdd02",
  "name": "Capital Insurance AG",
  "address": {
    "streetAddress": "Suite 19 Argeles Grove",
    "extendedAddress": "",
    "locality": "London",
    "region": "Middlesex",
    "postCode": "SW1 1LA",
    "country": "GB"
  }
  "whiteLabelSettings": {
    "logoUri": "",
    "styling": {
      "stylesheet": "",
      "inputFieldStyles" : [
        {
          "styleName": "",
          "styles": [
            {
              "key": "",
              "value": ""
            }
          ]
        }
      ]
    }
  }
}
```
**REQUIRED ROLE -** `client-read`

Retrieves the details of an existing client.

### HTTP Request

`GET https://imbursepayments.com/api/client/v1/clients/{clientId}`

### URL Parameters

Parameter | Description
--------- | -----------
clientId | The id of the client to retrieve

## Update a client address

> Example Request

```shell
$ curl "https://imbursepayments.com/api/client/v1/clients/{clientId}/address" \
  -H "Authorization: Hmac {token}" \
  -X PUT \
  -d '{ "streetAddress": "Suite 19 Argeles Grove",
        "extendedAddress": "",
        "locality": "London",
        "region": "Middlesex",
        "postCode": "SW1 1LA",
        "country": "GB"
   }'
```

> Example Response

```json
{
  "id": "d929d6e2-0b43-4b24-87ef-0dd6c3bcdd02",
  "name": "Capital Insurance AG",
  "address": {
    "streetAddress": "Suite 19 Argeles Grove",
    "extendedAddress": "",
    "locality": "London",
    "region": "Middlesex",
    "postCode": "SW1 1LA",
    "country": "GB"
  },
  "whiteLabelSettings": {
    "logoUri": "",
    "styling": {
      "stylesheet": "",
      "inputFieldStyles" : [
        {
          "styleName": "",
          "styles": [
            {
              "key": "",
              "value": ""
            }
          ]
        }
      ]
    }
  }
}
```
**REQUIRED ROLE -** `client-write`

Updates the address of an existing client object.

### HTTP request

`PUT https://imbursepayments.com/api/client/v1/clients/{clientId}/address`

### URL parameters

Parameter | Description
--------- | -----------
clientId | The id of the client to update


### Request body

A JSON formatted object string.

Key name | Required | Description
--------- | ----------- | -----------
streetAddress | Yes | First line of address
extendedAddress | No | Second line of an address if requried
locality | Yes | The locality / city
region | Yes | The region / state / county
postCode | Yes | The post code / zip code
country | Yes | The ISO 3166-1 alpha-2 country code


## Upload a logo image

> Example Request

```shell
$ curl -F 'forms=@{local path to logo image file}' https://imbursepayments.com/api/client/v1/clients/{clientId}/whitelabel/logo \
  -H "Authorization: Hmac {token}"
```

> Example Response

```json
{
  "id": "d929d6e2-0b43-4b24-87ef-0dd6c3bcdd02",
  "name": "Capital Insurance AG",
  "address": {
    "streetAddress": "Suite 19 Argeles Grove",
    "extendedAddress": "",
    "locality": "London",
    "region": "Middlesex",
    "postCode": "SW1 1LA",
    "country": "GB"
  },
  "whiteLabelSettings": {
    "logoUri": "",
    "styling": {
      "stylesheet": "",
      "inputFieldStyles" : [
        {
          "styleName": "",
          "styles": [
            {
              "key": "",
              "value": ""
            }
          ]
        }
      ]
    }
  }
}
```
**REQUIRED ROLE -** `client-write`

Uploads a logo for the client white label settings. 

<aside type="notice">
<b>Note:</b> This operation will overwrite any existing logo image for the client.
</aside>

### HTTP Request

`POST https://imbursepayments.com/api/client/v1/clients/{clientId}/whitelabel/logo`

### URL parameters

Parameter | Description
--------- | -----------
clientId | The id of the client to update


## Upload a styling document

> Example Request

```shell
$ curl -F 'forms=@{local path to white label styling document}' https://imbursepayments.com/api/client/v1/clients/{clientId}/whitelabel/styling \
  -H "Authorization: Hmac {token}"
```

> Example Response

```json
{
  "id": "d929d6e2-0b43-4b24-87ef-0dd6c3bcdd02",
  "name": "Capital Insurance AG",
  "address": {
    "streetAddress": "Suite 19 Argeles Grove",
    "extendedAddress": "",
    "locality": "London",
    "region": "Middlesex",
    "postCode": "SW1 1LA",
    "country": "GB"
  },
  "whiteLabelSettings": {
    "logoUri": "",
    "styling": {
      "stylesheet": "",
      "inputFieldStyles" : [
        {
          "styleName": "",
          "styles": [
            {
              "key": "",
              "value": ""
            }
          ]
        }
      ]
    }
  }
}
```
**REQUIRED ROLE -** `client-write`

Uploads a white label styling document for the client white label settings.

<aside type="notice">
<b>Note:</b> This operation will overwrite any existing white label styling document for the client.
</aside>

### HTTP Request

`POST https://imbursepayments.com/api/client/v1/clients/{clientId}/whitelabel/styling`

### URL parameters

Parameter | Description
--------- | -----------
clientId | The id of the client to update



