---
layout: default
title: Tenant Users
toc: getting-started-tenant-users
body_color: body-primary
section_name: Tenant Users
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
breadcrumbs: "Getting Started,getting-started"
---
# Tenant Users
The Tenant User functions allow a user to administer users for a specific Tenant.

## Access Requirements
You will need a Tenant API Key to perform Tenant Management functions.

For more information on creating a Management Bearer Token, see:

- [Getting Started - Authentication](/pages/getting-started/authentication)
- [Tutorials - Get a Management Bearer Token](/pages/tutorials/get-management-bearer-token/)

## Functions
The available functions are:

- Invite new user
- Resend a user invitation
- Get a list of users
- Get a user by its User Id value
- Update a user
- Delete a user

## API Documentation
All the Tenant User Management API functions are fully documented in the [Tenant Users API documentation](https://api-docs.imbursepayments.com/#f38f11f6-cdfc-4f42-ad95-aacc0f204543).

## Models
The following models are used to manage Tenant Users.

### User Model
```json
 {
	"identity": "https://openid.imbursepayments.com/b112d20e-f4de-4dbe-8960-bd5622e7b452",
	"userId": "b112d20e-f4de-4dbe-8960-bd5622e7b452",
	"emailAddress": "myuser@mydomain.com",
	"expiryDate": "2019-07-30",
	"invitationStatus": "INVITED",
	"roles": [
		"tenant-admin"
	]
}
```

Property | Type | Description
-|-
`identity` | string | The unique identity assigned to this user when authenticated.
`userId` | string | A unique id for this user within a single Tenant.
`emailAddress` | string | The users email address.
`expiryDate` | string | The expiry date of the invitation.
`invitationStatus` | string | The invitation status.<br/>Valid values are:`INVITED`,`ACCEPTED`, and `EXPIRED`.
`roles` | Array of strings | The roles given to this user.


**Inviting New Users**<br/>
Each new user must be **invited** to the tenancy. An email will be sent to the `emailAddress` specified which the recipient must then accept before having access to the Imburse Portal. If a users doesn't receive the email or misplaces it, there is a **resend invitation** method that can be actioned.

**Accepting** an invitation is not part of the API as this is a process that is executed by the recipient using the Imburse Portal.

**Deleting a User**<br/>
Deleting a user will stop the user from logging in once their access token expires or if they log out and attempt to log back in again.

<mark>This action cannot be undone.</mark>