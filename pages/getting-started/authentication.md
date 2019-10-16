---
layout: default
title: Authentication
toc: getting-started-authentication
body_color: body-primary
section_name: Authentication
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Authentication
Imburse authenticates your API requests using your Accounts or Tenant's API keys. If you do not include your key when making an API request, or use one that is incorrect or outdated, Imburse returns an error.

Every account is provided with one Account API Key at registration time. All API requests exist in either sandbox or production modes and your accounts, tenants, apps, schemes, and so forth in one mode cannot be manipulated in the other.

Your API keys are available in the Client Portal, however, you cannot get the private key value after it has been created; either via the API or the Client Portal. You must safely store the private key values once they have been created.

## Functions
The available authentication functions are:

- Create an Access Token

## API Documentation
All the Authentication API functions are fully documented in the [Identity API documentation](https://api-docs.imbursepayments.com/?version=latest#a277483a-7eea-4ca5-8786-953801685626).

## HMAC and Bearer Tokens
HMAC (Hashed Message Authentication Code), is a specific type of MAC involving a cryptographic hash function and a secret cryptographic key. It is used to simultaneously verify both the **data integrity** and the **authentication** of a message. We use the HMAC authentication process for your initial authentication into the Imburse platform.

Once authenticated via the HMAC authentication scheme, we return you a Bearer token to use in subsequent requests.

The HMAC scheme is extremely secure but is computationally quite expensive, both on the client and the server; hence why we respond with a Bearer token once authenticated.

The Bearer token we respond with is a cryptic string signed on the Imburse platform and validated on the server for each API request.

## Account API Keys vs Tenant API Keys
Your account is the top level in a 2-tier hierarchy. Your account can have many Tenants. We have separate API Keys for Accounts and Tenants:

- **Account API Key** - access to create new Account API Keys, create new Tenants, and create new Tenant API Keys for your Tenants.
- **Tenant API Key** - access to configuring the Tenants Apps, Schemes, Payment Orders, and so forth.

Which security key you use when authenticating determines the context you are in - either Account or Tenant.

## Tenant Self Service vs Account Controlled
As the account owner, you can set up your Tenants in two ways:

- **Tenant Self Service** - Set them up with a Tenant API Key granted with full-access and **SHARE** the public and private key with the Tenant. With a full-access Tenant API Key the Tenant can self administer themselves, including setting up more Tenant API Keys for other team members.
- **Account Controlled** - Set up a Tenant API Key but **DO NOT SHARE** the public and private key with the Tenant. You can still use the Tenant API Key to administer the Tenant but the account owner will have to perform the requests on behalf of the Tenant.

**Note: All of your Tenant's do not need to be configured the same.**

## Using an API Key to Authenticate
To start the authentication process, you will need an Account or Tenant API Key.

The diagram below shows the 4 steps of the authentication flow.

<img src="/assets/images/guides/getting-started/authentication-overview.png" style="width:600px;" title="Authentication Flow" alt="Authentication Flow"/>


#### Step 1 - Create a HMAC Authorization request to the APIs
The Identity API creates an Access Token Token for to use in subsequence API calls


Using your the `publicKey` and `privateKey` of your API Key you must create an HMAC token from your request. See the example in our [Github Repository](https://github.com/Imburse-Payments/hmac-examples).

Add the `Authorization` header to your request.

```curl
Authorization HMAC <hmac-token>
```

#### Step 2 - Identity API response
The response from the Identity API will be an access token response:

```json
{
  "accessToken": "string",
  "expires": "string"
}
```

Extract the `accessToken` property from the response object. This is your `Access Token` for accessing APIs.


#### Step 3 - Create a Bearer Authorization request to the API
Using the `Access Token` returned in Step 2, you can now proceed to make requests to the API.

Add the following `Authorization` header to your request.

```curl
Authorization Bearer <bearer-token>
```

#### Step 4 - Add the Account Id and Tenant Id headers
Most API requests will require either an `x-account-id` or both `x-account-id` and `x-tenant-id` headers. See the [OpenApi docs](https://sandbox-api.imbursepayments.com/docs/index.html target="_blank") for the specific parameters required for the API call you want to call.

If the API call only requires the `x-account-id`, use Id of the Account associated with the Account API Key you are using for the request.

If the API call requires the `x-account-id` *and* `x-tenant-id`, use the Id of the Account that your Tenant is related to for the `x-account-id`. For the Tenant Id, use the Id of the Tenant associated with the Tenant API Key you are using for the request.

#### Step 5 - API responses
If you make a request to an endpoint that you don't have access to then your request will fail. It can also fail if the Bearer Token has expired. An appropriate status code and error response object will be returned accordingly.
