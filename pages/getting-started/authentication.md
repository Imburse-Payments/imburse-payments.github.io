---
layout: default
title: Getting Started
toc: getting-started-authentication
body_color: body-primary
section_name: Authentication
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Authentication
Imburse authenticates your API requests using your Account’s or Tenant's API keys. If you do not include your key when making an API request, or use one that is incorrect or outdated, Imburse returns an error.

Every account is provided with one Account Security Key at registration time. All API requests exist in either sandbox or live modes and your accounts, tenants, apps, schemes, and so forth in one mode cannot be manipulated in the other.

Your API keys are available in the Imburse Portal, however, you cannot get the private key value after it has been created; either via the API or the Imburse Portal. You must safely store the private key values once they have been created.

## Functions
The available authentication functions are:

- Create a Management Bearer Token
- Create a Collect API Bearer Token
- Create a Payout API Bearer Token

## API Documentation
All the Authentication API functions are fully documented in the [Identity API documentation](https://api-docs.imbursepayments.com/?version=latest#f6bf99b9-ca03-47b5-a667-8e1a5a625b0e).

## HMAC and Bearer Tokens
HMAC (Hashed Message Authentication Code), is a specific type of MAC involving a cryptographic hash function and a secret cryptographic key. It is used to simultaneously verify both the data integrity and the authentication of a message. We use the HMAC authentication process for your initial authentication into the Imburse platform.

Once authenticated via the HMAC authentication scheme, we return you a Bearer token to use in subsequence requests.

The HMAC scheme is extremely secure but is computationally quite expensive, both on the client and the server; hence why we respond with a Bearer token once authenticated.

The Bearer token we respond with is a crpytic string signed on the Imburse platform and validated on the server for each API request.

## Account Security Keys vs Tenant Security Keys
Your account is the top level in a 2-teir heiarachy. Your account can have many Tenants. As such, we have separate Security Keys for Accounts and Tenants.

- **Account Security Key** - access to create new Account Security Keys, create new Tenants, and create new Tenant Security Keys for said Tenants.
- **Tenant Security Key** - access to configuring the Tenant's Apps, Schemes, and so forth.

Which one you use when authenticating determines the context you are in - either Account or Tenant.

## Tenant Self Service vs Account Controlled
As the account owner, you can setup your Tenants in two ways:

- **Tenant Self Service** - Set them up with a Tenant Security Key granted with full-access and **SHARE** the public and private key with the Tenant. With a full-access Tenant Security Key the Tenant can self administer themselves, including setting up more Tenant Security Keys for other team members.
- **Account Controlled** - Setup a Tenant Security Key but **DO NOT SHARE** the public and private key with the Tenant. You can still use the Tenant Security Key to administer the Tenant but the account owner will have to perform the requests on behalf of the Tenant.

**Note: All of your Tenant's do not need to be configured the same.**

## Using a Security Key to Authenticate
To start the authentication process, you will need an Account or Tenant Security Key.

The diagram below shows the 4 steps of the authentication flow.

<img src="/assets/images/guides/getting-started/authentication-overview.png" style="width:600px;" title="Authentication Flow" alt="Authentication Flow"/>


#### Step 1 - Create a HMAC Authorization request to the Identity API
The Identity API can create 3 different types of Bearer Token for you. The one you need will depend on what you are trying to do. The table below shows the 3 types of task and the corresponding Identity API endpoint to call to get the appropriate Bearer Token. Choose the appropriate Identity endpoint to match the task at hand.

Task | Identity Endpoint
-|-
Management tasks in your account<br/>or tenants, including creating customer orders | Choose `Create Management API Bearer Token`
Processing a payout instruction<br/>or requesting payout options | Choose `Create Payout API Bearer Token`
Processing a collection instruction<br/>or requesting collection options | Choose `Create Collect API Bearer Token`

Using your the `publicKey` and `privateKey` of your Security Key you must now create an HMAC token from your request. See the example in our [Github Repository](https://github.com/Imburse-Payments/hmac-examples).

Add the `Authorization` header to your request.

```curl
Authorization HMAC <hmac-token>
```

#### Step 2 - Identity API response
The response from the Identity API, irrespective of the endpoint called, will be an access token response:

```json
{
  "accessToken": "string",
  "expires": "string"
}
```

Extract the `accessToken` property from the response object. This is your `Bearer Token` for accessing the Management and Transaction APIs here on in.

#### Step 3 - Create a Bearer Authorization request to the Management/Transaction API
Using the `Bearer Token` returned in Step 2, you can now proceed to make requests to the Management/Transaction APIs.

Add the following `Authorization` header to your request.

```curl
Authorization Bearer <bearer-token>
```

#### Step 4 - Management/Transaction API response
If you make a request to an endpoint that you don't have access to then your request will fail. It can also fail if the Bearer Token has expired. An appropriate status code and response object will be returned accordingly.
