# Client API Tokens

Client API Token objects allow you to manage your client tokens. The API allows you to create new tokens as well as retrieve tokens. You can also get the private key from a given public key.

## The client API token object

Attribute | Type | Description
-|-|-
publicKey | string | The token's public key
privateKey | string | The token's private key (secret)
scopes | array of [Scope](#the-scope-object) objects | Defines scopes that this token has permission to use

### The scope object

Attribute | Type | Description
-|-|-
scopeName | string | The name of the scope. i.e `client-api`, `transaction-api`, etc.
claims | array of [Claim](#the-claim-object) objects | Defines the claims and roles for a given scope

### The claim object

Attribute | Type | Description
-|-|-
roles | array of [Roles](#role-names) string | A list of roles permitted in the parent scope

## List all tokens

> Example Request

```shell
$ curl "https://imbursepayments.com/api/client/v1/clients/{clientId}/tokens" \
  -H "Authorization: Hmac {token}"
```

> Example Response

```json
[
  {
    "publicKey": "",
    "privateKey": "",
    "scopes": [
      {
        "scopeName": "",
        "claims": {
          "roles": [
            "",
            ""
          ]
        }
      }
    ]
  }
]
```
**REQUIRED ROLE -** `client-token-read`

Retrieves a list of client API Tokens.

### HTTP Request

`GET "https://imbursepayments.com/api/client/v1/clients/{clientId}/tokens`

### URL Parameters

Parameter | Description
--------- | -----------
clientId | The id of the client that owns the tokens

## Retrieve a token

> Example Request

```shell
$ curl "https://imbursepayments.com/api/client/v1/clients/{clientId}/tokens/{publicKey}" \
  -H "Authorization: Hmac {token}"
```

> Example Response

```json
{
  "publicKey": "",
  "privateKey": "",
  "scopes": [
    {
      "scopeName": "",
      "claims": {
        "roles": [
          "",
          ""
        ]
      }
    }
  ]
}
```
**REQUIRED ROLE -** `client-token-read`

Retrieves the details of an existing client API Token.

### HTTP Request

`GET https://imbursepayments.com/api/client/v1/clients/{clientId}/tokens/{publicKey}`

### URL Parameters

Parameter | Description
--------- | -----------
clientId | The id of the client that owns the tokens
publicKey | The `publicKey` of the token to retrieve


## Create client API token

> Example Request

```shell
  $ curl "https://imbursepayments.com/api/client/v1/clients/{clientId}/tokens" \
  -H "Authorization: Hmac {token}" \
  -d '"scopes": [
      {
        "scopeName": "",
        "claims": {
          "roles": [
            "",
            ""
          ]
        }
      }
    ]'
```

> Example Response

```json
{
  "publicKey": "",
  "privateKey": "",
  "scopes": [
    {
      "scopeName": "",
      "claims": {
        "roles": [
          "",
          ""
        ]
      }
    }
  ]
}
```
**REQUIRED ROLE -** `client-token-write`

Creates a new client API token.

### HTTP Request

`POST https://imbursepayments.com/api/client/v1/clients/{clientId}/tokens`

### URL Parameters

Parameter | Description
--------- | -----------
clientId | The id of the client that the token will be created for

