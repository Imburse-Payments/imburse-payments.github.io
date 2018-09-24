# PSP Configurations

*Payment Service Provider* (PSP) configuration objects hold the connnection details that Imburse needs to connect to your PSP. With these details, we can carry out instructions on your behalf - such as credit card authorization and/or settlement. PSP configuration objects allow you to manage your PSP configurations for a given client. The API allows you to create, retrieve, and update your configurations.

## The PSP configuration object

Attribute | Type | Description
-|-|-
pspType | string | The name of the PSP. Currently only `BrainTree` is supported with these operations.
configuration | [Configuration](#the-configuration-object) object | An object that represents the configuration for a PSP. The data in this object will vary depending on the `pspType`.

## The configuration object

This object will vary depending on the `pspType` the PSP configuration is for.

Listed below are the all the configuration types that are currently supported.

### The BrainTree configuration object

Attribute | Type | Description
-|-|-
merchantId | string | The `merchantId` for your BrainTree account
publicKey | string  | The `publicKey` for your BrainTree account
privateKey | string  | The `privateKey` for your BrainTree account


## Get a list of PSP configurations

> Example Request

```shell
$ $ curl "https://imbursepayments.com/api/client/v1/clients/{clientId}/psp-configurations" \
  -H Authorization: Hmac {token}
```

> Example Response

```json
[
  {
    "id": "",
    "pspType": ""
  }
]
```
**REQUIRED ROLE -** `psp-configuration-read`

Retrieves a list PSP configurations.

### HTTP Request

`GET https://imbursepayments.com/api/client/v1/clients/{clientId}/psp-configurations`

### URL Parameters

Parameter | Description
--------- | -----------
clientId | The id of the client that owns the PSP configuration

## Retrieve a PSP configuration

> Example Request

```shell
$ curl "https://imbursepayments.com/api/client/v1/clients/{clientId}/psp-configurations/{pspConfigurationId}" \
  -H "Authorization: Hmac {token}"
```

> Example Response

```json
{
  "id": "",
  "pspType": "",
  "configuration": {
  }
}
```
**REQUIRED ROLE -** `psp-configuration-read`

Retrieves the details of an existing PSP configuration.

### HTTP Request

`GET https://imbursepayments.com/api/client/v1/clients/{clientId}/psp-configurations/{pspConfigurationId}`

### URL Parameters

Parameter | Description
--------- | -----------
clientId | The id of the client that owns the PSP configuration
pspConfigurationId | The id of the PSP configuration to retrieve

## Create a PSP configuration

> Example Request

```shell
$ curl "https://imbursepayments.com/api/client/v1/clients/{clientId}/psp-configurations" \
  -H "Authorization: Hmac {token}" \
  -d '{
        "pspType": "",
        "configuration": {
        }
      }'
```

> Example Response

```json
{
  "id": "",
  "pspType": "",
  "configuration": {
  }
}
```
**REQUIRED ROLE -** `psp-configuration-write`

Creates a new PSP Configuration object.

### HTTP request

`POST https://imbursepayments.com/api/client/v1/clients/{clientId}/psp-configurations`

### URL Parameters

Parameter | Description
--------- | -----------
clientId | The id of the client that owns the PSP configuration

### Request body

A JSON formatted object string.

Key name | Required | Description
--------- | ----------- | -----------
pspType | Yes | The name of the PSP. Currently only `BrainTree` is supported with these operations.
configuration | Yes | A [Configuration](#the-configuration-object) object that represents the configuration for a PSP. The data in this object will vary depending on the `pspType`. 


## Update a PSP configuration

> Example Request

```shell
$ curl "https://imbursepayments.com/api/client/v1/clients/{clientId}/psp-configurations/{pspConfigurationId}" \
  -H "Authorization: Hmac {token}" \
  -X PUT \
  -d '{
        "pspType": "",
        "configuration": {
        }
      }'
```

> Example Response

```json
{
  "id": "",
  "pspType": "",
  "configuration": {
  }
}
```
**REQUIRED ROLE -** `psp-configuration-write`

Updates a PSP Configuration object.

### HTTP request

`PUT https://imbursepayments.com/api/client/v1/clients/{clientId}/psp-configurations/{pspConfigurationId}`

### URL Parameters

Parameter | Description
--------- | -----------
clientId | The id of the client that owns the PSP configuration
pspConfigurationId | The id of the PSP configuration to update

### Request body

A JSON formatted object string.

Key name | Required | Description
--------- | ----------- | -----------
pspType | Yes | The name of the PSP. Currently only `BrainTree` is supported with these operations.
configuration | Yes | A [Configuration](#the-configuration-object) object that represents the configuration for a PSP. The data in this object will vary depending on the `pspType`. 



