---
layout: default
title: Get a Management Bearer Token
toc: get-management-bearer-token
body_color: body-pink
section_name: Get a Management Bearer Token
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Tutorials,tutorials"
---
# Get a Management Bearer Token
This tutorial will take you through getting a Management Bearer Token using a Tenant API Key.

# Prerequisites
In addition to familiarity with the [Core Concepts](/pages/guides/core-concepts), you'll need the following:

- A `Tenant API Key`. See the tutorial [Creating a Tenant API Key](/pages/tutorials/creating-a-tenant-api-key) here if you need to create one.
- Familiar with creating an HMAC token using an API Key.

# Get Management Bearer Token
You will need to generate an HMAC token for the following request using a `Tenant API Key`.

**Note: If you already have a valid `Management Bearer Token` derived from a `Tenant API Key` then you can skip this tutorial. Use your existing `Management Bearer Token` rather than creating a new one. You don't have to create a new `Management Bearer Token` for each request.**

#### Request
Replace the `{hmac-token}` placeholder value with your actual HMAC token.

```curl
curl --location --request POST "https://sandbox-api.imbursepayments.com/identity/v1/hmac/management" \
  --header "Authorization: Hmac {hmac-token}"
```

#### Response
The `Management Bearer Token` will be contained in the `accessToken` property of the response body:

**Note the `accessToken` in the response below is an example bearer token and will not validate as a valid token.**

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ihf769kxcgk9304Y2NvdW50IjoiNzgyZjFiNzEtN2NhNC00NDY1LTkxN2YtNjhkNThmZmJlYzhiIiwidGVD.GHTUGHFRJFVJ8IHFDDF4WYtMDExNS00NmQ4LTg5ZmQtNDNhMmZhNTM3NmFkIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9wcmltYXJ5c2lkIjoiM2Q5YzY1Y2EtZjA3Yy1hZTBiLWVlNdfgffthjs8978gjghgfdgdbvxvxwicm9sZSI6WyJ0ZW5hbnQtYWRtaW4iLCJpbWJ1cnNlLWFkbWluIl0sImF1ZCI6Im1hbmFnZW1lbnQtYXBpIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiYjI0ZjI5NDg2YTg1Ndsfght546ffssgimklVS3VgtTEiLCJleHAiOjE1NjA1MTQ4MzUsImlzcyI6Imh0dHBzOi8vb3BlbmlkLmltYnVyc2VwYXltZW50cy5jb20vIn0.sWbEjgGnU6HAimkyiJ3h7427AEx-7ZRkMCjvoBVzLb4",
    "expires": "1560514835115"
}
```

# What's Next?
- [Installing and Configuring an App](/pages/tutorials/installing-and-configuring-an-app)
