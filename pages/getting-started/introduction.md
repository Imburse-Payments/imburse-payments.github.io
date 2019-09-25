---
layout: default
title: Introduction
toc: getting-started-introduction
body_color: body-primary
section_name: Introduction
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Introduction
The Imburse API is organized around HTTP endpoints. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Imburse API in sandbox mode, which does not affect your live data.

## Endpoints
Our sandbox environment accesses a shared platform - that is, a platform that is shared with other organizations. Organizations do not share information with each other and are a completely self contained, isolated, entity within the platform system.

Sandbox API endpoint: **https://api-sandbox.imbursepayments.com**

The production environment you have access to is either a shared environment, similar to sandbox, or a dedicated environment just for your account.

Production API endpoint: **https://api.imbursepayments.com**

If you have a dedicated environment, then the specific endpoint would have been communicated via your account manager.

## Correlation IDs
Each API request has an associated correlation identifier. You can find this value in the response object under `correlation-id` when errors in the range 400 - 599 are returned.

You can also pass in your own **custom** correlation identifier into the request header `X-Correlation-ID`.

If you need to contact us about a specific request, providing the correlation identifier will ensure the fastest possible resolution.

## Error Codes
Imburse uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the **2xx** range indicate success, codes in the **4xx** range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.), and codes in the **5xx** range indicate an error with Imburse's servers,

Response Code | Meaning
--------------| -------
200 | **OK** - Everything worked as expected.
201 | **Created** - The request created a valid entity.
202 | **Accepted** - The request was accepted.
204 | **No Content** - The request was successful but no content should be expected back.
400 | **Bad Request** - The request was unacceptable, often due to missing a required parameter.
401 | **Unauthorized** - No valid API key provided.
402 | **Request Failed** - The parameters were valid but the request failed.
403 | **Forbidden** -- The requested endpoint is not valid for your user or role.
404 | **Not Found** - The requested resource doesn't exist.
409 | **Conflict** - The request conflicts with another request (perhaps due to using the same idempotent key).
429 | **Too Many Requests**	- Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
500, 501, 502, 503, 504 | **Internal Server Error** - Something went wrong on Imburse's servers.

## Error Handling
All errors responses will return structured json containing one or more error codes:

```json
{
  "timestamp": 1569248349,
  "correlationId": "0HLPSRAQ7S0I6:00000002",
  "errors": [
    {
      "errorCode": "TENANT_ID_IS_REQUIRED",
      "message": "Please reference [0HLPSRAQ7S0I6:00000002] when contacting support.",
      "messageTemplate": "Please reference {correlationId} when contacting support.",
      "metadata": {
        "correlationId": "0HLPSRAQ7S0I6:00000002"
      }
    }
  ]
}
```

The outer `correlationid` property is the Imburse correlation id.

The inner `correlationId` property within `errors` will be either your own custom `X-Correlation-Id` if that was passed in to the original request or it will be the Imburse correlation id.

## Access Control
Each API method in the API documentation is decorated with a *Role Required* attribute. To execute any API methods successfully, your API Key would need to have the role name specified added to the `roles` property.

See the [Account Management - Account Roles](/pages/getting-started/account-management/#account-roles) and [Account Management - Tenant Roles](/pages/getting-started/account-management/#tenant-roles) for lists of the available roles.

## Metadata
The Order and Instruction API requests take a `metadata` property as part of the request object. You can use this parameter to attach `key-value` data to the entity being created.

Metadata is useful for storing additional, structured information on an object. 

As an example, you could store your customers full name and corresponding customer id from your own system in an Order entity. 

Metadata is not used by Imburse. We will simply return your metadata to you in webhook responses relating to the Order. You can then use this to give added context to your webhook response.

**Please do not store any sensitive information (personally identifiable information, card details, etc.) as metadata.**

## Versioning
When we make backwards-incompatible changes to the API, we release new, numbered versions. The current version is **V1**. When a new version is released we will post an API upgrade guide and changelog.
