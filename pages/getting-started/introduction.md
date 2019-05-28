---
layout: default
title: Getting Started
toc: getting-started-introduction
body_color: body-primary
section_name: Introduction
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Introduction
The Imburse API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Imburse API in sandbox mode, which does not affect your live data.

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
500, 501, 502, 503, 504 | **Internal Server Error** - Something went wrong on Imburse's end.

## Correlation IDs
Each API request has an associated correlation identifier. You can find this value in the response object under `correlation-id` when errors in the range 500 are returned.

You can also pass in your own **custom** correlation identifier into the request header `X-Correlation-ID`.

If you need to contact us about a specific request, providing the correlation identifier will ensure the fastest possible resolution.

## Metadata
The Payment Order objects have a metadata parameter. You can use this parameter to attach key-value data to these Imburse objects.

You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long.

Metadata is useful for storing additional, structured information on an object. As an example, you could store your user's full name and corresponding unique identifier from your system on a Imburse Payment Order object. Metadata is not used by Imburse. We will simply return your metadata to you in webhook responses relating to the Payment Order. You can then use this to give added context to your webhook response.

Do not store any sensitive information (personally identifiable information, card details, etc.) as metadata.

## Versioning
When we make backwards-incompatible changes to the API, we release new, numbered versions. The current version is **V1**. When a new version is released we will post an API upgrade guide and changelog.
